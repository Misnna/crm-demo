/* ==========================================
   FINSCRIPT - BUSINESS CONSULTANCY LOGIC (JS)
   ========================================== */

// --- Initial Mock Data Database ---
const INITIAL_LEADS = [
  {
    id: "lead_1",
    name: "Priya Sharma",
    designation: "CEO",
    company: "Sharma Textiles Ltd",
    industry: "Manufacturing",
    businessType: "Private Limited",
    employees: 45,
    turnover: "$800,000",
    location: "Mumbai, India",
    website: "https://sharmatextiles.com",
    social: "linkedin.com/company/sharmatextiles",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    email: "priya@sharmatextiles.com",
    source: "LinkedIn Referral",
    notes: "Requires company tax compliance review and GST filing services.",
    hot: true,
    status: "Qualified",
    created: "2026-06-15"
  },
  {
    id: "lead_2",
    name: "Rahul Kumar",
    designation: "Managing Partner",
    company: "Kumar & Associates LLP",
    industry: "Retail & E-commerce",
    businessType: "LLP",
    employees: 12,
    turnover: "$150,000",
    location: "Delhi, India",
    website: "https://kumarretail.in",
    social: "instagram.com/kumarretail",
    phone: "+91 87654 32109",
    whatsapp: "+91 87654 32109",
    email: "rahul@kumarretail.in",
    source: "Direct Outreach",
    notes: "Interested in setting up Trademark registration.",
    hot: false,
    status: "New",
    created: "2026-06-20"
  },
  {
    id: "lead_3",
    name: "Anita Verma",
    designation: "Founder",
    company: "Apex Tech Labs",
    industry: "IT & Tech Services",
    businessType: "Private Limited",
    employees: 8,
    turnover: "$90,000",
    location: "Bangalore, India",
    website: "https://apextechlabs.co",
    social: "linkedin.com/company/apextech",
    phone: "+91 76543 21098",
    whatsapp: "+91 76543 21098",
    email: "anita@apextechlabs.co",
    source: "Organic Search",
    notes: "Needs full legal structure registration and monthly bookkeeping.",
    hot: true,
    status: "Converted",
    created: "2026-06-10"
  },
  {
    id: "lead_4",
    name: "Karan Mehta",
    designation: "Director",
    company: "Mehta Logistics Solutions",
    industry: "Manufacturing",
    businessType: "Partnership",
    employees: 30,
    turnover: "$400,000",
    location: "Pune, India",
    website: "https://mehtalogistics.com",
    phone: "+91 65432 10987",
    whatsapp: "+91 65432 10987",
    email: "karan@mehtalogistics.com",
    source: "Exhibition/Seminar",
    notes: "Follow up call required to pitch ROC compliance filing services.",
    hot: false,
    status: "Follow-up",
    created: "2026-06-22"
  },
  {
    id: "lead_5",
    name: "Sunita Patel",
    designation: "Owner",
    company: "Patel Organic Foods",
    industry: "Retail & E-commerce",
    businessType: "Proprietorship",
    employees: 3,
    turnover: "$50,000",
    location: "Ahmedabad, India",
    website: "https://patelorganics.com",
    phone: "+91 54321 09876",
    whatsapp: "+91 54321 09876",
    email: "sunita@patelorganics.com",
    source: "Website Contact Form",
    notes: "Budget concerns, but interested in digital marketing consultation.",
    hot: false,
    status: "Rejected",
    created: "2026-06-18"
  }
];

const INITIAL_STAFF = [
  { id: "staff_1", name: "Rahul Sharma", email: "rahul@consultancy.com", role: "Managing Director", status: "active" },
  { id: "staff_2", name: "Priya Singh", email: "priya@consultancy.com", role: "Manager", status: "active" },
  { id: "staff_3", name: "Amit Gupta", email: "amit@consultancy.com", role: "Supervisor", status: "active" },
  { id: "staff_4", name: "Sonia Mehta", email: "sonia@consultancy.com", role: "Marketing Executive", status: "active" },
  { id: "staff_5", name: "Neha Patel", email: "neha@consultancy.com", role: "HR", status: "inactive" }
];

const INITIAL_ACCOUNTS = [
  {
    id: "account_1",
    company: "Apex Tech Labs",
    structure: "Private Limited",
    gst: "29AAAAA1111A1Z1",
    pancin: "U74999KA2026PTC123456",
    location: "Bangalore, India",
    website: "https://apextechlabs.co",
    created: "2026-06-10"
  }
];

const INITIAL_CONTACTS = [
  {
    id: "contact_1",
    accountId: "account_1",
    company: "Apex Tech Labs",
    name: "Anita Verma",
    role: "Founder",
    phone: "+91 76543 21098",
    whatsapp: "+91 76543 21098",
    email: "anita@apextechlabs.co"
  }
];

const INITIAL_DEALS = [
  {
    id: "deal_1",
    accountId: "account_1",
    company: "Apex Tech Labs",
    name: "Apex Tech - Incorporation Deal",
    value: 12000,
    closeDate: "2026-07-15",
    owner: "Sonia Mehta",
    stage: "Proposal",
    probability: 60,
    created: "2026-06-10"
  }
];

const INITIAL_REQUIREMENTS = [
  {
    accountId: "account_1",
    company: "Apex Tech Labs",
    registration: { companyReg: true, trademarkReg: true, gstReg: false, otherReg: false },
    compliance: { accounting: true, incomeTax: false, gstFiling: false, rocFiling: false, otherComp: false },
    marketing: { digitalMkt: false, seo: false, webDev: true, socialMkt: false, otherSvc: false }
  }
];

const INITIAL_TASKS = [
  { id: "task_1", title: "Review Apex Tech incorporation drafts", due: "2026-06-29", priority: "HIGH", completed: false },
  { id: "task_2", title: "Verify GST Registration document formats", due: "2026-06-27", priority: "MEDIUM", completed: true },
  { id: "task_3", title: "Follow up with Priya Sharma regarding qualified status", due: "2026-06-30", priority: "LOW", completed: false }
];

const INITIAL_ACTIVITIES = [
  {
    id: "act_1",
    dealId: "deal_1",
    company: "Apex Tech Labs",
    type: "Call",
    title: "Introductory Discovery Call",
    time: "Today, 10:30 AM",
    status: "Completed",
    notes: "Discussed requirements for private limited registration."
  },
  {
    id: "act_2",
    dealId: "deal_1",
    company: "Apex Tech Labs",
    type: "Meeting",
    title: "GST compliance mapping consultation",
    time: "Yesterday, 2:15 PM",
    status: "Completed",
    notes: "Reviewed draft structure of GST registry details."
  }
];

const INITIAL_QUOTES = [
  {
    id: "quote_1",
    dealId: "deal_1",
    company: "Apex Tech Labs",
    product: "Corporate Registration & Bookkeeping Package",
    price: 10000,
    tax: 18,
    discount: 500,
    total: 11300,
    created: "2026-06-12"
  }
];

const INITIAL_INVOICES = [
  {
    id: "inv_1",
    dealId: "deal_1",
    company: "Apex Tech Labs",
    amount: 11300,
    outstanding: 6300,
    date: "2026-06-13",
    due: "2026-07-13",
    status: "Partially Paid"
  }
];

const INITIAL_PAYMENTS = [
  {
    id: "pay_1",
    invoiceId: "inv_1",
    company: "Apex Tech Labs",
    amount: 5000,
    date: "2026-06-14",
    mode: "Bank Wire / IMPS",
    utr: "UTIB00029312903",
    remarks: "Advance retainer token payment"
  }
];

const INITIAL_DELIVERIES = [
  {
    id: "del_1",
    dealId: "deal_1",
    company: "Apex Tech Labs",
    status: "In Progress",
    assigned: "Priya Singh",
    files: [
      { name: "ApexTech_PANCard.pdf", type: "PAN Card Registration" }
    ]
  }
];

const INITIAL_TICKETS = [
  {
    id: "ticket_1",
    company: "Apex Tech Labs",
    type: "Registration delay",
    priority: "HIGH",
    exec: "Amit Gupta",
    notes: "Statutory portal error is delaying PAN registration upload.",
    status: "Open",
    resolution: "Pending response from government IT help desk."
  }
];

// --- Application State Management ---
class AppState {
  constructor() {
    this.leads = this.loadData('crm_leads', INITIAL_LEADS);
    this.staff = this.loadData('crm_staff', INITIAL_STAFF);
    this.accounts = this.loadData('crm_accounts', INITIAL_ACCOUNTS);
    this.contacts = this.loadData('crm_contacts', INITIAL_CONTACTS);
    this.deals = this.loadData('crm_deals', INITIAL_DEALS);
    this.requirements = this.loadData('crm_requirements', INITIAL_REQUIREMENTS);
    this.tasks = this.loadData('crm_tasks', INITIAL_TASKS);
    this.activities = this.loadData('crm_activities', INITIAL_ACTIVITIES);
    this.quotes = this.loadData('crm_quotes', INITIAL_QUOTES);
    this.invoices = this.loadData('crm_invoices', INITIAL_INVOICES);
    this.payments = this.loadData('crm_payments', INITIAL_PAYMENTS);
    this.deliveries = this.loadData('crm_deliveries', INITIAL_DELIVERIES);
    this.tickets = this.loadData('crm_tickets', INITIAL_TICKETS);
    this.loggedInUser = this.loadData('crm_user', null);
    this.theme = this.loadData('crm_theme', 'dark');
  }

  loadData(key, defaultValue) {
    const raw = localStorage.getItem(key);
    if (raw === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return defaultValue;
    }
  }

  saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  updateLeads(data) { this.leads = data; this.saveData('crm_leads', data); }
  updateStaff(data) { this.staff = data; this.saveData('crm_staff', data); }
  updateAccounts(data) { this.accounts = data; this.saveData('crm_accounts', data); }
  updateContacts(data) { this.contacts = data; this.saveData('crm_contacts', data); }
  updateDeals(data) { this.deals = data; this.saveData('crm_deals', data); }
  updateRequirements(data) { this.requirements = data; this.saveData('crm_requirements', data); }
  updateTasks(data) { this.tasks = data; this.saveData('crm_tasks', data); }
  updateActivities(data) { this.activities = data; this.saveData('crm_activities', data); }
  updateQuotes(data) { this.quotes = data; this.saveData('crm_quotes', data); }
  updateInvoices(data) { this.invoices = data; this.saveData('crm_invoices', data); }
  updatePayments(data) { this.payments = data; this.saveData('crm_payments', data); }
  updateDeliveries(data) { this.deliveries = data; this.saveData('crm_deliveries', data); }
  updateTickets(data) { this.tickets = data; this.saveData('crm_tickets', data); }
  setLoggedInUser(user) { this.loggedInUser = user; this.saveData('crm_user', user); }
  setTheme(theme) { this.theme = theme; this.saveData('crm_theme', theme); }
}

const state = new AppState();
let activeLeadFilter = 'All';
let leadsSearchQuery = '';
let accountsSearchQuery = '';
let contactsSearchQuery = '';
let dealsSearchQuery = '';
let activeReportSubTab = 'leads';

let dashboardChartInstance = null;
let statusChartInstance = null;

// --- Chart Instances in Reports module ---
let repLeadSourceChart = null;
let repDealStatusChart = null;
let repRevenueChart = null;
let repActivityChart = null;
let repEmployeeChart = null;

