"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

export const AuthStatus = () => {
  const { isAuthenticated, isGuest, isLoading, logout } = useAuth();

  if (isLoading) {
    return <div className="text-sm text-gray-500">Checking auth status...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="text-sm text-yellow-500">Creating guest session...</div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        {isGuest ? (
          <span className="text-orange-500">Guest User</span>
        ) : (
          <span className="text-green-500">Authenticated User</span>
        )}
      </div>
      <Button onClick={logout} variant="outline" size="sm" className="text-xs">
        Logout
      </Button>
    </div>
  );
};
