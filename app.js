/* ==========================================
   ACADENO CRM - CORE APPLICATION LOGIC (JS)
   ========================================== */

// --- Initial Mock Data Database ---
const INITIAL_LEADS = [
  {
    id: "lead_1",
    name: "Priya Sharma",
    email: "priya.s@gmail.com",
    phone: "+91 98765 43210",
    college: "Delhi University",
    course: "Python",
    notes: "Very keen, asked about batch schedule and fees.",
    source: "Walk-in",
    created: "2024-01-15",
    status: "Interested",
    hot: true
  },
  {
    id: "lead_2",
    name: "Rahul Kumar",
    email: "rahul.k@gmail.com",
    phone: "+91 87654 32109",
    college: "Amity University",
    course: "Data Analytics",
    notes: "Inquired via Instagram DM.",
    source: "Social Media",
    created: "2024-01-16",
    status: "New",
    hot: false
  },
  {
    id: "lead_3",
    name: "Anita Verma",
    email: "anita.v@gmail.com",
    phone: "+91 76543 21098",
    college: "Jamia Millia",
    course: "AI/ML",
    notes: "Confirmed and paid fees. Starting next batch.",
    source: "Referral",
    created: "2024-01-14",
    status: "Converted",
    hot: true
  },
  {
    id: "lead_4",
    name: "Karan Mehta",
    email: "karan.m@gmail.com",
    phone: "+91 65432 10987",
    college: "IIT Delhi",
    course: "Flutter",
    notes: "Called once, needs follow-up call this week.",
    source: "College Visit",
    created: "2024-01-13",
    status: "Contacted",
    hot: false
  },
  {
    id: "lead_5",
    name: "Sunita Patel",
    email: "sunita.p@gmail.com",
    phone: "+91 54321 09876",
    college: "IGNOU",
    course: "Python",
    notes: "Budget constraint, will reconsider in 3 months.",
    source: "Phone Call",
    created: "2024-01-12",
    status: "Not Interested",
    hot: false
  }
];

const INITIAL_ACTIVITIES = [
  {
    id: "act_1",
    type: "Call",
    title: "Called Priya Sharma",
    time: "Today, 10:30 AM",
    status: "Completed",
    notes: "Discussed syllabus. She is interested."
  },
  {
    id: "act_2",
    type: "Visit",
    title: "Visited DU North Campus",
    time: "Yesterday, 2:15 PM",
    status: "Pending",
    notes: "Need to meet Dean for Seminar permissions."
  },
  {
    id: "act_3",
    type: "Follow-up",
    title: "Follow-up: Karan Mehta",
    time: "Tomorrow, 11:00 AM",
    status: "Upcoming",
    notes: "Follow up call regarding scholarship eligibility."
  }
];

const INITIAL_STAFF = [
  { id: "staff_1", name: "Rahul Sharma", email: "rahul@acadeno.com", role: "Marketing Executive", status: "active" },
  { id: "staff_2", name: "Priya Singh", email: "priya@acadeno.com", role: "Manager", status: "active" },
  { id: "staff_3", name: "Amit Gupta", email: "amit@acadeno.com", role: "HR", status: "active" },
  { id: "staff_4", name: "Neha Patel", email: "neha@acadeno.com", role: "Marketing Executive", status: "inactive" },
  { id: "staff_5", name: "Vikram Das", email: "vikram@acadeno.com", role: "Supervisor", status: "active" },
  { id: "staff_6", name: "Sonia Mehta", email: "sonia@acadeno.com", role: "Admin", status: "active" }
];

const INITIAL_TASKS = [
  { id: "task_1", title: "Prepare weekly marketing report", due: "2026-06-29", priority: "HIGH", completed: false },
  { id: "task_2", title: "Log Friday college visits outcomes", due: "2026-06-27", priority: "MEDIUM", completed: true },
  { id: "task_3", title: "Draft campaign templates", due: "2026-06-30", priority: "LOW", completed: false }
];

const INITIAL_VISITS = [
  {
    id: "visit_1",
    college: "DU North Campus",
    location: "GTB Nagar, Delhi",
    date: "2026-06-26",
    time: "14:15",
    contactPerson: "Dr. Anil Rawat",
    contactPhone: "+91 99999 88888",
    purpose: "Seminar permissions",
    outcome: "Met the desk representative. Need approval from principal.",
    completed: false
  }
];

// --- Application State Management ---
class AppState {
  constructor() {
    this.leads = this.loadData('crm_leads', INITIAL_LEADS);
    this.activities = this.loadData('crm_activities', INITIAL_ACTIVITIES);
    this.staff = this.loadData('crm_staff', INITIAL_STAFF);
    this.tasks = this.loadData('crm_tasks', INITIAL_TASKS);
    this.visits = this.loadData('crm_visits', INITIAL_VISITS);
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

  updateLeads(leads) {
    this.leads = leads;
    this.saveData('crm_leads', leads);
  }

  updateActivities(activities) {
    this.activities = activities;
    this.saveData('crm_activities', activities);
  }

  updateTasks(tasks) {
    this.tasks = tasks;
    this.saveData('crm_tasks', tasks);
  }

  updateVisits(visits) {
    this.visits = visits;
    this.saveData('crm_visits', visits);
  }

  updateStaff(staff) {
    this.staff = staff;
    this.saveData('crm_staff', staff);
  }

  setLoggedInUser(user) {
    this.loggedInUser = user;
    this.saveData('crm_user', user);
  }

  setTheme(theme) {
    this.theme = theme;
    this.saveData('crm_theme', theme);
  }
}

const state = new AppState();
let activeFilter = 'All';
let leadsSearchQuery = '';
let dashboardChartInstance = null;
let statusChartInstance = null;

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
  
