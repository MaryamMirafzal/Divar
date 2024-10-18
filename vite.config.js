import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { paths } from './src/constants/paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true // این تنظیم را به true تنظیم کنید
  },
  plugins: [react()],
  resolve:{ 
    alias: {
      ...paths.reduce(
        (acc, cur)=> ({
          ...acc,
          [cur] :`/${cur === 'src' ? cur : "src/" + cur}`
        }),"")
    }
  }
})


