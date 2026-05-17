import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1E3A5F"/>
  <rect x="0" y="580" width="1200" height="50" fill="#163354"/>
  <text x="600" y="270" font-family="Inter, Arial, Helvetica, sans-serif" font-size="88" font-weight="600" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">Ankur Nema</text>
  <rect x="500" y="330" width="200" height="3" fill="#D4A017"/>
  <text x="600" y="400" font-family="Inter, Arial, Helvetica, sans-serif" font-size="36" font-weight="400" fill="#D4A017" text-anchor="middle" dominant-baseline="middle">DevOps Consulting · Mentoring · Career Guidance</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(join(root, 'public', 'og-default.png'))
console.log('og-default.png written: 1200x630')
