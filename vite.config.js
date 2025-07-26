import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";
import path from "path";
import { log } from 'console';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()],
  
})