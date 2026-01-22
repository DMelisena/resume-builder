import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'react-core': ['react', 'react-dom', 'react-router-dom'],
          // Chakra UI
          'chakra-ui': ['@chakra-ui/react', '@chakra-ui/icons', '@emotion/react', '@emotion/styled', 'framer-motion'],
          // i18n
          i18n: ['react-i18next', 'i18next'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 700,
  },
})
