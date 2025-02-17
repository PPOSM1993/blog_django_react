import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"


export default defineConfig({
  plugins: [react()],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/prop-types': 'error', // Cambiar 'warn' a 'error' si sigue sin detectarlo
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})