import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
    plugins: [react()],
    preview: {
        allowedHosts: ['vikram-portfolio-rxs9.onrender.com'],
    },
})
=======
  plugins: [react()],
  preview: {
    allowedHosts: 'all',
  },
})
>>>>>>> 8da6790a8169203633d0b1bc3e78de11ecaf5070