  // Bind close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });
  
  // Auto remove
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
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

// --- Theme Initialization ---
function initTheme() {
  if (state.theme === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('theme-icon').className = 'fas fa-moon';
  } else {
    document.body.classList.remove('light-theme');
    document.getElementById('theme-icon').className = 'fas fa-sun';
  }
}

// --- Auth Checker ---
function checkAuth() {
  const loginScreen = document.getElementById('login-screen');
  const appContainer = document.getElementById('app-container');
  
  if (state.loggedInUser) {
    loginScreen.classList.add('hidden');
    appContainer.classList.remove('hidden');
    
    // Update user profile info in footer
    document.getElementById('avatar-text').innerText = getInitials(state.loggedInUser.name);
    document.getElementById('username-display').innerText = state.loggedInUser.name;
    document.getElementById('user-role-display').innerText = state.loggedInUser.role;
    
    // Default Route
    switchModule('dashboard');
  } else {
    loginScreen.classList.remove('hidden');
    appContainer.classList.add('hidden');
  }
}

// --- Global Event Binding ---
function bindEvents() {
  // Login Form Submission
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  
  // Password Visibility Toggle
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

  // Sidebar Toggle on Mobile
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mobile-open');
  });

  // Close sidebar clicking outside on mobile
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // Sidebar Navigation Links
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const moduleName = item.getAttribute('data-module');
      if (moduleName) {
        switchModule(moduleName);
        document.getElementById('sidebar').classList.remove('mobile-open');
      }
    });
  });

  // Logout Button
  document.getElementById('logout-btn').addEventListener('click', () => {
    state.setLoggedInUser(null);
    showToast('Logged out successfully', 'info');
    checkAuth();
  });

  // Theme Toggle Button
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = !document.body.classList.contains('light-theme');
    if (isDark) {
      document.body.classList.add('light-theme');
      document.getElementById('theme-icon').className = 'fas fa-moon';
      state.setTheme('light');
      showToast('Switched to Light Theme', 'success');
    } else {
      document.body.classList.remove('light-theme');
      document.getElementById('theme-icon').className = 'fas fa-sun';
      state.setTheme('dark');
      showToast('Switched to Dark Theme', 'success');
    }
    // Re-render charts to align with background
    if (state.loggedInUser) {
      renderDashboardCharts();
    }
  });

  // Quick Action Buttons Bindings
  document.getElementById('qa-add-lead').addEventListener('click', () => switchModule('add-lead'));
  document.getElementById('qa-add-visit').addEventListener('click', () => switchModule('add-visit'));
  document.getElementById('qa-whatsapp').addEventListener('click', () => switchModule('whatsapp'));
  document.getElementById('qa-admin').addEventListener('click', () => switchModule('admin'));

  // Forms Submissions
  document.getElementById('add-lead-form').addEventListener('submit', handleAddLead);
  document.getElementById('add-visit-form').addEventListener('submit', handleAddVisit);
  document.getElementById('add-followup-form').addEventListener('submit', handleAddFollowup);
  document.getElementById('add-task-form').addEventListener('submit', handleAddTask);
  document.getElementById('admin-add-user-form').addEventListener('submit', handleAddUser);

  // Leads Filters & Search Inputs
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      renderLeads();
    });
  });

  document.getElementById('leads-search').addEventListener('input', (e) => {
    leadsSearchQuery = e.target.value;
    renderLeads();
  });

  document.getElementById('leads-shortcut-btn').addEventListener('click', () => switchModule('add-lead'));

  // WhatsApp template change preview updater
  const campaignMsgInput = document.getElementById('campaign-msg-template');
  campaignMsgInput.addEventListener('input', () => {
    updateWhatsAppPreview();
  });
  
  // WhatsApp filter changes
  document.getElementById('campaign-filter').addEventListener('change', (e) => {
    renderCampaignLeads(e.target.value);
  });
  
  // WhatsApp Toggle Select All
  document.getElementById('campaign-select-all').addEventListener('change', (e) => {
    const checks = document.querySelectorAll('.campaign-lead-checkbox');
    checks.forEach(chk => {
      chk.checked = e.target.checked;
    });
    updateCampaignCount();
  });
  
  // WhatsApp Send trigger
  document.getElementById('whatsapp-send-btn').addEventListener('click', handleSendWhatsAppCampaign);

  // Close modals clicking on overlay/close buttons
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close-btn') || e.target.closest('.modal-close-btn')) {
        modal.classList.remove('active');
      }
    });
  });

  // Pre-populate follow-up lead options dropdown
  setupFollowupAutocomplete();
}

