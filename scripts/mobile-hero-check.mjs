import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";

const outDir = path.resolve("playwright-shots");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const phones = [
  { name: "iphone-se", ...devices["iPhone SE"] },
  { name: "iphone-14", ...devices["iPhone 14"] },
  { name: "pixel-7", ...devices["Pixel 7"] },
];

for (const phone of phones) {
  const { name, ...device } = phone;
  const context = await browser.newContext({ ...device });
  const page = await context.newPage();
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(800);

  const report = await page.evaluate(() => {
    const section = document.querySelector('section[aria-label="Apresentação"]');
    const h1s = [
      ...document.querySelectorAll('section[aria-label="Apresentação"] h1'),
    ];
    const h2s = [
      ...document.querySelectorAll('section[aria-label="Apresentação"] h2'),
    ];
    const nameEl = h1s[0];
    const nameBox = nameEl?.getBoundingClientRect();
    const overlaps = h2s.map((h2) => {
      const r = h2.getBoundingClientRect();
      const overlap =
        nameBox &&
        !(
          r.right < nameBox.left ||
          r.left > nameBox.right ||
          r.bottom < nameBox.top ||
          r.top > nameBox.bottom
        );
      return {
        text: h2.textContent?.trim(),
        top: Math.round(r.top),
        bottom: Math.round(r.bottom),
        overlap: Boolean(overlap),
      };
    });
    return {
      viewport: { w: window.innerWidth, h: window.innerHeight },
      sectionH: section
        ? Math.round(section.getBoundingClientRect().height)
        : null,
      name: nameBox
        ? {
            text: nameEl.textContent?.trim(),
            top: Math.round(nameBox.top),
            bottom: Math.round(nameBox.bottom),
            h: Math.round(nameBox.height),
            parentPosition: getComputedStyle(nameEl.parentElement).position,
          }
        : null,
      h2s: overlaps,
    };
  });

  console.log(JSON.stringify({ device: name, ...report }, null, 2));
  await page.screenshot({
    path: path.join(outDir, `${name}-hero.png`),
    fullPage: false,
  });
  await page.screenshot({
    path: path.join(outDir, `${name}-full.png`),
    fullPage: true,
  });
  await context.close();
}

await browser.close();
console.log("shots saved to", outDir);
