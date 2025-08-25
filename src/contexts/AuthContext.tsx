"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { hasValidSessionCookie, clearSessionCookie } from "@/lib/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  isGuest: boolean;
  isLoading: boolean;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  loginAsGuest: () => Promise<void>;
  logout: () => Promise<void>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any | null>(null);

  const checkAuthStatus = async () => {
    try {
      // First check if we have a session cookie
      if (!hasValidSessionCookie()) {
        setIsAuthenticated(false);
        setIsGuest(false);
        setUser(null);
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/guest/protected-resource`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setIsGuest(true);
        setUser({ type: "guest", ...data });
      } else {
        // If the session is invalid, clear it
        setIsAuthenticated(false);
        setIsGuest(false);
        setUser(null);
        clearSessionCookie();
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAuthenticated(false);
      setIsGuest(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const loginAsGuest = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/guest/create-anonymous-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setIsGuest(true);
        setUser({ type: "guest", ...data });
      } else {
        throw new Error("Failed to create guest session");
      }
    } catch (error) {
      console.error("Error creating guest session:", error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    // Implement regular login logic here
    // This would replace guest session with a real user session
    console.log("Regular login not implemented yet", { email, password });
  };

  const logout = async () => {
    // Clear session cookies and reset state
    try {
      clearSessionCookie();
      setIsAuthenticated(false);
      setIsGuest(false);
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value: AuthContextType = {
    isAuthenticated,
    isGuest,
    isLoading,
    user,
    login,
    loginAsGuest,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
