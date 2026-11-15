import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const resumePath = fileURLToPath(new URL('./src/assets/YOHANNES_FIKRE_Resume.pdf', import.meta.url))
const resumeUrl = '/assets/YOHANNES_FIKRE_Resume.pdf'

function resumeDownloadPlugin(): Plugin {
  return {
    name: 'resume-download',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split('?')[0] !== resumeUrl || (req.method !== 'GET' && req.method !== 'HEAD')) {
          next()
          return
        }

        const resume = readFileSync(resumePath)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', 'attachment; filename="YOHANNES_FIKRE_Resume.pdf"')
        res.setHeader('Content-Length', resume.length)
        res.end(req.method === 'HEAD' ? undefined : resume)
      })
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'assets/YOHANNES_FIKRE_Resume.pdf',
        source: readFileSync(resumePath),
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resumeDownloadPlugin()],
})
