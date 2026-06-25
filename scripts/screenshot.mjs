import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const base = process.env.PREVIEW_URL ?? 'http://localhost:4173'

async function main() {
  await mkdir('qa-screenshots', { recursive: true })

  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await page.screenshot({ path: 'qa-screenshots/home-desktop.png', fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await page.screenshot({ path: 'qa-screenshots/home-mobile.png', fullPage: true })

  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base, { waitUntil: 'networkidle' })
  await page.evaluate(() => window.scrollTo(0, 2400))
  await page.waitForTimeout(600)
  await page.screenshot({ path: 'qa-screenshots/services-desktop.png' })

  await page.goto(`${base}/pricing`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(600)
  await page.screenshot({ path: 'qa-screenshots/pricing-desktop.png', fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(`${base}/contact`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(600)
  await page.screenshot({ path: 'qa-screenshots/contact-mobile.png', fullPage: true })

  await browser.close()
  console.log('Screenshots saved to qa-screenshots/')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
