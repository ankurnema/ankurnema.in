import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const svgBuffer = readFileSync(join(root, 'public', 'icon.svg'))

const [png32, png16] = await Promise.all([
  sharp(svgBuffer).resize(32, 32).png().toBuffer(),
  sharp(svgBuffer).resize(16, 16).png().toBuffer(),
])

// ICO format: ICONDIR + 2×ICONDIRENTRY + PNG data
const ICONDIR_SIZE = 6
const ICONDIRENTRY_SIZE = 16
const dataOffset = ICONDIR_SIZE + 2 * ICONDIRENTRY_SIZE // = 38

const ico = Buffer.alloc(dataOffset + png32.length + png16.length)
let pos = 0

// ICONDIR header
ico.writeUInt16LE(0, pos); pos += 2       // reserved
ico.writeUInt16LE(1, pos); pos += 2       // type: 1 = ICO
ico.writeUInt16LE(2, pos); pos += 2       // count: 2

// ICONDIRENTRY for 32×32
ico.writeUInt8(32, pos); pos++            // width
ico.writeUInt8(32, pos); pos++            // height
ico.writeUInt8(0, pos); pos++             // color count (0 = true color, no palette)
ico.writeUInt8(0, pos); pos++             // reserved
ico.writeUInt16LE(1, pos); pos += 2       // planes
ico.writeUInt16LE(32, pos); pos += 2      // bit count
ico.writeUInt32LE(png32.length, pos); pos += 4
ico.writeUInt32LE(dataOffset, pos); pos += 4

// ICONDIRENTRY for 16×16
ico.writeUInt8(16, pos); pos++
ico.writeUInt8(16, pos); pos++
ico.writeUInt8(0, pos); pos++
ico.writeUInt8(0, pos); pos++
ico.writeUInt16LE(1, pos); pos += 2
ico.writeUInt16LE(32, pos); pos += 2
ico.writeUInt32LE(png16.length, pos); pos += 4
ico.writeUInt32LE(dataOffset + png32.length, pos); pos += 4

// Image data
png32.copy(ico, pos); pos += png32.length
png16.copy(ico, pos)

writeFileSync(join(root, 'public', 'favicon.ico'), ico)
console.log('favicon.ico written:', ico.length, 'bytes')