// --- Login Controller ---
function handleLogin(e) {
  e.preventDefault();
  const emailInput = document.getElementById('login-email').value.trim();
  const passwordInput = document.getElementById('login-password').value;
  const errorContainer = document.getElementById('login-error-container');
  
  errorContainer.classList.add('hidden');
  
  // Master demo login credentials matching
  if (emailInput === 'executive@demo.com' && passwordInput === 'password123') {
    const user = { name: "Rahul Sharma", email: "executive@demo.com", role: "Marketing Executive" };
    state.setLoggedInUser(user);
    showToast('Welcome back, Rahul!', 'success');
    checkAuth();
    return;
  }
  
  // Alternatively search in staff database
  const matchedStaff = state.staff.find(s => s.email.toLowerCase() === emailInput.toLowerCase() && s.status === 'active');
  if (matchedStaff && passwordInput === 'password123') {
    const user = { name: matchedStaff.name, email: matchedStaff.email, role: matchedStaff.role };
    state.setLoggedInUser(user);
    showToast(`Welcome back, ${matchedStaff.name}!`, 'success');
    checkAuth();
    return;
  }
  
  // Credentials failed
  errorContainer.innerText = "Invalid credentials. Hint: use executive@demo.com / password123";
  errorContainer.classList.remove('hidden');
  showToast('Login failed. Please check credentials.', 'error');
}

