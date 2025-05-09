import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ChefAbdelghaniElbadawyPatisserie/',
  plugins: [
    react({
      // Disable React DevTools message in console
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  }
})
