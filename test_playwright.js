const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\5b0b6f90-f386-45a8-a64a-09342233732e';

async function run() {
  console.log("Launching browser...");
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome' // or 'msedge'
  });
  
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  
  console.log("Navigating to Figma site...");
  await page.goto('https://cape-crate-39013748.figma.site/', { waitUntil: 'networkidle' });
  
  console.log("Waiting for content...");
  await page.waitForTimeout(5000);
  
  // Dump page title
  console.log("Page title:", await page.title());
  
  // Let's find all buttons or elements that might be the tab controls
  const buttons = await page.$$eval('button, [role="button"], a, div', els => {
    return els
      .map(el => ({
        text: el.innerText ? el.innerText.trim() : '',
        tagName: el.tagName,
        className: el.className,
        id: el.id
      }))
      .filter(x => x.text.length > 0 && x.text.length < 50);
  });
  
  console.log("Found text elements:");
  console.log(JSON.stringify(buttons, null, 2));
  
  // Save page screenshot to see what's currently loaded
  await page.screenshot({ path: path.join(brainDir, 'node_initial.png') });
  console.log("Saved node_initial.png");
  
  await browser.close();
}

run().catch(err => {
  console.error("Error running script:", err);
});
