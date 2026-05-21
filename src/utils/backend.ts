const LOCAL_BACKEND_URL = "http://localhost:3001";
const PROD_BACKEND_URL = "https://resume-builder-rho-taupe.vercel.app";

export function getBackendUrl() {
  const envUrl = import.meta.env.VITE_BACKEND_URL?.trim();
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined") {
    const { hostname } = window.location;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return LOCAL_BACKEND_URL;
    }
  }

  return PROD_BACKEND_URL;
}