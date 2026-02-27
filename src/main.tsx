import { createRoot } from "react-dom/client";
import "./index.css";

// Dynamically import App to ensure env vars are loaded first
const init = async () => {
  const { default: App } = await import("./App.tsx");
  createRoot(document.getElementById("root")!).render(<App />);
};

init();