// --- Navigation Engine ---
function switchModule(moduleName) {
  // Hide all sections
  const sections = document.querySelectorAll('.module-section');
  sections.forEach(sec => sec.classList.add('hidden'));
  
  // Remove active from all nav items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  
  // Show target section
  const targetSection = document.getElementById(`${moduleName}-section`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }
  
  // Highlight nav item
  const activeNav = document.querySelector(`.nav-item[data-module="${moduleName}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }
  
  // Update screen header title
  const displayTitles = {
    'dashboard': 'Dashboard Overview',
    'leads': 'Leads & Enquiries',
    'add-lead': 'Add New CRM Lead',
    'add-visit': 'Log College Visit',
    'follow-up': 'Schedule Follow-up Call',
    'tasks': 'Task Board',
    'admin': 'System Admin Panel',
    'whatsapp': 'WhatsApp Broadcast Campaign'
  };
  document.getElementById('current-section-title').innerText = displayTitles[moduleName] || 'Acadeno CRM';

  // Specific Module Initialization hooks
  if (moduleName === 'dashboard') {
    refreshDashboard();
  } else if (moduleName === 'leads') {
    renderLeads();
  } else if (moduleName === 'tasks') {
    renderTasks();
  } else if (moduleName === 'admin') {
    renderAdminPanel();
  } else if (moduleName === 'whatsapp') {
    initializeWhatsAppCampaign();
  } else if (moduleName === 'follow-up') {
    setupFollowupAutocomplete();
    renderFollowupsList();
  } else if (moduleName === 'add-visit') {
    renderVisitsHistory();
  }
}

// --- Dashboard Module Controller ---
function refreshDashboard() {
  calculateMetrics();
  renderActivitiesFeed();
  renderHotLeadsWidget();
  renderDashboardCharts();
}

function calculateMetrics() {
  // Today's Calls
  const todayCalls = state.activities.filter(a => a.type === 'Call' && a.time.includes('Today')).length + 12; // Base offset from Figma
  document.getElementById('metric-calls').innerText = todayCalls;

  // Today's Visits
  const todayVisits = state.visits.filter(v => v.date === new Date().toISOString().split('T')[0]).length + 3; // Base offset from Figma
  document.getElementById('metric-visits').innerText = todayVisits;

  // Hot Leads
  const hotLeadsCount = state.leads.filter(l => l.hot).length;
  document.getElementById('metric-hot-leads').innerText = hotLeadsCount;

  // Pending Followups
  const pendingFollowups = state.activities.filter(a => a.type === 'Follow-up' && a.status !== 'Completed').length;
  document.getElementById('metric-followups').innerText = pendingFollowups;
}

function renderActivitiesFeed() {
  const container = document.getElementById('dashboard-activities');
  container.innerHTML = '';
  
  if (state.activities.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:13px;">No recent activities.</p>';
    return;
  }
  
  state.activities.forEach(act => {
    let iconClass = 'phone-alt';
    if (act.type === 'Visit') iconClass = 'map-marker-alt';
    if (act.type === 'Follow-up') iconClass = 'calendar-alt';
    
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = `
      <div class="activity-icon-wrap ${act.status.toLowerCase()}">
        <i class="fas fa-${iconClass}"></i>
      </div>
      <div class="activity-content">
        <div class="activity-title">${act.title}</div>
        <div class="activity-time-wrap">
          <span>${act.time}</span>
          <span>•</span>
          <span class="activity-badge ${act.status.toLowerCase()}">${act.status}</span>
        </div>
      </div>
      ${act.status !== 'Completed' ? `
        <button class="lead-icon-btn action-check" data-id="${act.id}" title="Mark completed">
          <i class="fas fa-check"></i>
        </button>
      ` : ''}
    `;
    
    // Click events to complete activities
    const checkBtn = item.querySelector('.action-check');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const actId = checkBtn.getAttribute('data-id');
        const acts = state.activities.map(a => {
          if (a.id === actId) {
            return { ...a, status: 'Completed' };
          }
          return a;
        });
        state.updateActivities(acts);
        showToast('Activity marked as completed', 'success');
        refreshDashboard();
      });
    }
    
    container.appendChild(item);
  });
}

function renderHotLeadsWidget() {
  const container = document.getElementById('dashboard-hot-leads');
  container.innerHTML = '';
  
  const hotLeads = state.leads.filter(l => l.hot);
  if (hotLeads.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:13px;">No hot leads available.</p>';
    return;
  }
  
  hotLeads.forEach(lead => {
    const card = document.createElement('div');
    card.className = 'hot-lead-card';
    card.innerHTML = `
      <div class="hot-lead-identity">
        <div class="avatar-initials">${getInitials(lead.name)}</div>
        <div class="hot-lead-meta">
          <h4>${lead.name}</h4>
          <p>${lead.course} • ${lead.college}</p>
        </div>
      </div>
      <button class="hot-lead-action-btn" data-phone="${lead.phone}" data-name="${lead.name}" title="Call Now">
        <i class="fas fa-phone-alt"></i>
      </button>
    `;
    
    card.querySelector('.hot-lead-action-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openCallDialerModal(lead);
    });
    
    container.appendChild(card);
  });
  
  // View All bind
  document.getElementById('view-all-hot-leads').addEventListener('click', () => {
    activeFilter = 'Hot';
    // Highlight Hot filter pill
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      if (p.getAttribute('data-filter') === 'Hot') p.classList.add('active');
      else p.classList.remove('active');
    });
    switchModule('leads');
  });
}

// Simulated Dialer Logger Modal
function openCallDialerModal(lead) {
  const overlay = document.getElementById('dialer-modal');
  document.getElementById('dialer-lead-name').innerText = lead.name;
  document.getElementById('dialer-phone-number').innerText = lead.phone;
  
  const outcomeText = document.getElementById('dialer-outcome');
  outcomeText.value = '';
  
  overlay.classList.add('active');
  
  // Handle log submit
  const saveBtn = document.getElementById('dialer-save-btn');
  // Recreate listener to prevent duplicates
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.replaceWith(newSaveBtn);
  
  newSaveBtn.addEventListener('click', () => {
    const note = outcomeText.value.trim() || 'Spoke to candidate regarding queries.';
    
    // Add to activities
    const newAct = {
      id: "act_" + Date.now(),
      type: "Call",
      title: `Called ${lead.name}`,
      time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "Completed",
      notes: note
    };
    
    state.updateActivities([newAct, ...state.activities]);
    overlay.classList.remove('active');
    showToast(`Call logged for ${lead.name}`, 'success');
    refreshDashboard();
  });
}

// --- Dashboard Chart.js Visuals ---
function renderDashboardCharts() {
  const isLight = document.body.classList.contains('light-theme');
  const labelColor = isLight ? '#475569' : '#9ca3af';
  const gridColor = isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.05)';
  
  // 1. Performance Chart (Calls vs Visits vs Follow-ups)
  const perfCtx = document.getElementById('performanceChart').getContext('2d');
  
  if (dashboardChartInstance) {
    dashboardChartInstance.destroy();
  }
  
  dashboardChartInstance = new Chart(perfCtx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Calls Made',
          data: [12, 19, 14, 15, 21, 14],
          backgroundColor: '#3b82f6',
          borderRadius: 4
        },
        {
          label: 'Visits Logged',
          data: [2, 4, 3, 2, 5, 3],
          backgroundColor: '#f59e0b',
          borderRadius: 4
        },
        {
          label: 'Followups Done',
          data: [5, 8, 6, 7, 10, 5],
          backgroundColor: '#8b5cf6',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: labelColor, font: { family: 'Inter', size: 11 } }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: labelColor, font: { family: 'Inter' } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: labelColor, font: { family: 'Inter' } }
        }
      }
    }
  });
  
  // 2. Status Chart (Lead Status distribution)
  const statusCtx = document.getElementById('statusChart').getContext('2d');
  
  if (statusChartInstance) {
    statusChartInstance.destroy();
  }
  
  // Count current lead statuses
  const counts = { New: 0, Contacted: 0, Interested: 0, Converted: 0, 'Not Interested': 0 };
  state.leads.forEach(l => {
    if (counts[l.status] !== undefined) counts[l.status]++;
  });
  
  statusChartInstance = new Chart(statusCtx, {
    type: 'doughnut',
    data: {
      labels: ['New', 'Contacted', 'Interested', 'Converted', 'Not Interested'],
      datasets: [{
        data: [counts.New, counts.Contacted, counts.Interested, counts.Converted, counts['Not Interested']],
        backgroundColor: ['#06b6d4', '#f59e0b', '#a855f7', '#10b981', '#6b7280'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: labelColor, font: { family: 'Inter', size: 10 } }
        }
      },
      cutout: '70%'
    }
  });
}

// --- Leads Module Controller ---
function renderLeads() {
  const container = document.getElementById('leads-grid');
  container.innerHTML = '';
  
  // Filter and search
  const filtered = state.leads.filter(lead => {
    // Tab filter
    if (activeFilter !== 'All') {
      if (activeFilter === 'Hot' && !lead.hot) return false;
      if (activeFilter !== 'Hot' && lead.status !== activeFilter) return false;
    }
    
    // Search query match
    if (leadsSearchQuery) {
      const q = leadsSearchQuery.toLowerCase();
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.phone.includes(q) ||
        lead.college.toLowerCase().includes(q) ||
        lead.course.toLowerCase().includes(q)
      );
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = '<div class="form-grid-full text-center" style="padding: 40px; color: var(--text-muted);">No matching leads found.</div>';
    return;
  }
  
  filtered.forEach(lead => {
    const card = document.createElement('div');
    card.className = 'lead-card-item';
    card.innerHTML = `
      ${lead.hot ? `<div class="hot-lead-badge"><i class="fas fa-fire"></i> HOT</div>` : ''}
      <div class="lead-card-header">
        <div class="lead-card-initials">${getInitials(lead.name)}</div>
        <div class="lead-card-identity">
          <div class="lead-card-name">${lead.name}</div>
          <span class="status-badge ${lead.status.toLowerCase().replace(' ', '-')}">${lead.status}</span>
        </div>
      </div>
      
      <div class="lead-card-details">
        <div class="lead-detail-row">
          <i class="fas fa-envelope"></i>
          <span>${lead.email}</span>
        </div>
        <div class="lead-detail-row">
          <i class="fas fa-phone-alt"></i>
          <span>${lead.phone}</span>
        </div>
        <div class="lead-detail-row">
          <i class="fas fa-university"></i>
          <span>${lead.college}</span>
        </div>
        <div class="lead-detail-row">
          <i class="fas fa-book-open"></i>
          <span>Course: <strong>${lead.course}</strong></span>
        </div>
        ${lead.notes ? `
          <div class="lead-detail-row notes">
            <div class="notes-header">Remarks / Notes</div>
            <div>${lead.notes}</div>
          </div>
        ` : ''}
      </div>
      
      <div class="lead-card-actions">
        <button class="lead-card-btn primary action-details" data-id="${lead.id}">
          <i class="fas fa-info-circle"></i> Details
        </button>
        <button class="lead-card-btn action-status" data-id="${lead.id}">
          <i class="fas fa-edit"></i> Status
        </button>
        <div class="lead-contact-actions">
          <a href="tel:${lead.phone}" class="lead-icon-btn action-dialer" title="Call Client">
            <i class="fas fa-phone-alt"></i>
          </a>
          <button class="lead-icon-btn action-msg" data-id="${lead.id}" title="Send Message">
            <i class="fab fa-whatsapp"></i>
          </button>
        </div>
      </div>
    `;
    
    // Event listeners
    card.querySelector('.action-details').addEventListener('click', () => openDetailsModal(lead));
    card.querySelector('.action-status').addEventListener('click', () => openUpdateStatusModal(lead));
    card.querySelector('.action-dialer').addEventListener('click', (e) => {
      e.preventDefault();
      openCallDialerModal(lead);
    });
    card.querySelector('.action-msg').addEventListener('click', () => {
      // Go to WhatsApp broadcast pre-configured for this lead
      initializeWhatsAppCampaign(lead.id);
      switchModule('whatsapp');
    });
    
    container.appendChild(card);
  });
}

function openDetailsModal(lead) {
  const overlay = document.getElementById('details-modal');
  const list = document.getElementById('details-modal-list');
  
  document.getElementById('details-lead-name').innerText = lead.name;
  
  list.innerHTML = `
    <div class="details-row">
      <div class="details-label">Lead ID</div>
      <div class="details-value">${lead.id}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Email</div>
      <div class="details-value">${lead.email}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Phone</div>
      <div class="details-value">${lead.phone}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Institution</div>
      <div class="details-value">${lead.college}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Course</div>
      <div class="details-value">${lead.course}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Source</div>
      <div class="details-value">${lead.source}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Created</div>
      <div class="details-value">${lead.created}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Status</div>
      <div class="details-value"><span class="status-badge ${lead.status.toLowerCase().replace(' ', '-')}">${lead.status}</span></div>
    </div>
    <div class="details-row">
      <div class="details-label">Priority</div>
      <div class="details-value">${lead.hot ? '🔥 Hot Lead (High Priority)' : 'Standard'}</div>
    </div>
    <div class="details-row">
      <div class="details-label">Notes</div>
      <div class="details-value">${lead.notes || 'None'}</div>
    </div>
  `;
  
  overlay.classList.add('active');
}

function openUpdateStatusModal(lead) {
  const overlay = document.getElementById('status-modal');
  document.getElementById('status-lead-name').innerText = lead.name;
  
  const select = document.getElementById('status-select-input');
  select.value = lead.status;
  
  overlay.classList.add('active');
  
  const saveBtn = document.getElementById('status-save-btn');
  // Rebind
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.replaceWith(newSaveBtn);
  
  newSaveBtn.addEventListener('click', () => {
    const newStatus = select.value;
    const leads = state.leads.map(l => {
      if (l.id === lead.id) {
        return { ...l, status: newStatus };
      }
      return l;
    });
    state.updateLeads(leads);
    overlay.classList.remove('active');
    showToast(`Status updated to ${newStatus} for ${lead.name}`, 'success');
    renderLeads();
  });
}

// --- Add Lead Controller ---
function handleAddLead(e) {
  e.preventDefault();
  const name = document.getElementById('al-name').value.trim();
  const phone = document.getElementById('al-phone').value.trim();
  const email = document.getElementById('al-email').value.trim();
  const college = document.getElementById('al-college').value.trim();
  const course = document.getElementById('al-course').value;
  const source = document.getElementById('al-source').value;
  const notes = document.getElementById('al-notes').value.trim();
  const hot = document.getElementById('al-hot').checked;
  
  if (!name || !phone || !course || !source) {
    showToast('Please fill all mandatory fields', 'error');
    return;
  }
  
  const newLead = {
    id: "lead_" + Date.now(),
    name,
    email: email || "n/a",
    phone,
    college: college || "n/a",
    course,
    notes,
    source,
    created: new Date().toISOString().split('T')[0],
    status: "New",
    hot
  };
  
  const leads = [...state.leads, newLead];
  state.updateLeads(leads);
  
  // Add activity log
  const newAct = {
    id: "act_" + Date.now(),
    type: "Call",
    title: `Added Lead: ${name}`,
    time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: "Completed",
    notes: `Lead added through CRM Form. Course interest: ${course}`
  };
  state.updateActivities([newAct, ...state.activities]);
  
  showToast(`Successfully added lead ${name}`, 'success');
  
  // Reset form and redirect
  document.getElementById('add-lead-form').reset();
  switchModule('leads');
}

// --- Add Visit Controller ---
function handleAddVisit(e) {
  e.preventDefault();
  const college = document.getElementById('av-college').value.trim();
  const location = document.getElementById('av-location').value.trim();
  const date = document.getElementById('av-date').value;
  const time = document.getElementById('av-time').value;
  const contactPerson = document.getElementById('av-contact').value.trim();
  const contactPhone = document.getElementById('av-phone').value.trim();
  const purpose = document.getElementById('av-purpose').value.trim();
  const outcome = document.getElementById('av-outcome').value.trim();
  const completed = document.getElementById('av-completed').checked;

  if (!college || !date || !time) {
    showToast('College, Date and Time are required', 'error');
    return;
  }

  const newVisit = {
    id: "visit_" + Date.now(),
    college,
    location,
    date,
    time,
    contactPerson,
    contactPhone,
    purpose,
    outcome,
    completed
  };

  state.updateVisits([newVisit, ...state.visits]);

  // Log activity
  const newAct = {
    id: "act_" + Date.now(),
    type: "Visit",
    title: `Logged Visit: ${college}`,
    time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: completed ? "Completed" : "Pending",
    notes: outcome || purpose
  };
  state.updateActivities([newAct, ...state.activities]);

  showToast(`Logged college visit to ${college}`, 'success');
  document.getElementById('add-visit-form').reset();
  switchModule('dashboard');
}

function renderVisitsHistory() {
  const container = document.getElementById('visits-history-list');
  container.innerHTML = '';
  
  if (state.visits.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted); font-size:13px;">No college visits logged yet.</div>';
    return;
  }

  state.visits.forEach(visit => {
    const row = document.createElement('div');
    row.style.background = 'var(--bg-tertiary)';
    row.style.border = '1px solid var(--glass-border)';
    row.style.padding = '12px 16px';
    row.style.borderRadius = 'var(--border-radius-lg)';
    row.style.marginBottom = '10px';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';

    row.innerHTML = `
      <div>
        <h4 style="font-size:14px; margin-bottom:4px;">${visit.college}</h4>
        <p style="font-size:11px; color:var(--text-muted);">
          <i class="fas fa-calendar-alt"></i> ${visit.date} at ${visit.time} | 
          <i class="fas fa-user"></i> ${visit.contactPerson || 'No contact'}
        </p>
      </div>
      <div>
        <span class="activity-badge ${visit.completed ? 'completed' : 'pending'}">
          ${visit.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
    `;
    container.appendChild(row);
  });
}

// --- Schedule Follow-up Controller ---
function setupFollowupAutocomplete() {
  const select = document.getElementById('af-lead-select');
  select.innerHTML = '<option value="">-- Choose Lead --</option>';
  
  state.leads.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l.id;
    opt.innerText = `${l.name} (${l.phone})`;
    select.appendChild(opt);
  });

  // Pre-fill phone on select
  select.addEventListener('change', () => {
    const leadId = select.value;
    const phoneInput = document.getElementById('af-phone');
    if (leadId) {
      const lead = state.leads.find(l => l.id === leadId);
      if (lead) {
        phoneInput.value = lead.phone;
      }
    } else {
      phoneInput.value = '';
    }
  });
}

function handleAddFollowup(e) {
  e.preventDefault();
  const leadId = document.getElementById('af-lead-select').value;
  const phone = document.getElementById('af-phone').value.trim();
  const date = document.getElementById('af-date').value;
  const time = document.getElementById('af-time').value;
  const notes = document.getElementById('af-notes').value.trim();
  const priority = document.querySelector('input[name="af-priority"]:checked').value;

  if (!leadId || !date || !time) {
    showToast('Lead, Date and Time are required', 'error');
    return;
  }

  const lead = state.leads.find(l => l.id === leadId);
  const leadName = lead ? lead.name : 'Unknown';

  const newAct = {
    id: "act_" + Date.now(),
    type: "Follow-up",
    title: `Follow-up: ${leadName}`,
    time: `${date}, ${time}`,
    status: "Upcoming",
    notes: `Priority: ${priority}. Notes: ${notes}`
  };

  state.updateActivities([newAct, ...state.activities]);
  showToast(`Follow-up scheduled for ${leadName}`, 'success');
  document.getElementById('add-followup-form').reset();
  switchModule('dashboard');
}

function renderFollowupsList() {
  const container = document.getElementById('followups-upcoming-list');
  container.innerHTML = '';
  
  const followups = state.activities.filter(a => a.type === 'Follow-up');
  if (followups.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted); font-size:13px;">No follow-ups scheduled.</div>';
    return;
  }

  followups.forEach(f => {
    const row = document.createElement('div');
    row.style.background = 'var(--bg-tertiary)';
    row.style.border = '1px solid var(--glass-border)';
    row.style.padding = '12px 16px';
    row.style.borderRadius = 'var(--border-radius-lg)';
    row.style.marginBottom = '10px';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';

    row.innerHTML = `
      <div>
        <h4 style="font-size:14px; margin-bottom:4px;">${f.title}</h4>
        <p style="font-size:11px; color:var(--text-muted);">${f.time}</p>
        <p style="font-size:12px; margin-top:4px;">${f.notes}</p>
      </div>
      <div>
        <span class="activity-badge ${f.status.toLowerCase()}">${f.status}</span>
      </div>
    `;
    container.appendChild(row);
  });
}

// --- Tasks Module Controller ---
function renderTasks() {
  const container = document.getElementById('tasks-board-list');
  container.innerHTML = '';

  if (state.tasks.length === 0) {
    container.innerHTML = '<div class="text-center text-muted" style="padding: 20px;">No CRM tasks logged.</div>';
    return;
  }

  state.tasks.forEach(task => {
    const item = document.createElement('div');
    item.style.background = 'var(--glass-bg)';
    item.style.border = '1px solid var(--glass-border)';
    item.style.padding = '16px';
    item.style.borderRadius = 'var(--border-radius-lg)';
    item.style.marginBottom = '12px';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'center';
    
    let priColor = '#6b7280';
    if (task.priority === 'HIGH') priColor = '#ef4444';
    if (task.priority === 'MEDIUM') priColor = '#f59e0b';
    if (task.priority === 'LOW') priColor = '#3b82f6';

    item.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px;">
        <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''} style="width:18px; height:18px; cursor:pointer;">
        <div>
          <span style="font-size:14px; font-weight:600; text-decoration: ${task.completed ? 'line-through' : 'none'}; color: ${task.completed ? 'var(--text-muted)' : 'var(--text-main)'};">
            ${task.title}
          </span>
          <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">
            Due: ${task.due} | <span style="color:${priColor}; font-weight:700;">${task.priority}</span>
          </div>
        </div>
      </div>
      <button class="lead-icon-btn task-delete-btn" data-id="${task.id}" style="color:#ef4444; border-color:transparent; background:transparent;">
        <i class="fas fa-trash-alt"></i>
      </button>
    `;

    // Complete Bind
    item.querySelector('.task-checkbox').addEventListener('change', (e) => {
      const tasks = state.tasks.map(t => {
        if (t.id === task.id) {
          return { ...t, completed: e.target.checked };
        }
        return t;
      });
      state.updateTasks(tasks);
      showToast(e.target.checked ? 'Task marked completed' : 'Task opened', 'success');
      renderTasks();
      calculateMetrics();
    });

    // Delete Bind
    item.querySelector('.task-delete-btn').addEventListener('click', () => {
      const tasks = state.tasks.filter(t => t.id !== task.id);
      state.updateTasks(tasks);
      showToast('Task deleted', 'info');
      renderTasks();
      calculateMetrics();
    });

    container.appendChild(item);
  });
}

