import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
      },
    }),
    federation({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
          './SurveyButton': './src/components/SurveyButton.tsx',
      },
      shared:["react","react-dom" ]
  })
  ],
  build:{
    target:"esnext"
  }
})