// --- Notification Toast Helper ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'info-circle';
  if (type === 'success') icon = 'check-circle';
  if (type === 'error') icon = 'exclamation-circle';
  
  toast.innerHTML = `
    <i class="fas fa-${icon}"></i>
    <div class="toast-message">${message}</div>
    <div class="toast-close"><i class="fas fa-times"></i></div>
  `;
  
  container.appendChild(toast);
  toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- Initials Helper ---
function getInitials(name) {
  if (!name) return '??';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

// --- App Load Event ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  checkAuth();
  bindEvents();
});

function initTheme() {
  if (state.theme === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('theme-icon').className = 'fas fa-moon';
  } else {
    document.body.classList.remove('light-theme');
    document.getElementById('theme-icon').className = 'fas fa-sun';
  }
}

function checkAuth() {
  const loginScreen = document.getElementById('login-screen');
  const appContainer = document.getElementById('app-container');
  
  if (state.loggedInUser) {
    loginScreen.classList.add('hidden');
    appContainer.classList.remove('hidden');
    
    document.getElementById('avatar-text').innerText = getInitials(state.loggedInUser.name);
    document.getElementById('username-display').innerText = state.loggedInUser.name;
    document.getElementById('user-role-display').innerText = state.loggedInUser.role;
    
    switchModule('dashboard');
  } else {
    loginScreen.classList.remove('hidden');
    appContainer.classList.add('hidden');
  }
}

// --- Navigation Engine ---
function switchModule(moduleName) {
  const sections = document.querySelectorAll('.module-section');
  sections.forEach(sec => sec.classList.add('hidden'));
  
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  
  const targetSection = document.getElementById(`${moduleName}-section`);
  if (targetSection) targetSection.classList.remove('hidden');
  
  const activeNav = document.querySelector(`.nav-item[data-module="${moduleName}"]`);
  if (activeNav) activeNav.classList.add('active');
  
  const displayTitles = {
    'dashboard': 'Executive Summary & Dashboard',
    'leads': 'Corporate Enquiries & Leads',
    'accounts': 'Registered Corporate Accounts',
    'contacts': 'Client Contacts Database',
    'deals': 'Consultancy Opportunities & Deals',
    'service-requirements': 'Statutory Operations Mapping',
    'tasks-activities': 'Tasks, Calendars & Follow-ups',
    'quotes': 'Commercial Proposals & Quotes',
    'invoices': 'Invoices Registry',
    'payments': 'Payments & Collections Ledger',
    'service-delivery': 'Consulting Deliveries Operations',
    'support': 'Support Tickets Resolution Desk',
    'reports': 'Management Analytics & Reporting',
    'admin': 'Portal Access Control (Staff Panel)'
  };
  document.getElementById('current-section-title').innerText = displayTitles[moduleName] || 'Finscript';

  // Toggle dynamic lists population
  if (moduleName === 'dashboard') refreshDashboard();
  else if (moduleName === 'leads') renderLeads();
  else if (moduleName === 'accounts') renderAccounts();
  else if (moduleName === 'contacts') renderContacts();
  else if (moduleName === 'deals') renderDeals();
  else if (moduleName === 'service-requirements') renderServiceRequirements();
  else if (moduleName === 'tasks-activities') renderTasksAndActivities();
  else if (moduleName === 'quotes') renderQuotes();
  else if (moduleName === 'invoices') renderInvoices();
  else if (moduleName === 'payments') renderPayments();
  else if (moduleName === 'service-delivery') renderServiceDelivery();
  else if (moduleName === 'support') renderSupport();
  else if (moduleName === 'reports') renderReports();
  else if (moduleName === 'admin') renderAdminPanel();
}

// --- Global Event Binding ---
function bindEvents() {
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  
  document.getElementById('toggle-password-btn').addEventListener('click', () => {
    const pwdInput = document.getElementById('login-password');
    const icon = document.getElementById('pwd-toggle-icon');
    if (pwdInput.type === 'password') {
      pwdInput.type = 'text';
      icon.className = 'fas fa-eye-slash';
    } else {
      pwdInput.type = 'password';
      icon.className = 'fas fa-eye';
    }
  });

  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mobile-open');
  });

  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.remove('mobile-open');
    }
  });

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const moduleName = item.getAttribute('data-module');
      if (moduleName) {
        switchModule(moduleName);
        document.getElementById('sidebar').classList.remove('mobile-open');
      }
    });
  });

  document.getElementById('logout-btn').addEventListener('click', () => {
    state.setLoggedInUser(null);
    showToast('Session ended successfully.', 'info');
    checkAuth();
  });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = !document.body.classList.contains('light-theme');
    if (isDark) {
      document.body.classList.add('light-theme');
      document.getElementById('theme-icon').className = 'fas fa-moon';
      state.setTheme('light');
      showToast('Light visual mode active.', 'success');
    } else {
      document.body.classList.remove('light-theme');
      document.getElementById('theme-icon').className = 'fas fa-sun';
      state.setTheme('dark');
      showToast('Dark visual mode active.', 'success');
    }
    if (state.loggedInUser) {
      if (document.getElementById('dashboard-section').classList.contains('hidden') === false) {
        renderDashboardCharts();
      } else if (document.getElementById('reports-section').classList.contains('hidden') === false) {
        renderReportsCharts();
      }
    }
  });

  // Forms Submissions Bindings
  document.getElementById('add-lead-form').addEventListener('submit', handleAddLead);
  document.getElementById('add-task-form').addEventListener('submit', handleAddTask);
  document.getElementById('log-activity-form').addEventListener('submit', handleLogActivity);
  document.getElementById('add-quote-form').addEventListener('submit', handleAddQuote);
  document.getElementById('convert-lead-form').addEventListener('submit', handleConvertLeadSubmit);
  document.getElementById('add-invoice-form').addEventListener('submit', handleAddInvoice);
  document.getElementById('add-payment-form').addEventListener('submit', handleAddPayment);
  document.getElementById('upload-deliverable-form').addEventListener('submit', handleUploadDeliverable);
  document.getElementById('add-support-form').addEventListener('submit', handleAddSupportTicket);
  document.getElementById('admin-add-user-form').addEventListener('submit', handleAddUser);

  // Real-time Search elements
  document.getElementById('leads-search').addEventListener('input', (e) => {
    leadsSearchQuery = e.target.value;
    renderLeads();
  });
  document.getElementById('accounts-search').addEventListener('input', (e) => {
    accountsSearchQuery = e.target.value;
    renderAccounts();
  });
  document.getElementById('contacts-search').addEventListener('input', (e) => {
    contactsSearchQuery = e.target.value;
    renderContacts();
  });
  document.getElementById('deals-search').addEventListener('input', (e) => {
    dealsSearchQuery = e.target.value;
    renderDeals();
  });
}

// --- Authentication Controller ---
function handleLogin(e) {
  e.preventDefault();
  const emailInput = document.getElementById('login-email').value.trim();
  const passwordInput = document.getElementById('login-password').value;
  const errorContainer = document.getElementById('login-error-container');
  
  errorContainer.classList.add('hidden');
  
  if (emailInput === 'executive@demo.com' && passwordInput === 'password123') {
    const user = { name: "Rahul Sharma", email: "executive@demo.com", role: "Managing Director" };
    state.setLoggedInUser(user);
    showToast('Access authorized. Welcome, Rahul.', 'success');
    checkAuth();
    return;
  }
  
  const staffMatched = state.staff.find(s => s.email.toLowerCase() === emailInput.toLowerCase() && s.status === 'active');
  if (staffMatched && passwordInput === 'password123') {
    const user = { name: staffMatched.name, email: staffMatched.email, role: staffMatched.role };
    state.setLoggedInUser(user);
    showToast(`Access authorized. Welcome, ${staffMatched.name}.`, 'success');
    checkAuth();
    return;
  }
  
  errorContainer.innerText = "Invalid credentials. Hint: use executive@demo.com / password123";
  errorContainer.classList.remove('hidden');
  showToast('Authentication failed.', 'error');
}

// --- Dashboard Module Controller ---
function refreshDashboard() {
  calculateDashboardMetrics();
  renderDashboardHotLeads();
  renderDashboardDeliveries();
  renderDashboardCharts();
}

function calculateDashboardMetrics() {
  const activeLeads = state.leads.filter(l => l.status !== 'Converted' && l.status !== 'Rejected').length;
  const openDeals = state.deals.filter(d => d.stage !== 'Won' && d.stage !== 'Lost').length;
  
  let collectedAmt = 0;
  state.payments.forEach(p => collectedAmt += parseFloat(p.amount));
  
  const openTickets = state.tickets.filter(t => t.status !== 'Closed').length;
  
  document.getElementById('metric-leads').innerText = activeLeads;
  document.getElementById('metric-deals').innerText = openDeals;
  document.getElementById('metric-revenue').innerText = `$${collectedAmt.toLocaleString()}`;
  document.getElementById('metric-tickets').innerText = openTickets;
}

function renderDashboardHotLeads() {
  const container = document.getElementById('dashboard-hot-leads');
  container.innerHTML = '';
  
  const hotList = state.leads.filter(l => l.hot && l.status !== 'Converted');
  if (hotList.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:12px;">No urgent leads pending review.</p>';
    return;
  }
  
  hotList.forEach(lead => {
    const div = document.createElement('div');
    div.className = 'hot-lead-card';
    div.innerHTML = `
      <div class="hot-lead-identity">
        <div class="avatar-initials">${getInitials(lead.name)}</div>
        <div class="hot-lead-meta">
          <h4>${lead.name}</h4>
          <p>${lead.company} | ${lead.location}</p>
        </div>
      </div>
      <button class="hot-lead-action-btn" title="Simulate Call" onclick="openDialerModal('${lead.id}')">
        <i class="fas fa-phone-alt"></i>
      </button>
    `;
    container.appendChild(div);
  });
}

function renderDashboardDeliveries() {
  const container = document.getElementById('dashboard-deliveries-list');
  container.innerHTML = '';
  
  if (state.deliveries.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:12px;">No active deliveries.</p>';
    return;
  }
  
  state.deliveries.slice(0, 3).forEach(del => {
    const div = document.createElement('div');
    div.style.background = 'var(--bg-tertiary)';
    div.style.border = '1px solid var(--glass-border)';
    div.style.padding = '12px';
    div.style.borderRadius = 'var(--border-radius-lg)';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'center';
    
    div.innerHTML = `
      <div>
        <h4 style="font-size:13px; font-weight:600;">${del.company}</h4>
        <p style="font-size:10px; color:var(--text-muted);">Lead Consultant: ${del.assigned}</p>
      </div>
      <span class="status-badge ${del.status.toLowerCase().replace(' ', '-')}">${del.status}</span>
    `;
    container.appendChild(div);
  });
}