function handleAddTask(e) {
  e.preventDefault();
  const title = document.getElementById('task-title-input').value.trim();
  const due = document.getElementById('task-due-input').value;
  const priority = document.querySelector('input[name="task-priority"]:checked').value;

  if (!title || !due) {
    showToast('Title and Due Date are required', 'error');
    return;
  }

  const newTask = {
    id: "task_" + Date.now(),
    title,
    due,
    priority,
    completed: false
  };

  state.updateTasks([...state.tasks, newTask]);
  showToast(`Task "${title}" created`, 'success');
  document.getElementById('add-task-form').reset();
  renderTasks();
  calculateMetrics();
}

// --- WhatsApp Campaign Module ---
function initializeWhatsAppCampaign(preselectedLeadId = null) {
  // Pre-fill campaign message template
  const template = `Hi {Name}! 👋\n\nWe're offering a FREE demo class for our *Python & Data Analytics* course this weekend.\n\nInterested? Reply YES to confirm your spot! 🎯`;
  const textInput = document.getElementById('campaign-msg-template');
  
  if (!textInput.value) {
    textInput.value = template;
  }

  // Render checkbox list
  renderCampaignLeads('All', preselectedLeadId);
  updateWhatsAppPreview();
}

function renderCampaignLeads(filterVal, preselectedLeadId = null) {
  const container = document.getElementById('whatsapp-leads-container');
  container.innerHTML = '';

  let list = state.leads;
  if (filterVal === 'Hot Only') {
    list = state.leads.filter(l => l.hot);
  } else if (filterVal === 'Contacted') {
    list = state.leads.filter(l => l.status === 'Contacted');
  }

  if (list.length === 0) {
    container.innerHTML = '<div style="color:var(--text-muted); font-size:12px; padding: 10px;">No leads found in this group.</div>';
    updateCampaignCount();
    return;
  }

  list.forEach(lead => {
    const item = document.createElement('div');
    item.className = 'campaign-lead-item';
    
    // Check if preselected
    const isChecked = preselectedLeadId === lead.id;

    item.innerHTML = `
      <div class="campaign-lead-info">
        <input type="checkbox" class="campaign-lead-checkbox" data-id="${lead.id}" data-name="${lead.name}" ${isChecked ? 'checked' : ''}>
        <div>
          <strong>${lead.name}</strong>
          <span style="font-size:10px; color:var(--text-muted); margin-left:6px;">${lead.phone}</span>
        </div>
      </div>
      <span class="status-badge ${lead.status.toLowerCase().replace(' ', '-')}">${lead.status}</span>
    `;

    item.querySelector('.campaign-lead-checkbox').addEventListener('change', () => {
      updateCampaignCount();
      updateWhatsAppPreview();
    });

    container.appendChild(item);
  });

  updateCampaignCount();
  updateWhatsAppPreview();
}

