const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\5b0b6f90-f386-45a8-a64a-09342233732e';

async function run() {
  console.log("Launching browser...");
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome'
  });
  
  const page = await browser.newPage();
  // Use a height that fits a mobile device preview plus navigation bar
  await page.setViewportSize({ width: 1280, height: 1200 });
  
  console.log("Navigating to Figma site...");
  await page.goto('https://cape-crate-39013748.figma.site/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  
  const tabs = [
    "Splash",
    "Login",
    "Dashboard",
    "Leads",
    "Add Lead",
    "Add Visit",
    "Follow-up",
    "Add Task",
    "Admin (MAITEXA)",
    "WhatsApp"
  ];
  
  const results = {};
  
  for (const tab of tabs) {
    console.log(`\n--- Processing tab: ${tab} ---`);
    // Find the button with the tab text
    const buttonSelector = `button:has-text("${tab}")`;
    const btn = page.locator(buttonSelector).first();
    
    if (await btn.count() > 0) {
      console.log(`Clicking button for ${tab}...`);
      await btn.click();
      // Wait for content transitions
      await page.waitForTimeout(3000);
      
      // Let's capture screenshot
      const filename = `node_${tab.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`;
      await page.screenshot({ path: path.join(brainDir, filename) });
      console.log(`Saved screenshot to ${filename}`);
      
      // Let's scrape the main page content. Let's dump all text from the page, except the figma navigation bar at the bottom.
      // The figma navigation buttons are at the bottom.
      // We can grab the text inside the main content container. Let's find it.
      // Let's evaluate and dump text of elements.
      const pageInfo = await page.evaluate((tabName) => {
        // Let's find the container of the mobile app. It's usually inside a centered div or card.
        // Let's find all divs with styling, but let's exclude the navigation container itself if possible.
        // Or let's just get the main text content, excluding the button list.
        const bodyText = document.body.innerText;
        // Let's also look for all input fields, placeholders, labels, tables, list items.
        const inputs = Array.from(document.querySelectorAll('input, select, textarea')).map(el => {
          return {
            type: el.tagName.toLowerCase() === 'input' ? el.type : el.tagName.toLowerCase(),
            placeholder: el.placeholder || '',
            value: el.value || '',
            name: el.name || '',
            labels: Array.from(el.labels || []).map(l => l.innerText)
          };
        });
        
        // Let's find all items that look like cards or lists
        // Let's return the full HTML and text structure of the body, excluding the navigation panel at the bottom.
        // Let's get the innerHTML of the main content container.
        // We can inspect elements. Let's return text and some info.
        return {
          bodyText,
          inputs
        };
      }, tab);
      
      results[tab] = pageInfo;
      
      // Let's save the HTML content of the page for detailed inspection
      const htmlFilename = `node_${tab.toLowerCase().replace(/[^a-z0-9]/g, '_')}.html`;
      fs.writeFileSync(path.join(brainDir, htmlFilename), await page.content());
      console.log(`Saved HTML to ${htmlFilename}`);
    } else {
      console.log(`Button for ${tab} not found!`);
    }
  }
  
  fs.writeFileSync(path.join(brainDir, 'scrape_results.json'), JSON.stringify(results, null, 2));
  console.log("\nSaved scrape_results.json");
  
  await browser.close();
}

run().catch(err => {
  console.error("Error in scraping script:", err);
});