function renderDashboardCharts() {
  const isLight = document.body.classList.contains('light-theme');
  const labelColor = isLight ? '#475569' : '#9ca3af';
  const gridColor = isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.05)';
  
  const perfCtx = document.getElementById('performanceChart').getContext('2d');
  if (dashboardChartInstance) dashboardChartInstance.destroy();
  
  // Calculate activity frequencies
  const acts = { Call: 0, Meeting: 0, Email: 0, WhatsApp: 0 };
  state.activities.forEach(a => {
    if (a.type.includes('Call')) acts.Call++;
    else if (a.type.includes('Meeting')) acts.Meeting++;
    else if (a.type.includes('Email')) acts.Email++;
    else acts.WhatsApp++;
  });

  dashboardChartInstance = new Chart(perfCtx, {
    type: 'bar',
    data: {
      labels: ['Calls Logs', 'Meetings', 'Email Proposals', 'WhatsApp Ping'],
      datasets: [{
        label: 'Consulting Activities Logged',
        data: [acts.Call + 4, acts.Meeting + 2, acts.Email + 5, acts.WhatsApp + 3],
        backgroundColor: '#3b82f6',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: labelColor } },
        y: { grid: { color: gridColor }, ticks: { color: labelColor, stepSize: 1 } }
      }
    }
  });

  const statusCtx = document.getElementById('statusChart').getContext('2d');
  if (statusChartInstance) statusChartInstance.destroy();
  
  const stages = { Qualification: 0, Proposal: 0, Negotiation: 0, Won: 0, Lost: 0 };
  state.deals.forEach(d => {
    if (stages[d.stage] !== undefined) stages[d.stage]++;
  });

  statusChartInstance = new Chart(statusCtx, {
    type: 'doughnut',
    data: {
      labels: ['Qualification', 'Proposal', 'Negotiation', 'Won Deals', 'Lost Deals'],
      datasets: [{
        data: [stages.Qualification + 1, stages.Proposal, stages.Negotiation, stages.Won, stages.Lost],
        backgroundColor: ['#06b6d4', '#f59e0b', '#a855f7', '#10b981', '#6b7280'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'right', labels: { color: labelColor } } },
      cutout: '75%'
    }
  });
}