function updateCampaignCount() {
  const checks = document.querySelectorAll('.campaign-lead-checkbox:checked');
  const count = checks.length;
  document.getElementById('whatsapp-send-btn').innerText = `Send to ${count} Leads`;
  
  // Update checkbox select all state
  const totalChecks = document.querySelectorAll('.campaign-lead-checkbox');
  const selectAll = document.getElementById('campaign-select-all');
  if (count === 0) {
    selectAll.checked = false;
    selectAll.indeterminate = false;
  } else if (count === totalChecks.length) {
    selectAll.checked = true;
    selectAll.indeterminate = false;
  } else {
    selectAll.checked = false;
    selectAll.indeterminate = true;
  }
}

function updateWhatsAppPreview() {
  const previewBubble = document.getElementById('whatsapp-preview-bubble');
  const template = document.getElementById('campaign-msg-template').value;
  
  // Find name of first checked lead, or default to Priya Sharma
  let name = 'Priya Sharma';
  const firstChecked = document.querySelector('.campaign-lead-checkbox:checked');
  if (firstChecked) {
    name = firstChecked.getAttribute('data-name');
  }

  // Parse formatting like Bold (*text*) to HTML <strong>
  let formatted = template.replace(/\{Name\}/g, name);
  formatted = formatted.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  previewBubble.innerHTML = `
    ${formatted}
    <div class="whatsapp-bubble-time">${time}</div>
  `;
}

