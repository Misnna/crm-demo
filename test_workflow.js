const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

async function testWorkflow() {
  console.log("Starting local automated Finscript CRM tests...");
  
  // Launch Playwright headless chrome browser
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome'
  });
  
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  
  // Go to local index.html file
  const localUrl = `file://${path.resolve(__dirname, 'index.html')}`;
  console.log(`Loading local app from URL: ${localUrl}`);
  await page.goto(localUrl, { waitUntil: 'networkidle' });
  
  // 1. Verify Page Title
  console.log("Checking page title...");
  const title = await page.title();
  if (title !== "Finscript - Business Consultancy CRM") {
    throw new Error(`Invalid page title: "${title}"`);
  }
  console.log("✓ Page title is correct.");
  
  // 2. Verify Login Overlay is visible and fails on invalid login
  console.log("Verifying login screen exists...");
  const loginFormVisible = await page.isVisible('#login-screen');
  if (!loginFormVisible) {
    throw new Error("Login screen is not visible on load.");
  }
  
  console.log("Attempting invalid login...");
  await page.fill('#login-email', 'wrong@email.com');
  await page.fill('#login-password', 'wrongpassword');
  await page.click('#login-form button[type="submit"]');
  
  await page.waitForTimeout(1000);
  const errorVisible = await page.isVisible('#login-error-container');
  if (!errorVisible) {
    throw new Error("Error container not shown on invalid login.");
  }
  const errorText = await page.innerText('#login-error-container');
  console.log(`✓ Invalid login handled. Error text: "${errorText}"`);
  
  // 3. Attempt valid login
  console.log("Attempting valid login...");
  await page.fill('#login-email', 'executive@demo.com');
  await page.fill('#login-password', 'password123');
  await page.click('#login-form button[type="submit"]');
  
  await page.waitForTimeout(1500);
  
  const loginHidden = await page.isHidden('#login-screen');
  const mainAppVisible = await page.isVisible('#app-container');
  
  if (!loginHidden || !mainAppVisible) {
    throw new Error("Failed to redirect to application dashboard after valid login.");
  }
  console.log("✓ Login successful, redirected to dashboard.");
  
  // 4. Verify Metrics and Navigation
  console.log("Testing dashboard metrics values...");
  const activeLeadsCount = await page.innerText('#metric-leads');
  const openDealsCount = await page.innerText('#metric-deals');
  console.log(`✓ Dashboard loaded. Active Leads: ${activeLeadsCount}, Open Deals: ${openDealsCount}`);
  
  // 5. Navigate to Leads
  console.log("Navigating to Leads & Enquiries tab...");
  await page.click('.nav-item[data-module="leads"]');
  await page.waitForTimeout(500);
  
  const leadsSectionVisible = await page.isVisible('#leads-section');
  if (!leadsSectionVisible || await page.isHidden('#leads-section')) {
    throw new Error("Leads section did not load correctly.");
  }
  console.log("✓ Leads section is visible.");
  
  // 6. Test Leads Search filter
  console.log("Searching for 'Priya' in leads...");
  await page.fill('#leads-search', 'Priya');
  await page.waitForTimeout(1000);
  
  // Find all lead cards in the #leads-grid container specifically
  const visibleCardNames = await page.$$eval('#leads-grid .lead-card-name', els => 
    els.map(el => el.innerText.trim())
  );
  
  console.log("Visible lead cards in grid:", visibleCardNames);
  
  if (!visibleCardNames.includes("Priya Sharma")) {
    throw new Error("Priya Sharma card is not visible in leads grid.");
  }
  if (visibleCardNames.includes("Rahul Kumar")) {
    throw new Error("Rahul Kumar card is still visible in leads grid after searching 'Priya'.");
  }
  console.log("✓ Real-time search filter verified successfully in leads grid container.");
  
  // 7. Add a new Lead
  console.log("Toggling Add Lead Form...");
  // Clear search query so new lead is visible later
  await page.fill('#leads-search', '');
  await page.click('button:has-text("Add New Lead")');
  await page.waitForTimeout(500);
  
  console.log("Submitting new lead form...");
  await page.fill('#al-name', 'Test Automator');
  await page.fill('#al-company', 'Stanford Consulting Group');
  await page.fill('#al-location', 'California, USA');
  await page.fill('#al-phone', '+1 555 0199');
  await page.fill('#al-email', 'test.auto@stanford.edu');
  await page.selectOption('#al-industry', 'Consulting');
  await page.selectOption('#al-business-type', 'Private Limited');
  await page.fill('#al-notes', 'This is an automated test lead.');
  await page.click('.switch:has(#al-hot)'); // Toggle hot lead switch
  await page.click('#add-lead-form button[type="submit"]');
  
  await page.waitForTimeout(1000);
  
  // Verify new lead card is visible.
  console.log("Checking if new lead exists in Leads tab...");
  await page.fill('#leads-search', 'Test Automator');
  await page.waitForTimeout(500);
  
  const newLeadCardVisible = await page.isVisible('text=Test Automator');
  if (!newLeadCardVisible) {
    throw new Error("Newly added lead not found in the leads database.");
  }
  console.log("✓ Lead creation and persistence verified.");
  
  // 8. Test Theme Toggler
  console.log("Testing theme toggle button...");
  const bodyClassInitially = await page.evaluate(() => document.body.className);
  await page.click('#theme-toggle');
  await page.waitForTimeout(500);
  const bodyClassAfterToggle = await page.evaluate(() => document.body.className);
  
  if (bodyClassInitially === bodyClassAfterToggle) {
    throw new Error("Theme class did not change after toggle click.");
  }
  console.log(`✓ Theme toggler works. Initial: "${bodyClassInitially}", After toggle: "${bodyClassAfterToggle}"`);
  
  await browser.close();
  console.log("\nALL INTEGRATION TESTS PASSED SUCCESSFULLY! ✓");
}

testWorkflow().catch(err => {
  console.error("❌ TEST RUNNER ERROR:", err);
  process.exit(1);
});
