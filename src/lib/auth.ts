// Utility functions for authentication

export const getSessionCookieName = (): string => {
  // You can adjust this based on your backend cookie name
  // Common names: 'session', 'sessionId', 'auth', 'token'
  return "session";
};

export const debugCookies = (): void => {
  console.log("All cookies:", document.cookie);
  const cookies = document.cookie.split(";");
  cookies.forEach((cookie) => {
    console.log("Cookie:", cookie.trim());
  });
};

export const hasValidSessionCookie = (): boolean => {
  const cookieName = getSessionCookieName();
  return document.cookie.includes(cookieName);
};

export const clearSessionCookie = (): void => {
  const cookieName = getSessionCookieName();
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const getSessionCookie = (): string | null => {
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