function handleSendWhatsAppCampaign() {
  const checks = document.querySelectorAll('.campaign-lead-checkbox:checked');
  if (checks.length === 0) {
    showToast('Please select at least one lead to send campaign', 'error');
    return;
  }

  const ids = Array.from(checks).map(c => c.getAttribute('data-id'));
  
  // Simulated overlay process trigger
  const sendBtn = document.getElementById('whatsapp-send-btn');
  const oldText = sendBtn.innerText;
  sendBtn.disabled = true;
  sendBtn.innerText = "Dispatching campaign...";
  
  let sentCount = 0;
  
  function sendNext() {
    if (sentCount < ids.length) {
      const lead = state.leads.find(l => l.id === ids[sentCount]);
      const leadName = lead ? lead.name : 'Candidate';
      
      // Log broadcast activity
      const newAct = {
        id: "act_" + Date.now() + "_" + sentCount,
        type: "Call",
        title: `WhatsApp sent to ${leadName}`,
        time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "Completed",
        notes: `Campaign Template Broadcast dispatched successfully.`
      };
      
      state.updateActivities([newAct, ...state.activities]);
      sentCount++;
      
      showToast(`Sent to ${leadName} (${sentCount}/${ids.length})`, 'success');
      setTimeout(sendNext, 800); // 800ms spacing animation
    } else {
      // Done
      sendBtn.disabled = false;
      sendBtn.innerText = oldText;
      showToast(`Campaign broadcast completed successfully for ${ids.length} leads.`, 'success');
      switchModule('dashboard');
    }
  }
  
  sendNext();
}

