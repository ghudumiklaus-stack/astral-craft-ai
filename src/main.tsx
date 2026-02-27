import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force env validation
console.log("ENV check:", {
  hasUrl: !!import.meta.env.VITE_SUPABASE_URL,
  hasKey: !!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
});

createRoot(document.getElementById("root")!).render(<App />);
