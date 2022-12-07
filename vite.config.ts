import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/desafio-ignite-reactjs-2022-todo-list/',
  plugins: [react()]
})