// --- Admin Panel Controller ---
function renderAdminPanel() {
  calculateAdminMetrics();
  
  const container = document.getElementById('admin-users-tbody');
  container.innerHTML = '';

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

    // Toggle Active Status
    tr.querySelector('.user-status-pill').addEventListener('click', () => {
      const staffList = state.staff.map(s => {
        if (s.id === user.id) {
          const nextStatus = s.status === 'active' ? 'inactive' : 'active';
          showToast(`User ${s.name} marked ${nextStatus}`, 'success');
          return { ...s, status: nextStatus };
        }
        return s;
      });
      state.updateStaff(staffList);
      renderAdminPanel();
    });

    // Delete Staff member
    tr.querySelector('.action-admin-delete').addEventListener('click', () => {
      if (confirm(`Are you sure you want to remove staff member: ${user.name}?`)) {
        const staffList = state.staff.filter(s => s.id !== user.id);
        state.updateStaff(staffList);
        showToast(`Removed staff member ${user.name}`, 'info');
        renderAdminPanel();
      }
    });

    container.appendChild(tr);
  });
  
  // Bind Add User trigger modal
  const addBtn = document.getElementById('admin-add-user-btn');
  // Re-bind
  const newAddBtn = addBtn.cloneNode(true);
  addBtn.replaceWith(newAddBtn);
  
  newAddBtn.addEventListener('click', () => {
    document.getElementById('admin-modal').classList.add('active');
  });
}

function calculateAdminMetrics() {
  const total = state.staff.length;
  const active = state.staff.filter(s => s.status === 'active').length;
  const offline = total - active;

  document.getElementById('admin-metric-total').innerText = total;
  document.getElementById('admin-metric-active').innerText = active;
  document.getElementById('admin-metric-offline').innerText = offline;
}

function handleAddUser(e) {
  e.preventDefault();
  const name = document.getElementById('au-name').value.trim();
  const email = document.getElementById('au-email').value.trim();
  const role = document.getElementById('au-role').value;
  const status = document.getElementById('au-status').value;

  if (!name || !email || !role) {
    showToast('Name, Email and Role are required', 'error');
    return;
  }

  const newUser = {
    id: "staff_" + Date.now(),
    name,
    email,
    role,
    status
  };

  state.updateStaff([...state.staff, newUser]);
  showToast(`Staff member "${name}" registered successfully.`, 'success');
  
  // Reset form and close modal
  document.getElementById('admin-add-user-form').reset();
  document.getElementById('admin-modal').classList.remove('active');
  renderAdminPanel();
}