// --- Leads Module (Step 1) ---
function renderLeads() {
  const container = document.getElementById('leads-grid');
  container.innerHTML = '';
  
  const list = state.leads.filter(l => {
    if (activeLeadFilter !== 'All') {
      if (activeLeadFilter === 'Converted' && l.status !== 'Converted') return false;
      if (activeLeadFilter !== 'Converted' && l.status !== activeLeadFilter) return false;
    }
    
    if (leadsSearchQuery) {
      const q = leadsSearchQuery.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.company.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q)
      );
    }
    return true;
  });

  if (list.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted); padding:30px; text-align:center; grid-column:span 4;">No leads match selected criteria.</div>';
    return;
  }

  list.forEach(lead => {
    const card = document.createElement('div');
    card.className = 'lead-card-item';
    card.innerHTML = `
      ${lead.hot ? `<div class="hot-lead-badge"><i class="fas fa-fire"></i> URGENT</div>` : ''}
      <div class="lead-card-header">
        <div class="lead-card-initials">${getInitials(lead.name)}</div>
        <div class="lead-card-identity">
          <div class="lead-card-name">${lead.name}</div>
          <span class="status-badge ${lead.status.toLowerCase().replace(' ', '-')}">${lead.status}</span>
        </div>
      </div>
      
      <div class="lead-card-details">
        <div class="lead-detail-row">
          <i class="fas fa-city"></i>
          <span>${lead.company}</span>
        </div>
        <div class="lead-detail-row">
          <i class="fas fa-map-marker-alt"></i>
          <span>${lead.location}</span>
        </div>
        <div class="lead-detail-row">
          <i class="fas fa-phone-alt"></i>
          <span>${lead.phone}</span>
        </div>
        <div class="lead-detail-row">
          <i class="fas fa-envelope"></i>
          <span>${lead.email}</span>
        </div>
      </div>

      <div class="lead-card-actions">
        <button class="lead-card-btn primary" onclick="openDetailsModal('${lead.id}')"><i class="fas fa-info-circle"></i> Details</button>
        <button class="lead-card-btn" onclick="openStatusModal('${lead.id}')"><i class="fas fa-edit"></i> Status</button>
        <div class="lead-contact-actions">
          <button class="lead-icon-btn" onclick="openDialerModal('${lead.id}')"><i class="fas fa-phone-alt"></i></button>
          ${lead.status !== 'Converted' ? `
            <button class="lead-icon-btn" style="background:var(--accent-blue-glow); color:var(--accent-blue); border-color:var(--accent-blue-glow);" title="Convert Lead (Step 2)" onclick="openConvertModal('${lead.id}')">
              <i class="fas fa-random"></i>
            </button>
          ` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function setLeadFilter(filter) {
  activeLeadFilter = filter;
  document.querySelectorAll('#leads-section .filter-pill').forEach(pill => {
    if (pill.innerText === filter) pill.classList.add('active');
    else pill.classList.remove('active');
  });
  renderLeads();
}

function toggleLeadForm() {
  const container = document.getElementById('add-lead-form-container');
  const btn = document.getElementById('btn-toggle-lead-text');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    btn.innerText = 'Close Form';
  } else {
    container.classList.add('hidden');
    btn.innerText = 'Add New Lead';
  }
}

function showLeadForm() {
  const container = document.getElementById('add-lead-form-container');
  const btn = document.getElementById('btn-toggle-lead-text');
  container.classList.remove('hidden');
  btn.innerText = 'Close Form';
}

function handleAddLead(e) {
  e.preventDefault();
  const name = document.getElementById('al-name').value.trim();
  const designation = document.getElementById('al-designation').value.trim();
  const company = document.getElementById('al-company').value.trim();
  const industry = document.getElementById('al-industry').value;
  const businessType = document.getElementById('al-business-type').value;
  const employees = document.getElementById('al-employees').value;
  const turnover = document.getElementById('al-turnover').value;
  const location = document.getElementById('al-location').value.trim();
  const website = document.getElementById('al-website').value.trim();
  const social = document.getElementById('al-social').value.trim();
  const phone = document.getElementById('al-phone').value.trim();
  const whatsapp = document.getElementById('al-whatsapp').value.trim() || phone;
  const email = document.getElementById('al-email').value.trim();
  const source = document.getElementById('al-source').value;
  const notes = document.getElementById('al-notes').value.trim();
  const hot = document.getElementById('al-hot').checked;

  const newLead = {
    id: "lead_" + Date.now(),
    name, designation, company, industry, businessType, employees, turnover,
    location, website, social, phone, whatsapp, email, source, notes, hot,
    status: "New",
    created: new Date().toISOString().split('T')[0]
  };

  state.updateLeads([...state.leads, newLead]);
  showToast(`Registered corporate lead for ${company}`, 'success');
  
  document.getElementById('add-lead-form').reset();
  toggleLeadForm();
  renderLeads();
}

// --- Step 2 Conversion Dialog Modal ---
function openConvertModal(leadId) {
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;

  document.getElementById('convert-lead-id').value = leadId;
  document.getElementById('cl-company').value = lead.company;
  document.getElementById('cl-structure').value = lead.businessType || 'Private Limited';
  document.getElementById('cl-gst').value = '';
  document.getElementById('cl-pancin').value = '';
  document.getElementById('cl-contact').value = lead.name;
  document.getElementById('cl-role').value = lead.designation || 'Director';
  document.getElementById('cl-dealname').value = `${lead.company} - Consultancy Package`;
  document.getElementById('cl-dealvalue').value = 8500;
  
  // Default expected close date is 30 days from now
  const closeDate = new Date();
  closeDate.setDate(closeDate.getDate() + 30);
  document.getElementById('cl-date').value = closeDate.toISOString().split('T')[0];

  // Populating owner dropdown with active staff
  const select = document.getElementById('cl-owner');
  select.innerHTML = '';
  state.staff.forEach(s => {
    if (s.status === 'active') {
      const opt = document.createElement('option');
      opt.value = s.name;
      opt.innerText = s.name;
      select.appendChild(opt);
    }
  });

  document.getElementById('convert-lead-modal').classList.add('active');
}

function closeConvertModal() {
  document.getElementById('convert-lead-modal').classList.remove('active');
}

function handleConvertLeadSubmit(e) {
  e.preventDefault();
  const leadId = document.getElementById('convert-lead-id').value;
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;

  const clCompany = document.getElementById('cl-company').value.trim();
  const clStructure = document.getElementById('cl-structure').value.trim();
  const clGst = document.getElementById('cl-gst').value.trim();
  const clPancin = document.getElementById('cl-pancin').value.trim();
  const clContact = document.getElementById('cl-contact').value.trim();
  const clRole = document.getElementById('cl-role').value.trim();
  const clDealname = document.getElementById('cl-dealname').value.trim();
  const clDealvalue = parseFloat(document.getElementById('cl-dealvalue').value);
  const clDate = document.getElementById('cl-date').value;
  const clOwner = document.getElementById('cl-owner').value;

  // 1. Create Company Account
  const newAccount = {
    id: "account_" + Date.now(),
    company: clCompany,
    structure: clStructure,
    gst: clGst,
    pancin: clPancin,
    location: lead.location,
    website: lead.website || "n/a",
    created: new Date().toISOString().split('T')[0]
  };
  state.updateAccounts([...state.accounts, newAccount]);

  // 2. Create Primary Contact Person
  const newContact = {
    id: "contact_" + Date.now(),
    accountId: newAccount.id,
    company: clCompany,
    name: clContact,
    role: clRole,
    phone: lead.phone,
    whatsapp: lead.whatsapp,
    email: lead.email
  };
  state.updateContacts([...state.contacts, newContact]);

  // 3. Initialize active Deal
  const newDeal = {
    id: "deal_" + Date.now(),
    accountId: newAccount.id,
    company: clCompany,
    name: clDealname,
    value: clDealvalue,
    closeDate: clDate,
    owner: clOwner,
    stage: "Qualification",
    probability: 10,
    created: new Date().toISOString().split('T')[0]
  };
  state.updateDeals([...state.deals, newDeal]);

  // 4. Initialize blank Service Requirements
  const newReq = {
    accountId: newAccount.id,
    company: clCompany,
    registration: { companyReg: false, trademarkReg: false, gstReg: false, otherReg: false },
    compliance: { accounting: false, incomeTax: false, gstFiling: false, rocFiling: false, otherComp: false },
    marketing: { digitalMkt: false, seo: false, webDev: false, socialMkt: false, otherSvc: false }
  };
  state.updateRequirements([...state.requirements, newReq]);

  // 5. Update Lead status
  const updatedLeads = state.leads.map(l => {
    if (l.id === leadId) return { ...l, status: "Converted" };
    return l;
  });
  state.updateLeads(updatedLeads);

  // 6. Log call/conversion activity
  const newAct = {
    id: "act_" + Date.now(),
    dealId: newDeal.id,
    company: clCompany,
    type: "Follow-up",
    title: `Conversions: ${clCompany}`,
    time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: "Completed",
    notes: `Lead converted to active Deal. Pipeline: $${clDealvalue}. Account GST: ${clGst}.`
  };
  state.updateActivities([newAct, ...state.activities]);

  closeConvertModal();
  showToast(`Successfully converted lead for ${clCompany}`, 'success');
  switchModule('deals');
}

// --- Accounts (Step 3) ---
function renderAccounts() {
  const tbody = document.getElementById('accounts-tbody');
  tbody.innerHTML = '';
  
  const list = state.accounts.filter(a => {
    if (accountsSearchQuery) {
      return a.company.toLowerCase().includes(accountsSearchQuery.toLowerCase());
    }
    return true;
  });

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No corporate accounts found.</td></tr>';
    return;
  }

  list.forEach(acc => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div style="font-weight:700; color:white; font-size:14px;">${acc.company}</div>
        <div style="font-size:11px; color:var(--text-muted);">Registered on ${acc.created}</div>
      </td>
      <td>
        <strong style="color:var(--text-muted); font-size:12px;">${acc.structure}</strong>
      </td>
      <td>
        <div style="font-size:12px;"><span style="color:var(--text-muted);">GST:</span> ${acc.gst}</div>
        <div style="font-size:12px;"><span style="color:var(--text-muted);">PAN/CIN:</span> ${acc.pancin}</div>
      </td>
      <td>
        <div style="font-size:12px; color:var(--text-muted);"><i class="fas fa-map-marker-alt" style="color:var(--accent-purple); margin-right:4px;"></i> ${acc.location}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;"><i class="fas fa-globe" style="color:var(--accent-blue); margin-right:4px;"></i> <a href="${acc.website}" target="_blank" style="color:var(--text-muted);">${acc.website}</a></div>
      </td>
      <td>
        <button class="lead-icon-btn" title="View details" onclick="openAccountDetails('${acc.id}')"><i class="fas fa-info-circle"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openAccountDetails(accId) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc) return;
  
  const overlay = document.getElementById('details-modal');
  const list = document.getElementById('details-modal-list');
  document.getElementById('details-lead-name').innerText = acc.company;
  
  // Find associated contact person
  const contact = state.contacts.find(c => c.accountId === acc.id) || { name: 'n/a', role: 'n/a', phone: 'n/a', email: 'n/a' };

  list.innerHTML = `
    <div class="details-row">
      <div class="details-label">Business Structure</div>
      <div class="details-value">${acc.structure}</div>
    </div>
    <div class="details-row">
      <div class="details-label">GSTIN / Tax ID</div>
      <div class="details-value">${acc.gst}</div>
    </div>
    <div class="details-row">
      <div class="details-label">CIN / PAN Code</div>
      <div class="details-value">${acc.pancin}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Primary Contact</div>
      <div class="details-value">${contact.name} (${contact.role})</div>
    </div>
    <div class="details-row">
      <div class="details-label">Contact Email</div>
      <div class="details-value">${contact.email}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Contact Phone</div>
      <div class="details-value">${contact.phone}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Company Website</div>
      <div class="details-value"><a href="${acc.website}" target="_blank" style="color:var(--accent-blue);">${acc.website}</a></div>
    </div>
    <div class="details-row">
      <div class="details-label">HQ Location</div>
      <div class="details-value">${acc.location}</div>
    </div>
  `;
  overlay.classList.add('active');
}

// --- Contacts (Step 4) ---
function renderContacts() {
  const tbody = document.getElementById('contacts-tbody');
  tbody.innerHTML = '';
  
  const list = state.contacts.filter(c => {
    if (contactsSearchQuery) {
      const q = contactsSearchQuery.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q)
      );
    }
    return true;
  });

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No contacts found.</td></tr>';
    return;
  }

  list.forEach(con => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div style="font-weight:700; color:white; font-size:14px;">${con.name}</div>
        <div style="font-size:11px; color:var(--text-muted);">${con.email}</div>
      </td>
      <td>
        <strong style="color:var(--text-main); font-size:13px;">${con.company}</strong>
      </td>
      <td>
        <span style="font-size:12px; color:var(--text-muted);">${con.role}</span>
      </td>
      <td>
        <div style="font-size:12px; display:flex; align-items:center; gap:8px;">
          <span><i class="fas fa-phone" style="color:var(--status-converted); margin-right:4px;"></i> ${con.phone}</span>
          <span><i class="fab fa-whatsapp" style="color:#10b981; margin-right:4px;"></i> ${con.whatsapp}</span>
        </div>
      </td>
      <td>
        <button class="lead-icon-btn" title="Call Contact" onclick="openDialerModalFromPhone('${con.name}', '${con.phone}')"><i class="fas fa-phone-alt"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openDialerModalFromPhone(name, phone) {
  const overlay = document.getElementById('dialer-modal');
  document.getElementById('dialer-lead-name').innerText = name;
  document.getElementById('dialer-phone-number').innerText = phone;
  document.getElementById('dialer-outcome').value = '';
  
  overlay.classList.add('active');
  
  const saveBtn = document.getElementById('dialer-save-btn');
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.replaceWith(newSaveBtn);
  
  newSaveBtn.addEventListener('click', () => {
    const outcome = document.getElementById('dialer-outcome').value.trim() || 'Log Call completed.';
    const newAct = {
      id: "act_" + Date.now(),
      company: "Client Direct",
      type: "Call",
      title: `Outgoing Call: ${name}`,
      time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "Completed",
      notes: outcome
    };
    state.updateActivities([newAct, ...state.activities]);
    overlay.classList.remove('active');
    showToast(`Call logged for ${name}`, 'success');
  });
}

// --- Deals (Step 5) ---
function renderDeals() {
  const tbody = document.getElementById('deals-tbody');
  tbody.innerHTML = '';
  
  const list = state.deals.filter(d => {
    if (dealsSearchQuery) {
      return (
        d.name.toLowerCase().includes(dealsSearchQuery.toLowerCase()) ||
        d.company.toLowerCase().includes(dealsSearchQuery.toLowerCase())
      );
    }
    return true;
  });

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No consultancy deals found.</td></tr>';
    return;
  }

  list.forEach(deal => {
    let stageColor = '#6b7280';
    if (deal.stage === 'Qualification') stageColor = '#06b6d4';
    else if (deal.stage === 'Proposal') stageColor = '#f59e0b';
    else if (deal.stage === 'Negotiation') stageColor = '#a855f7';
    else if (deal.stage === 'Won') stageColor = '#10b981';
    else if (deal.stage === 'Lost') stageColor = '#ef4444';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div style="font-weight:700; color:white; font-size:14px;">${deal.name}</div>
        <div style="font-size:11px; color:var(--text-muted);">Representative: <strong>${deal.owner}</strong></div>
      </td>
      <td>
        <div style="font-size:13px; color:var(--text-main);">${deal.company}</div>
      </td>
      <td>
        <div style="font-size:12px; color:var(--text-muted);"><i class="fas fa-calendar"></i> ${deal.closeDate}</div>
      </td>
      <td>
        <strong style="color:white; font-size:14px;">$${deal.value.toLocaleString()}</strong>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:4px;">
          <span class="status-badge" style="background:rgba(255,255,255,0.05); color:${stageColor}; border:1px solid ${stageColor}; width:fit-content;">${deal.stage}</span>
          <span style="font-size:10px; color:var(--text-muted);">Probability: ${deal.probability}%</span>
        </div>
      </td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="lead-icon-btn" title="Progress Stage" onclick="openDealStageEditor('${deal.id}')" style="background:var(--accent-purple-glow); border-color:var(--accent-purple-glow); color:var(--accent-purple);"><i class="fas fa-tasks"></i></button>
          <button class="lead-icon-btn" title="Create Quote (Step 8)" onclick="switchModule('quotes'); selectDealForQuote('${deal.id}')"><i class="fas fa-calculator"></i></button>
          <button class="lead-icon-btn" title="Issue Billing Invoice (Step 10)" onclick="switchModule('invoices'); selectDealForInvoice('${deal.id}')"><i class="fas fa-file-invoice"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openDealStageEditor(dealId) {
  const deal = state.deals.find(d => d.id === dealId);
  if (!deal) return;

  const selectVal = prompt(`Update deal stage for "${deal.name}":\nSelect from: Qualification, Proposal, Negotiation, Won, Lost`, deal.stage);
  if (selectVal) {
    const valid = ['Qualification', 'Proposal', 'Negotiation', 'Won', 'Lost'];
    if (!valid.includes(selectVal)) {
      showToast('Invalid stage name entered.', 'error');
      return;
    }
    
    let prob = 10;
    if (selectVal === 'Proposal') prob = 50;
    else if (selectVal === 'Negotiation') prob = 75;
    else if (selectVal === 'Won') prob = 100;
    else if (selectVal === 'Lost') prob = 0;

    const updated = state.deals.map(d => {
      if (d.id === dealId) {
        return { ...d, stage: selectVal, probability: prob };
      }
      return d;
    });
    state.updateDeals(updated);
    showToast(`Updated deal stage to ${selectVal}`, 'success');

    // If deal is won, automatically trigger service delivery initialization if not present
    if (selectVal === 'Won') {
      const existingDel = state.deliveries.find(dl => dl.dealId === dealId);
      if (!existingDel) {
        const newDel = {
          id: "del_" + Date.now(),
          dealId: deal.id,
          company: deal.company,
          status: "Not Started",
          assigned: deal.owner,
          files: []
        };
        state.updateDeliveries([...state.deliveries, newDel]);
        showToast(`Service Delivery initialized for ${deal.company}`, 'success');
      }
    }

    renderDeals();
  }
}

// --- Service Requirements (Step 6) ---
function renderServiceRequirements() {
  const container = document.getElementById('service-requirements-list');
  container.innerHTML = '';
  
  if (state.requirements.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted); font-size:13px; grid-column: span 2;">No service requirements mapped yet. Please convert leads to create accounts.</div>';
    return;
  }

  state.requirements.forEach(req => {
    const card = document.createElement('div');
    card.className = 'service-req-card';
    card.innerHTML = `
      <div class="service-req-header">
        <h4 class="service-req-company"><i class="fas fa-city" style="color:var(--accent-purple); margin-right:8px;"></i> ${req.company}</h4>
      </div>

      <div class="service-req-category">
        <h5 class="service-req-category-title">Statutory Registrations</h5>
        <div class="service-req-list">
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="registration" data-field="companyReg" ${req.registration.companyReg ? 'checked' : ''}>
            <span>Company Registration</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="registration" data-field="trademarkReg" ${req.registration.trademarkReg ? 'checked' : ''}>
            <span>Trademark Registration</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="registration" data-field="gstReg" ${req.registration.gstReg ? 'checked' : ''}>
            <span>GST Register Registration</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="registration" data-field="otherReg" ${req.registration.otherReg ? 'checked' : ''}>
            <span>Other Registrations</span>
          </label>
        </div>
      </div>

      <div class="service-req-category">
        <h5 class="service-req-category-title">Annual compliance Services</h5>
        <div class="service-req-list">
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="compliance" data-field="accounting" ${req.compliance.accounting ? 'checked' : ''}>
            <span>Accounting / Bookkeeping</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="compliance" data-field="incomeTax" ${req.compliance.incomeTax ? 'checked' : ''}>
            <span>Income Tax Filings</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="compliance" data-field="gstFiling" ${req.compliance.gstFiling ? 'checked' : ''}>
            <span>GST Quarterly Filing</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="compliance" data-field="rocFiling" ${req.compliance.rocFiling ? 'checked' : ''}>
            <span>ROC Annual Filing</span>
          </label>
        </div>
      </div>

      <div class="service-req-category">
        <h5 class="service-req-category-title">Consulting Marketing Services</h5>
        <div class="service-req-list">
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="marketing" data-field="digitalMkt" ${req.marketing.digitalMkt ? 'checked' : ''}>
            <span>Digital Marketing Campaigns</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="marketing" data-field="seo" ${req.marketing.seo ? 'checked' : ''}>
            <span>Search Engine Optimization (SEO)</span>
          </label>
          <label class="service-req-item">
            <input type="checkbox" data-account="${req.accountId}" data-cat="marketing" data-field="webDev" ${req.marketing.webDev ? 'checked' : ''}>
            <span>Corporate Website Development</span>
          </label>
        </div>
      </div>
    `;

    // Click triggers checklist state persistence
    card.querySelectorAll('input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const accId = chk.getAttribute('data-account');
        const category = chk.getAttribute('data-cat');
        const field = chk.getAttribute('data-field');
        const isChecked = e.target.checked;

        const updated = state.requirements.map(rq => {
          if (rq.accountId === accId) {
            rq[category][field] = isChecked;
          }
          return rq;
        });
        state.updateRequirements(updated);
        showToast('Service operational requirements updated', 'success');
      });
    });

    container.appendChild(card);
  });
}

// --- Tasks & Activities (Step 7) ---
function renderTasksAndActivities() {
  renderTasksList();
  renderActivitiesFeed();
  
  // Fill activity deal selection options dropdown
  const select = document.getElementById('la-deal');
  select.innerHTML = '<option value="" disabled selected>Select Target Company...</option>';
  state.accounts.forEach(acc => {
    const opt = document.createElement('option');
    opt.value = acc.company;
    opt.innerText = acc.company;
    select.appendChild(opt);
  });
}

function renderTasksList() {
  const container = document.getElementById('tasks-board-list');
  container.innerHTML = '';
  
  if (state.tasks.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:12px;">No to-do tasks logged.</p>';
    return;
  }

  state.tasks.forEach(task => {
    const item = document.createElement('div');
    item.style.background = 'var(--glass-bg)';
    item.style.border = '1px solid var(--glass-border)';
    item.style.padding = '12px 16px';
    item.style.borderRadius = 'var(--border-radius-lg)';
    item.style.marginBottom = '10px';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'center';
    
    let priColor = '#6b7280';
    if (task.priority === 'HIGH') priColor = '#ef4444';
    else if (task.priority === 'MEDIUM') priColor = '#f59e0b';
    else if (task.priority === 'LOW') priColor = '#3b82f6';

    item.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px;">
        <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''} style="width:18px; height:18px; cursor:pointer;">
        <div>
          <span style="font-size:13px; font-weight:600; text-decoration: ${task.completed ? 'line-through' : 'none'}; color: ${task.completed ? 'var(--text-muted)' : 'var(--text-main)'};">
            ${task.title}
          </span>
          <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">
            Due: ${task.due} | <span style="color:${priColor}; font-weight:700;">${task.priority}</span>
          </div>
        </div>
      </div>
      <button onclick="deleteTask('${task.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; padding:4px;"><i class="fas fa-trash-alt"></i></button>
    `;

    // Completed state toggle
    item.querySelector('.task-checkbox').addEventListener('change', (e) => {
      const updated = state.tasks.map(t => {
        if (t.id === task.id) return { ...t, completed: e.target.checked };
        return t;
      });
      state.updateTasks(updated);
      showToast(e.target.checked ? 'Task marked completed' : 'Task reopened', 'success');
      renderTasksList();
    });

    container.appendChild(item);
  });
}

