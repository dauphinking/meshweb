// Run with: node scripts/watermark.mjs
// Adds "ScreenMesh" text watermark to all product images in public/images/
// Requires: pnpm approve-builds (to allow sharp build scripts)
// Or: pnpm add sharp --ignore-scripts=false

import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join } from 'path'

const IMAGES_DIR = './public/images'
const WATERMARK_TEXT = 'ScreenMesh'

// Create SVG watermark
function createWatermarkSVG(width, height) {
  const fontSize = Math.max(14, Math.floor(width * 0.04))
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="${width - fontSize * 8}" y="${height - fontSize * 2}"
            width="${fontSize * 7.5}" height="${fontSize * 1.4}"
            fill="rgba(0,0,0,0.45)" rx="3"/>
      <text x="${width - fontSize * 4.5}" y="${height - fontSize * 0.8}"
            font-family="Arial, sans-serif" font-size="${fontSize}"
            font-weight="bold" fill="white" text-anchor="middle">
        ${WATERMARK_TEXT}
      </text>
    </svg>
  `)
}

async function watermarkImage(filePath) {
  try {
    const image = sharp(filePath)
    const meta = await image.metadata()
    const { width, height } = meta

    const watermarkSvg = createWatermarkSVG(width, height)

    await image
      .composite([{ input: watermarkSvg, blend: 'over' }])
      .toFile(filePath.replace('.png', '_wm.png').replace('.jpg', '_wm.jpg'))

    console.log(`Watermarked: ${filePath}`)
  } catch (err) {
    console.error(`Failed: ${filePath}`, err.message)
  }
}

async function main() {
  const files = await readdir(IMAGES_DIR)
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f))
  console.log(`Found ${imageFiles.length} images to watermark...`)
  for (const file of imageFiles) {
    await watermarkImage(join(IMAGES_DIR, file))
  }
  console.log('Done!')
}

main()
