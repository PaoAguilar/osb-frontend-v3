// Utility functions for authentication

export const getSessionCookieName = (): string => {
  // The backend uses 'session_token' as the cookie name
  return "session_token";
};

export const hasValidSessionCookie = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const cookieName = getSessionCookieName();
  return document.cookie.includes(cookieName);
};

export const clearSessionCookie = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  const cookieName = getSessionCookieName();
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const getSessionCookie = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const cookieName = getSessionCookieName();
  const cookies = document.cookie.split(";");

  const sessionCookie = cookies.find((cookie) =>
    cookie.trim().startsWith(`${cookieName}=`)
  );

  if (sessionCookie) {
    return sessionCookie.split("=")[1];
  }

  return null;
};