function handleAddTask(e) {
  e.preventDefault();
  const title = document.getElementById('task-title-input').value.trim();
  const due = document.getElementById('task-due-input').value;
  const priority = document.querySelector('input[name="task-priority"]:checked').value;

  const newTask = {
    id: "task_" + Date.now(),
    title, due, priority,
    completed: false
  };

  state.updateTasks([...state.tasks, newTask]);
  showToast(`Task reminder logged.`, 'success');
  document.getElementById('add-task-form').reset();
  renderTasksList();
}

function deleteTask(taskId) {
  const filtered = state.tasks.filter(t => t.id !== taskId);
  state.updateTasks(filtered);
  showToast('Task removed.', 'info');
  renderTasksList();
}

function renderActivitiesFeed() {
  const container = document.getElementById('activities-feed-list');
  container.innerHTML = '';
  
  if (state.activities.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:12px;">No activities recorded.</p>';
    return;
  }

  state.activities.forEach(act => {
    let iconClass = 'phone-alt';
    if (act.type.includes('Meeting')) iconClass = 'users';
    else if (act.type.includes('Email')) iconClass = 'envelope';
    else if (act.type.includes('WhatsApp')) iconClass = 'whatsapp';

    const div = document.createElement('div');
    div.style.background = 'var(--bg-tertiary)';
    div.style.border = '1px solid var(--glass-border)';
    div.style.padding = '12px 16px';
    div.style.borderRadius = 'var(--border-radius-lg)';
    div.style.display = 'flex';
    div.style.gap = '12px';

    div.innerHTML = `
      <div class="activity-icon-wrap completed" style="width:32px; height:32px;">
        <i class="fas fa-${iconClass}"></i>
      </div>
      <div>
        <h4 style="font-size:13px; font-weight:700; color:white;">${act.title}</h4>
        <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">Company: ${act.company} | ${act.time}</div>
        <p style="font-size:12px; color:var(--text-main); margin-top:6px; font-style:italic;">"${act.notes}"</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function handleLogActivity(e) {
  e.preventDefault();
  const company = document.getElementById('la-deal').value;
  const type = document.getElementById('la-type').value;
  const subject = document.getElementById('la-subject').value.trim();
  const notes = document.getElementById('la-notes').value.trim();

  const newAct = {
    id: "act_" + Date.now(),
    company, type,
    title: `${type}: ${subject}`,
    time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: "Completed",
    notes
  };

  state.updateActivities([newAct, ...state.activities]);
  showToast('Activity logged successfully.', 'success');
  document.getElementById('log-activity-form').reset();
  renderActivitiesFeed();
}

// --- Quotes Module (Step 8) ---
function renderQuotes() {
  const tbody = document.getElementById('quotes-tbody');
  tbody.innerHTML = '';
  
  // Fill quote deal options dropdown
  const select = document.getElementById('aq-deal');
  select.innerHTML = '<option value="" disabled selected>Choose active deal opportunity...</option>';
  state.deals.forEach(deal => {
    const opt = document.createElement('option');
    opt.value = deal.id;
    opt.innerText = `${deal.company} - ${deal.name} ($${deal.value})`;
    select.appendChild(opt);
  });

  if (state.quotes.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">No estimation quotes prepared.</td></tr>';
    return;
  }

  state.quotes.forEach(quote => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:var(--accent-purple); font-size:13px;">${quote.id.toUpperCase()}</strong></td>
      <td>
        <div style="font-weight:700; color:white; font-size:13px;">${quote.company}</div>
        <div style="font-size:10px; color:var(--text-muted);">Proposal created on ${quote.created}</div>
      </td>
      <td><span style="font-size:12px;">${quote.product}</span></td>
      <td><strong style="font-size:13px;">$${quote.price.toLocaleString()}</strong></td>
      <td>
        <div style="font-size:11px; color:var(--text-muted);">Tax: ${quote.tax}%</div>
        <div style="font-size:11px; color:#f87171;">Discount: -$${quote.discount}</div>
      </td>
      <td><strong style="color:white; font-size:14px;">$${quote.total.toLocaleString()}</strong></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="lead-icon-btn" title="Proposal Preview Receipt" onclick="openQuotePreview('${quote.id}')"><i class="fas fa-file-invoice"></i></button>
          <button class="lead-icon-btn" title="Trigger mock Email Pitch" onclick="showToast('Quote proposal dispatched to client corporate inbox.', 'success')"><i class="fas fa-envelope"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleQuoteForm() {
  const container = document.getElementById('add-quote-form-container');
  const btn = document.getElementById('btn-toggle-quote-text');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    btn.innerText = 'Close Form';
  } else {
    container.classList.add('hidden');
    btn.innerText = 'Create Quote';
  }
}

function showQuoteForm() {
  const container = document.getElementById('add-quote-form-container');
  const btn = document.getElementById('btn-toggle-quote-text');
  container.classList.remove('hidden');
  btn.innerText = 'Close Form';
}

function selectDealForQuote(dealId) {
  showQuoteForm();
  document.getElementById('aq-deal').value = dealId;
  const deal = state.deals.find(d => d.id === dealId);
  if (deal) {
    document.getElementById('aq-price').value = deal.value;
  }
}

function handleAddQuote(e) {
  e.preventDefault();
  const dealId = document.getElementById('aq-deal').value;
  const deal = state.deals.find(d => d.id === dealId);
  if (!deal) return;

  const product = document.getElementById('aq-product').value.trim();
  const price = parseFloat(document.getElementById('aq-price').value);
  const tax = parseFloat(document.getElementById('aq-tax').value || 18);
  const discount = parseFloat(document.getElementById('aq-discount').value || 0);

  const subTotal = price - discount;
  const taxAmt = subTotal * (tax / 100);
  const grandTotal = Math.round(subTotal + taxAmt);

  const newQuote = {
    id: "q_" + Date.now().toString().slice(-6),
    dealId,
    company: deal.company,
    product, price, tax, discount,
    total: grandTotal,
    created: new Date().toISOString().split('T')[0]
  };

  state.updateQuotes([...state.quotes, newQuote]);
  showToast(`Quote prepared for ${deal.company}. Total: $${grandTotal}`, 'success');
  document.getElementById('add-quote-form').reset();
  toggleQuoteForm();
  renderQuotes();
}

function openQuotePreview(quoteId) {
  const quote = state.quotes.find(q => q.id === quoteId);
  if (!quote) return;

  const overlay = document.getElementById('quote-preview-modal');
  const receipt = document.getElementById('quote-receipt-area');
  
  const acc = state.accounts.find(a => a.company === quote.company) || { gst: 'N/A', pancin: 'N/A', location: 'N/A' };
  
  receipt.innerHTML = `
    <div class="receipt-header">
      <div>
        <div class="receipt-title">Estimation proposal</div>
        <div style="font-size:11px; color:#64748b; margin-top:4px;">PROPOSAL ID: ${quote.id.toUpperCase()}</div>
      </div>
      <div class="receipt-meta">
        <strong>Finscript Business Consultants Private Limited</strong><br>
        14, MG Road, Bangalore, India<br>
        GSTIN: 29FINSC1234A1Z0<br>
        Date: ${quote.created}
      </div>
    </div>

    <div class="receipt-parties">
      <div class="receipt-party">
        <h5>Client Account:</h5>
        <strong>${quote.company}</strong><br>
        Location: ${acc.location}<br>
        GSTIN: ${acc.gst}
      </div>
      <div class="receipt-party" style="text-align:right;">
        <h5>Proposal Owner:</h5>
        <strong>Finscript Administrator</strong><br>
        Designation: Managing Director<br>
        Email: billing@finscript.com
      </div>
    </div>

    <table class="receipt-table">
      <thead>
        <tr>
          <th>Service Package Details</th>
          <th style="text-align:right;">Professional Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>${quote.product}</strong><br>
            <span style="font-size:11px; color:#64748b;">Mapping registrations, drafting corporate structures & bookkeeping setup.</span>
          </td>
          <td style="text-align:right; font-weight:700;">$${quote.price.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>

    <div class="receipt-totals">
      <div class="receipt-total-row">
        <span>Fee Subtotal:</span>
        <span>$${quote.price.toLocaleString()}</span>
      </div>
      <div class="receipt-total-row" style="color:#ef4444;">
        <span>Discounts:</span>
        <span>-$${quote.discount.toLocaleString()}</span>
      </div>
      <div class="receipt-total-row">
        <span>Service Tax (${quote.tax}%):</span>
        <span>+$${Math.round((quote.price - quote.discount) * (quote.tax / 100)).toLocaleString()}</span>
      </div>
      <div class="receipt-total-row grand">
        <span>Total Quotation:</span>
        <span>$${quote.total.toLocaleString()}</span>
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

function closeQuotePreviewModal() {
  document.getElementById('quote-preview-modal').classList.remove('active');
}

function simulateWhatsAppShare() {
  showToast('WhatsApp sharing link triggered.', 'success');
  closeQuotePreviewModal();
}

// --- Invoices Module (Step 10) ---
function renderInvoices() {
  const tbody = document.getElementById('invoices-tbody');
  tbody.innerHTML = '';
  
  // Populate Invoice Deal dropdown
  const select = document.getElementById('ai-deal');
  select.innerHTML = '<option value="" disabled selected>Choose active deal / account...</option>';
  state.deals.forEach(deal => {
    const opt = document.createElement('option');
    opt.value = deal.id;
    opt.innerText = `${deal.company} - ${deal.name}`;
    select.appendChild(opt);
  });

  if (state.invoices.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">No corporate invoices issued.</td></tr>';
    return;
  }

  state.invoices.forEach(inv => {
    let statColor = '#ef4444';
    if (inv.status === 'Paid') statColor = '#10b981';
    else if (inv.status === 'Partially Paid') statColor = '#f59e0b';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:var(--text-main); font-size:13px;">${inv.id.toUpperCase()}</strong></td>
      <td>
        <div style="font-weight:700; color:white; font-size:13px;">${inv.company}</div>
        <div style="font-size:10px; color:var(--text-muted);">Project Billing</div>
      </td>
      <td><span style="font-size:12px;">${inv.date}</span></td>
      <td><span style="font-size:12px; color:var(--text-muted);">${inv.due}</span></td>
      <td>
        <div style="font-size:13px; font-weight:700; color:white;">$${inv.outstanding.toLocaleString()}</div>
        <div style="font-size:10px; color:var(--text-muted);">Total Invoice: $${inv.amount.toLocaleString()}</div>
      </td>
      <td><span class="status-badge" style="background:rgba(255,255,255,0.05); color:${statColor}; border:1px solid ${statColor}; width:fit-content;">${inv.status}</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="lead-icon-btn" title="Simulate Email Invoice" onclick="showToast('Invoice mail receipt sent to client corporate registry.', 'success')"><i class="fas fa-envelope"></i></button>
          ${inv.outstanding > 0 ? `<button class="lead-icon-btn" title="Log Payment Deposit" onclick="switchModule('payments'); selectInvoiceForPayment('${inv.id}')" style="background:var(--status-converted-bg); border-color:var(--status-converted-bg); color:var(--status-converted);"><i class="fas fa-receipt"></i></button>` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleInvoiceForm() {
  const container = document.getElementById('add-invoice-form-container');
  const btn = document.getElementById('btn-toggle-invoice-text');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    btn.innerText = 'Close Form';
  } else {
    container.classList.add('hidden');
    btn.innerText = 'Create Invoice';
  }
}

function showInvoiceForm() {
  const container = document.getElementById('add-invoice-form-container');
  const btn = document.getElementById('btn-toggle-invoice-text');
  container.classList.remove('hidden');
  btn.innerText = 'Close Form';
}

function selectDealForInvoice(dealId) {
  showInvoiceForm();
  document.getElementById('ai-deal').value = dealId;
  const quote = state.quotes.find(q => q.dealId === dealId);
  if (quote) {
    document.getElementById('ai-amount').value = quote.total;
  }
}

function handleAddInvoice(e) {
  e.preventDefault();
  const dealId = document.getElementById('ai-deal').value;
  const deal = state.deals.find(d => d.id === dealId);
  if (!deal) return;

  const amount = parseFloat(document.getElementById('ai-amount').value);
  const date = document.getElementById('ai-date').value;
  const due = document.getElementById('ai-due').value;

  const newInv = {
    id: "inv_" + Date.now().toString().slice(-6),
    dealId,
    company: deal.company,
    amount,
    outstanding: amount,
    date, due,
    status: "Pending"
  };

  state.updateInvoices([...state.invoices, newInv]);
  showToast(`Invoice generated for ${deal.company}. Amount: $${amount}`, 'success');
  document.getElementById('add-invoice-form').reset();
  toggleInvoiceForm();
  renderInvoices();
}

// --- Payments Module (Step 11) ---
function renderPayments() {
  const tbody = document.getElementById('payments-tbody');
  tbody.innerHTML = '';
  
  // Fill payment invoice list dropdown
  const select = document.getElementById('ap-invoice');
  select.innerHTML = '<option value="" disabled selected>Select issued corporate invoice...</option>';
  state.invoices.forEach(inv => {
    if (inv.outstanding > 0) {
      const opt = document.createElement('option');
      opt.value = inv.id;
      opt.innerText = `${inv.company} - Invoice #${inv.id.toUpperCase()} (Outstanding: $${inv.outstanding})`;
      select.appendChild(opt);
    }
  });

  if (state.payments.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">No payment logs recorded.</td></tr>';
    return;
  }

  state.payments.forEach(pay => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:var(--accent-purple); font-size:13px;">${pay.id.toUpperCase()}</strong></td>
      <td><span style="font-size:12px;">Invoice #${pay.invoiceId.toUpperCase()}</span></td>
      <td><strong style="color:white; font-size:13px;">${pay.company}</strong></td>
      <td><span style="font-size:12px;">${pay.date}</span></td>
      <td>
        <div style="font-size:12px; font-weight:700;">${pay.mode}</div>
        <div style="font-size:10px; color:var(--text-muted); font-family:monospace;">UTR: ${pay.utr}</div>
      </td>
      <td><strong style="color:var(--status-converted); font-size:14px;">$${pay.amount.toLocaleString()}</strong></td>
      <td><span style="font-size:12px; color:var(--text-muted); font-style:italic;">"${pay.remarks}"</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function togglePaymentForm() {
  const container = document.getElementById('add-payment-form-container');
  const btn = document.getElementById('btn-toggle-payment-text');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    btn.innerText = 'Close Form';
  } else {
    container.classList.add('hidden');
    btn.innerText = 'Log Payment Received';
  }
}

function showPaymentForm() {
  const container = document.getElementById('add-payment-form-container');
  const btn = document.getElementById('btn-toggle-payment-text');
  container.classList.remove('hidden');
  btn.innerText = 'Close Form';
}

function selectInvoiceForPayment(invId) {
  showPaymentForm();
  document.getElementById('ap-invoice').value = invId;
  const inv = state.invoices.find(i => i.id === invId);
  if (inv) {
    document.getElementById('ap-amount').value = inv.outstanding;
  }
}

function handleAddPayment(e) {
  e.preventDefault();
  const invoiceId = document.getElementById('ap-invoice').value;
  const invoice = state.invoices.find(i => i.id === invoiceId);
  if (!invoice) return;

  const amount = parseFloat(document.getElementById('ap-amount').value);
  const mode = document.getElementById('ap-mode').value;
  const utr = document.getElementById('ap-utr').value.trim();
  const remarks = document.getElementById('ap-remarks').value.trim();

  if (amount > invoice.outstanding) {
    showToast('Payment amount exceeds outstanding billing value.', 'error');
    return;
  }

  const newPay = {
    id: "rec_" + Date.now().toString().slice(-6),
    invoiceId,
    company: invoice.company,
    amount,
    date: new Date().toISOString().split('T')[0],
    mode, utr, remarks
  };

  // Update Outstanding billing amounts on Invoice
  const newOutstanding = invoice.outstanding - amount;
  let status = "Partially Paid";
  if (newOutstanding === 0) status = "Paid";

  const updatedInvs = state.invoices.map(inv => {
    if (inv.id === invoiceId) {
      return { ...inv, outstanding: newOutstanding, status: status };
    }
    return inv;
  });

  state.updateInvoices(updatedInvs);
  state.updatePayments([...state.payments, newPay]);

  // Log activity
  const newAct = {
    id: "act_" + Date.now(),
    company: invoice.company,
    type: "Follow-up",
    title: `Payment Received: ${invoice.company}`,
    time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: "Completed",
    notes: `Deposit of $${amount} recorded. Mode: ${mode}. Ref UTR: ${utr}.`
  };
  state.updateActivities([newAct, ...state.activities]);

  showToast(`Logged billing payment of $${amount} for ${invoice.company}`, 'success');
  document.getElementById('add-payment-form').reset();
  togglePaymentForm();
  renderPayments();
}

// --- Service Delivery (Step 12) ---
function renderServiceDelivery() {
  const container = document.getElementById('deliveries-management-list');
  container.innerHTML = '';
  
  // Fill upload target selections
  const select = document.getElementById('ud-deal');
  select.innerHTML = '<option value="" disabled selected>Select Client Account / Deal...</option>';
  state.deliveries.forEach(del => {
    const opt = document.createElement('option');
    opt.value = del.dealId;
    opt.innerText = del.company;
    select.appendChild(opt);
  });

  if (state.deliveries.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:12px;">No active service deliveries mapped. Please win a deal to trigger delivery operations.</p>';
    return;
  }

  state.deliveries.forEach(del => {
    const div = document.createElement('div');
    div.style.background = 'var(--glass-bg)';
    div.style.border = '1px solid var(--glass-border)';
    div.style.padding = '20px';
    div.style.borderRadius = 'var(--border-radius-xl)';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '12px';

    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h4 style="font-size:15px; font-weight:700; color:white;">${del.company}</h4>
          <span style="font-size:11px; color:var(--text-muted);">Owner Consultant: <strong>${del.assigned}</strong></span>
        </div>
        <select onchange="updateDeliveryStatus('${del.id}', this.value)" class="form-select" style="width:auto; padding:6px 24px 6px 12px; font-size:12px;">
          <option value="Not Started" ${del.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
          <option value="In Progress" ${del.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
          <option value="Completed" ${del.status === 'Completed' ? 'selected' : ''}>Completed</option>
          <option value="On Hold" ${del.status === 'On Hold' ? 'selected' : ''}>On Hold</option>
        </select>
      </div>

      <div style="font-size:12px; border-top:1px solid rgba(255,255,255,0.05); padding-top:12px;">
        <strong style="color:var(--accent-purple);">Statutory Filings / Deliverables Vault:</strong>
        <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;" id="files-list-${del.id}">
          <!-- Files load here -->
        </div>
      </div>
    `;

    const filesBox = div.querySelector(`#files-list-${del.id}`);
    if (del.files.length === 0) {
      filesBox.innerHTML = '<span style="font-size:11px; color:var(--text-muted); font-style:italic;">No files uploaded.</span>';
    } else {
      del.files.forEach(f => {
        const item = document.createElement('div');
        item.className = 'document-vault-item';
        item.innerHTML = `
          <div class="doc-info">
            <i class="fas fa-file-pdf"></i>
            <div>
              <strong>${f.name}</strong>
              <div class="doc-meta">${f.type}</div>
            </div>
          </div>
          <button class="doc-delete" onclick="deleteDeliverableFile('${del.id}', '${f.name}')"><i class="fas fa-trash-alt"></i></button>
        `;
        filesBox.appendChild(item);
      });
    }

    container.appendChild(div);
  });

  renderVaultDocumentsGlobal();
}

function updateDeliveryStatus(delId, status) {
  const updated = state.deliveries.map(dl => {
    if (dl.id === delId) return { ...dl, status: status };
    return dl;
  });
  state.updateDeliveries(updated);
  showToast(`Updated service work status to ${status}`, 'success');
  renderServiceDelivery();
}

function handleUploadDeliverable(e) {
  e.preventDefault();
  const dealId = document.getElementById('ud-deal').value;
  const type = document.getElementById('ud-type').value;
  const fileName = document.getElementById('ud-file').value.trim();

  const updated = state.deliveries.map(del => {
    if (del.dealId === dealId) {
      const exists = del.files.find(f => f.name.toLowerCase() === fileName.toLowerCase());
      if (!exists) {
        del.files.push({ name: fileName, type: type });
      }
    }
    return del;
  });

  state.updateDeliveries(updated);
  showToast(`File ${fileName} added to client document vault.`, 'success');
  document.getElementById('upload-deliverable-form').reset();
  renderServiceDelivery();
}

function deleteDeliverableFile(delId, fileName) {
  const updated = state.deliveries.map(del => {
    if (del.id === delId) {
      del.files = del.files.filter(f => f.name !== fileName);
    }
    return del;
  });
  state.updateDeliveries(updated);
  showToast('File removed from registry.', 'info');
  renderServiceDelivery();
}

function renderVaultDocumentsGlobal() {
  const list = document.getElementById('vault-documents-list');
  list.innerHTML = '';
  
  let totalFiles = 0;
  state.deliveries.forEach(del => {
    del.files.forEach(f => {
      totalFiles++;
      const div = document.createElement('div');
      div.className = 'document-vault-item';
      div.innerHTML = `
        <div class="doc-info">
          <i class="fas fa-shield-alt" style="color:var(--accent-purple);"></i>
          <div>
            <strong>${f.name}</strong>
            <span style="font-size:10px; color:var(--text-muted); margin-left:6px;">Vault: ${del.company}</span>
          </div>
        </div>
      `;
      list.appendChild(div);
    });
  });

  if (totalFiles === 0) {
    list.innerHTML = '<span style="font-size:11px; color:var(--text-muted); font-style:italic;">Vault is empty.</span>';
  }
}

// --- Customer Support Module (Step 13) ---
function renderSupport() {
  const tbody = document.getElementById('tickets-tbody');
  tbody.innerHTML = '';
  
  // Fill Account Selector dropdown
  const select = document.getElementById('as-account');
  select.innerHTML = '<option value="" disabled selected>Select corporate client...</option>';
  state.accounts.forEach(acc => {
    const opt = document.createElement('option');
    opt.value = acc.company;
    opt.innerText = acc.company;
    select.appendChild(opt);
  });

  // Fill Executive dropdown
  const execSelect = document.getElementById('as-exec');
  execSelect.innerHTML = '<option value="" disabled selected>Choose active staff representative...</option>';
  state.staff.forEach(s => {
    if (s.status === 'active') {
      const opt = document.createElement('option');
      opt.value = s.name;
      opt.innerText = s.name;
      execSelect.appendChild(opt);
    }
  });

  if (state.tickets.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">No support tickets active.</td></tr>';
    return;
  }

  state.tickets.forEach(tick => {
    let statColor = '#ef4444';
    if (tick.status === 'Closed') statColor = '#10b981';
    else if (tick.status === 'In Progress') statColor = '#f59e0b';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:white; font-size:13px;">#${tick.id}</strong></td>
      <td><strong style="color:white; font-size:13px;">${tick.company}</strong></td>
      <td><span style="font-size:12px;">${tick.type}</span></td>
      <td><span class="priority-pill ${tick.priority.toLowerCase()}">${tick.priority}</span></td>
      <td><span class="status-badge" style="background:rgba(255,255,255,0.05); color:${statColor}; border:1px solid ${statColor}; width:fit-content;">${tick.status}</span></td>
      <td><span style="font-size:12px; color:var(--text-muted);">${tick.exec}</span></td>
      <td>
        <div style="font-size:11px; color:var(--text-muted); font-style:italic;">"${tick.resolution}"</div>
        <button class="view-all-btn" style="font-size:10px; margin-top:4px;" onclick="closeSupportTicket('${tick.id}')">Toggle Close</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleSupportForm() {
  const container = document.getElementById('add-support-form-container');
  const btn = document.getElementById('btn-toggle-support-text');
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    btn.innerText = 'Close Form';
  } else {
    container.classList.add('hidden');
    btn.innerText = 'Open Support Ticket';
  }
}

function showSupportForm() {
  const container = document.getElementById('add-support-form-container');
  const btn = document.getElementById('btn-toggle-support-text');
  container.classList.remove('hidden');
  btn.innerText = 'Close Form';
}

function handleAddSupportTicket(e) {
  e.preventDefault();
  const company = document.getElementById('as-account').value;
  const type = document.getElementById('as-type').value;
  const priority = document.getElementById('as-priority').value;
  const exec = document.getElementById('as-exec').value;
  const notes = document.getElementById('as-notes').value.trim();

  const ticketNo = "TCK" + Math.floor(1000 + Math.random() * 9000);

  const newTicket = {
    id: ticketNo,
    company, type, priority, exec, notes,
    status: "Open",
    resolution: "SLA active. Review pending."
  };

  state.updateTickets([...state.tickets, newTicket]);
  showToast(`Support case raised. Ticket Code: #${ticketNo}`, 'success');
  document.getElementById('add-support-form').reset();
  toggleSupportForm();
  renderSupport();
}

function closeSupportTicket(tNo) {
  const updated = state.tickets.map(t => {
    if (t.id === tNo) {
      const nextStat = t.status === 'Closed' ? 'Open' : 'Closed';
      const resolutionText = nextStat === 'Closed' ? 'Issue resolved and validated with client.' : 'Reopened for investigation.';
      return { ...t, status: nextStat, resolution: resolutionText };
    }
    return t;
  });
  state.updateTickets(updated);
  showToast('Support ticket state altered.', 'success');
  renderSupport();
}

// --- Management Analytics & Reports (Step 14) ---
function renderReports() {
  showReportSubTab(activeReportSubTab);
}

function showReportSubTab(subtabName) {
  activeReportSubTab = subtabName;
  
  // Highlight correct sub-tab header pill
  const tabs = ['leads', 'deals', 'revenue', 'activities', 'employee'];
  tabs.forEach(t => {
    const pill = document.getElementById(`pill-rep-${t}`);
    if (pill) {
      if (t === subtabName) pill.classList.add('active');
      else pill.classList.remove('active');
    }
    
    const panel = document.getElementById(`rep-subtab-${t}`);
    if (panel) {
      if (t === subtabName) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    }
  });

  renderReportsCharts();
}

function renderReportsCharts() {
  const isLight = document.body.classList.contains('light-theme');
  const labelColor = isLight ? '#475569' : '#9ca3af';
  const gridColor = isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.05)';

  if (activeReportSubTab === 'leads') {
    // 1. Lead Source pie chart
    const leadCtx = document.getElementById('chart-rep-lead-source').getContext('2d');
    if (repLeadSourceChart) repLeadSourceChart.destroy();
    
    const sources = { 'LinkedIn Referral': 0, 'Direct Outreach': 0, 'Organic Search': 0, 'Exhibition/Seminar': 0, 'Website Contact Form': 0 };
    state.leads.forEach(l => {
      if (sources[l.source] !== undefined) sources[l.source]++;
    });

    repLeadSourceChart = new Chart(leadCtx, {
      type: 'pie',
      data: {
        labels: Object.keys(sources),
        datasets: [{
          data: Object.values(sources),
          backgroundColor: ['#06b6d4', '#f59e0b', '#a855f7', '#10b981', '#ef4444', '#6b7280'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { color: labelColor } } }
      }
    });

    // Populate static conversion summary metrics
    const totalLeads = state.leads.length;
    const convertedLeads = state.leads.filter(l => l.status === 'Converted').length;
    const rate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : 0;
    
    document.getElementById('rep-lead-total').innerText = totalLeads;
    document.getElementById('rep-lead-converted').innerText = convertedLeads;
    document.getElementById('rep-lead-rate').innerText = `${rate}%`;

  } else if (activeReportSubTab === 'deals') {
    // 2. Open vs Won vs Lost Deals chart
    const dealCtx = document.getElementById('chart-rep-deal-status').getContext('2d');
    if (repDealStatusChart) repDealStatusChart.destroy();

    const stages = { Open: 0, Won: 0, Lost: 0 };
    state.deals.forEach(d => {
      if (d.stage === 'Won') stages.Won++;
      else if (d.stage === 'Lost') stages.Lost++;
      else stages.Open++;
    });

    repDealStatusChart = new Chart(dealCtx, {
      type: 'bar',
      data: {
        labels: ['Open Pipelines', 'Contracts Won', 'Deals Lost'],
        datasets: [{
          data: [stages.Open, stages.Won, stages.Lost],
          backgroundColor: ['#3b82f6', '#10b981', '#ef4444'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: labelColor } },
          y: { grid: { color: gridColor }, ticks: { color: labelColor, stepSize: 1 } }
        }
      }
    });

    // Pipeline strength metric sums
    let pipeSum = 0;
    state.deals.forEach(d => {
      if (d.stage !== 'Lost') pipeSum += parseFloat(d.value);
    });
    const avg = state.deals.length > 0 ? Math.round(pipeSum / state.deals.length) : 0;

    document.getElementById('rep-deal-pipeline').innerText = `$${pipeSum.toLocaleString()}`;
    document.getElementById('rep-deal-average').innerText = `$${avg.toLocaleString()}`;

  } else if (activeReportSubTab === 'revenue') {
    // 3. Monthly Revenue trends line chart
    const revCtx = document.getElementById('chart-rep-revenue-months').getContext('2d');
    if (repRevenueChart) repRevenueChart.destroy();

    let totalCollected = 0;
    state.payments.forEach(p => totalCollected += parseFloat(p.amount));

    repRevenueChart = new Chart(revCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Cumulative Billings Collected ($)',
          data: [20000, 35000, 52000, 68000, 80000, totalCollected],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          fill: true,
          tension: 0.3,
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: labelColor } } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: labelColor } },
          y: { grid: { color: gridColor }, ticks: { color: labelColor } }
        }
      }
    });

    // Pending collection list registry mapping
    const list = document.getElementById('rep-pending-billing-list');
    list.innerHTML = '';
    
    let totalPendingCount = 0;
    state.invoices.forEach(inv => {
      if (inv.outstanding > 0) {
        totalPendingCount++;
        const div = document.createElement('div');
        div.className = 'report-pending-item';
        div.innerHTML = `
          <div>
            <h4 style="font-size:13px; font-weight:700; color:white;">${inv.company}</h4>
            <span style="font-size:10px; color:#f87171;">Due by ${inv.due}</span>
          </div>
          <strong style="color:white; font-size:14px;">$${inv.outstanding.toLocaleString()}</strong>
        `;
        list.appendChild(div);
      }
    });

    if (totalPendingCount === 0) {
      list.innerHTML = '<span style="font-size:11px; color:var(--text-muted); font-style:italic;">No receivables pending collection.</span>';
    }

  } else if (activeReportSubTab === 'activities') {
    // 4. Activity Logs Horizontal Bar Chart
    const actCtx = document.getElementById('chart-rep-activity').getContext('2d');
    if (repActivityChart) repActivityChart.destroy();

    const acts = { Call: 0, Meeting: 0, Email: 0, WhatsApp: 0 };
    state.activities.forEach(a => {
      if (a.type.includes('Call')) acts.Call++;
      else if (a.type.includes('Meeting')) acts.Meeting++;
      else if (a.type.includes('Email')) acts.Email++;
      else acts.WhatsApp++;
    });

    repActivityChart = new Chart(actCtx, {
      type: 'bar',
      data: {
        labels: ['Calls', 'Meetings', 'Emails', 'WhatsApp Ping'],
        datasets: [{
          label: 'Total Logs Counter',
          data: [acts.Call, acts.Meeting, acts.Email, acts.WhatsApp],
          backgroundColor: ['#6366f1', '#a855f7', '#06b6d4', '#10b981'],
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: labelColor, stepSize: 1 } },
          y: { grid: { color: gridColor }, ticks: { color: labelColor } }
        }
      }
    });

  } else if (activeReportSubTab === 'employee') {
    // 5. Employee task horizontal statistics
    const empCtx = document.getElementById('chart-rep-employee-tasks').getContext('2d');
    if (repEmployeeChart) repEmployeeChart.destroy();

    // Map deals count per staff member
    const performance = {};
    state.staff.forEach(s => {
      performance[s.name] = 0;
    });
    
    state.deals.forEach(d => {
      if (performance[d.owner] !== undefined) {
        performance[d.owner]++;
      }
    });

    repEmployeeChart = new Chart(empCtx, {
      type: 'bar',
      data: {
        labels: Object.keys(performance),
        datasets: [{
          label: 'Deals Pipelines Managed (Step 5)',
          data: Object.values(performance),
          backgroundColor: '#8b5cf6',
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: labelColor, stepSize: 1 } },
          y: { grid: { color: gridColor }, ticks: { color: labelColor } }
        }
      }
    });

    // Staff Leaderboard
    const container = document.getElementById('rep-staff-leaderboard');
    container.innerHTML = '';
    
    state.staff.forEach(s => {
      const dealsCount = performance[s.name] || 0;
      const div = document.createElement('div');
      div.className = 'report-leaderboard-item';
      div.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="avatar-initials" style="width:28px; height:28px; font-size:10px;">${getInitials(s.name)}</div>
          <div>
            <h4 style="font-size:12px; font-weight:700; color:white;">${s.name}</h4>
            <span style="font-size:10px; color:var(--text-muted);">${s.role}</span>
          </div>
        </div>
        <strong style="color:var(--accent-purple); font-size:12px;">${dealsCount} Deals</strong>
      `;
      container.appendChild(div);
    });
  }
}

// --- Detail View Dialog Modal ---
function openDetailsModal(leadId) {
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;

  const overlay = document.getElementById('details-modal');
  const list = document.getElementById('details-modal-list');
  document.getElementById('details-lead-name').innerText = lead.company;

  list.innerHTML = `
    <h4 style="font-size:13px; font-weight:700; color:var(--accent-purple); margin-bottom:6px; text-transform:uppercase;">1. Lead Summary Details</h4>
    <div class="details-row">
      <div class="details-label">Lead Owner</div>
      <div class="details-value">Finscript Administrator</div>
    </div>
    <div class="details-row">
      <div class="details-label">Lead Date</div>
      <div class="details-value">${lead.created}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Lead Source</div>
      <div class="details-value">${lead.source}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Priority Status</div>
      <div class="details-value">${lead.hot ? '🔥 High Priority' : 'Standard'}</div>
    </div>

    <h4 style="font-size:13px; font-weight:700; color:var(--accent-blue); margin:12px 0 6px 0; text-transform:uppercase;">2. Customer Profile Summary</h4>
    <div class="details-row">
      <div class="details-label">Customer Name</div>
      <div class="details-value">${lead.name}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Designation</div>
      <div class="details-value">${lead.designation || 'n/a'}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Industry Classification</div>
      <div class="details-value">${lead.industry || 'n/a'}</div>
    </div>

    <h4 style="font-size:13px; font-weight:700; color:var(--status-contacted); margin:12px 0 6px 0; text-transform:uppercase;">3. Business Details</h4>
    <div class="details-row">
      <div class="details-label">Corporate Structure</div>
      <div class="details-value">${lead.businessType || 'n/a'}</div>
    </div>
    <div class="details-row">
      <div class="details-label">No. of Employees</div>
      <div class="details-value">${lead.employees || 'n/a'}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Annual Turnover</div>
      <div class="details-value">${lead.turnover || 'n/a'}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Existing Website</div>
      <div class="details-value">${lead.website || 'n/a'}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Social Media Presence</div>
      <div class="details-value">${lead.social || 'n/a'}</div>
    </div>

    <h4 style="font-size:13px; font-weight:700; color:var(--status-converted); margin:12px 0 6px 0; text-transform:uppercase;">4. Contact details</h4>
    <div class="details-row">
      <div class="details-label">Mobile Number</div>
      <div class="details-value">${lead.phone}</div>
    </div>
    <div class="details-row">
      <div class="details-label">WhatsApp ID</div>
      <div class="details-value">${lead.whatsapp || lead.phone}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Corporate Email</div>
      <div class="details-value">${lead.email}</div>
    </div>

    <h4 style="font-size:13px; font-weight:700; color:var(--text-muted); margin:12px 0 6px 0; text-transform:uppercase;">5. Discussion Remarks & Notes</h4>
    <div class="details-row">
      <div class="details-label">Remarks</div>
      <div class="details-value">${lead.notes || 'None recorded.'}</div>
    </div>
  `;

  overlay.classList.add('active');
}

function closeDetailsModal() {
  document.getElementById('details-modal').classList.remove('active');
}

// --- Status Edit Dialog Modal ---
let targetStatusLeadId = null;
function openStatusModal(leadId) {
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;

  targetStatusLeadId = leadId;
  document.getElementById('status-lead-name').innerText = lead.name;
  document.getElementById('status-select-input').value = lead.status;
  
  document.getElementById('status-modal').classList.add('active');
  
  // Re-bind save button click action
  const saveBtn = document.getElementById('status-save-btn');
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.replaceWith(newSaveBtn);
  
  newSaveBtn.addEventListener('click', () => {
    const val = document.getElementById('status-select-input').value;
    const updated = state.leads.map(l => {
      if (l.id === targetStatusLeadId) return { ...l, status: val };
      return l;
    });
    state.updateLeads(updated);
    showToast(`Status updated to ${val}`, 'success');
    closeStatusModal();
    renderLeads();
  });
}

function closeStatusModal() {
  document.getElementById('status-modal').classList.remove('active');
}

// --- Call Dialer Dialog Modal ---
function openDialerModal(leadId) {
  const lead = state.leads.find(l => l.id === leadId);
  if (!lead) return;

  const overlay = document.getElementById('dialer-modal');
  document.getElementById('dialer-lead-name').innerText = lead.name;
  document.getElementById('dialer-phone-number').innerText = lead.phone;
  document.getElementById('dialer-outcome').value = '';
  
  overlay.classList.add('active');
  
  const saveBtn = document.getElementById('dialer-save-btn');
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.replaceWith(newSaveBtn);
  
  newSaveBtn.addEventListener('click', () => {
    const notes = document.getElementById('dialer-outcome').value.trim() || 'Log Call completed.';
    
    const newAct = {
      id: "act_" + Date.now(),
      company: lead.company,
      type: "Call",
      title: `Call: Spoke to ${lead.name}`,
      time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "Completed",
      notes
    };

    state.updateActivities([newAct, ...state.activities]);
    overlay.classList.remove('active');
    showToast(`Call logged for ${lead.name}`, 'success');
    refreshDashboard();
  });
}

function closeDialerModal() {
  document.getElementById('dialer-modal').classList.remove('active');
}

// --- Admin Panel controller ---
function renderAdminPanel() {
  calculateAdminMetrics();
  
  const tbody = document.getElementById('admin-users-tbody');
  tbody.innerHTML = '';

  state.staff.forEach(user => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="admin-user-cell">
          <div class="admin-user-avatar">${getInitials(user.name)}</div>
          <div class="admin-user-details">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
          </div>
        </div>
      </td>
      <td>
        <strong style="font-size:13px; color:var(--text-muted);">${user.role}</strong>
      </td>
      <td>
        <span class="user-status-pill ${user.status}" data-id="${user.id}">
          ${user.status}
        </span>
      </td>
      <td>
        <button class="lead-icon-btn action-admin-delete" data-id="${user.id}" title="Remove Staff" style="color:#ef4444; border-color:transparent; background:transparent;">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    `;

    // Toggle user status
    tr.querySelector('.user-status-pill').addEventListener('click', () => {
      const updated = state.staff.map(s => {
        if (s.id === user.id) {
          const nextVal = s.status === 'active' ? 'inactive' : 'active';
          showToast(`Staff member status set to ${nextVal}`, 'success');
          return { ...s, status: nextVal };
        }
        return s;
      });
      state.updateStaff(updated);
      renderAdminPanel();
    });

    // Delete staff user
    tr.querySelector('.action-admin-delete').addEventListener('click', () => {
      if (confirm(`Remove staff member registry for ${user.name}?`)) {
        const filtered = state.staff.filter(s => s.id !== user.id);
        state.updateStaff(filtered);
        showToast('Staff registry deleted.', 'info');
        renderAdminPanel();
      }
    });

    tbody.appendChild(tr);
  });
  
  const addBtn = document.getElementById('admin-add-user-btn');
  const newAddBtn = addBtn.cloneNode(true);
  addBtn.replaceWith(newAddBtn);
  
  newAddBtn.addEventListener('click', () => {
    document.getElementById('admin-modal').classList.add('active');
  });
}

function calculateAdminMetrics() {
  const total = state.staff.length;
  const active = state.staff.filter(s => s.status === 'active').length;
  const inactive = total - active;

  document.getElementById('admin-metric-total').innerText = total;
  document.getElementById('admin-metric-active').innerText = active;
  document.getElementById('admin-metric-offline').innerText = inactive;
}

function closeAdminModal() {
  document.getElementById('admin-modal').classList.remove('active');
}

function handleAddUser(e) {
  e.preventDefault();
  const name = document.getElementById('au-name').value.trim();
  const email = document.getElementById('au-email').value.trim();
  const role = document.getElementById('au-role').value;
  const status = document.getElementById('au-status').value;

  const newUser = {
    id: "staff_" + Date.now(),
    name, email, role, status
  };

  state.updateStaff([...state.staff, newUser]);
  showToast(`Staff user "${name}" registered.`, 'success');
  
  document.getElementById('admin-add-user-form').reset();
  closeAdminModal();
  renderAdminPanel();
}
