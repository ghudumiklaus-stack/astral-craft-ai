import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
      proxy: {
        "/chatwoot-api": {
          target: "https://chatwoot.autoia.store",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/chatwoot-api/, ""),
        },
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL || "https://emfgqgpgeordtoejbnut.supabase.co"),
      'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify(env.VITE_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZmdxZ3BnZW9yZHRvZWpibnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMjgxNTksImV4cCI6MjA4NDcwNDE1OX0.NJvBZiwl59AY_bMGn5T5IoCk2P4U5Q6ZosMBUy119YY"),
      'import.meta.env.VITE_SUPABASE_PROJECT_ID': JSON.stringify(env.VITE_SUPABASE_PROJECT_ID || "emfgqgpgeordtoejbnut"),
    },
  };
});
