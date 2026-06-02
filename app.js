/* ============================================
   HRM Notes Portal — App Logic v2 (Ultra)
   Made by Abdul Wasay
   ============================================ */

// =============================================
// FILE CATALOG
// =============================================
const FILES = [
  { id: 1,  title: "Chapter 3 — Complete Notes (Urdu)",          filename: "Chapter_3_Complete_Notes_Urdu.pdf",                     type: "pdf",   size: "23.8 KB",  category: "Chapter 3" },
  { id: 2,  title: "Chapter 4 — Global HRM Notes",               filename: "Chapter4_Global_HRM_Notes.pdf",                        type: "pdf",   size: "18.8 KB",  category: "Chapter 4" },
  { id: 3,  title: "Chapter 5 — Diversity & EEO HR Notes",       filename: "Chapter5_Diversity_EEO_HR_Notes.pdf",                  type: "pdf",   size: "17.0 KB",  category: "Chapter 5" },
  { id: 4,  title: "Chapter 6 — Implementing Equal Employment",  filename: "chap 6 Implementing Equal Employment.pdf",             type: "pdf",   size: "10.9 KB",  category: "Chapter 6" },
  { id: 5,  title: "Chapter 7 — Job Analysis HR Notes",          filename: "Chapter7_Job_Analysis_HR_Notes.pdf",                   type: "pdf",   size: "11.7 KB",  category: "Chapter 7" },
  { id: 6,  title: "HRM Handwritten Notes — Page 1",             filename: "WhatsApp Image 2026-04-16 at 10.17.20 AM.jpeg",        type: "image", size: "23.3 KB",  category: "Handwritten" },
  { id: 7,  title: "HRM Handwritten Notes — Page 2",             filename: "WhatsApp Image 2026-04-16 at 10.17.21 AM.jpeg",        type: "image", size: "25.7 KB",  category: "Handwritten" },
  { id: 8,  title: "HRM Handwritten Notes — Page 3",             filename: "WhatsApp Image 2026-04-16 at 10.17.21 AM (1).jpeg",    type: "image", size: "44.1 KB",  category: "Handwritten" },
  { id: 9,  title: "HRM Handwritten Notes — Page 4",             filename: "WhatsApp Image 2026-04-16 at 10.17.22 AM.jpeg",        type: "image", size: "34.1 KB",  category: "Handwritten" },
  { id: 10, title: "HRM Handwritten Notes — Page 5",             filename: "WhatsApp Image 2026-04-16 at 10.17.22 AM (1).jpeg",    type: "image", size: "29.3 KB",  category: "Handwritten" },
  { id: 11, title: "HRM Handwritten Notes — Page 6",             filename: "WhatsApp Image 2026-04-16 at 10.17.23 AM.jpeg",        type: "image", size: "50.6 KB",  category: "Handwritten" },
  { id: 12, title: "HRM Handwritten Notes — Page 7",             filename: "WhatsApp Image 2026-04-16 at 10.17.23 AM (1).jpeg",    type: "image", size: "25.5 KB",  category: "Handwritten" },
  { id: 13, title: "HRM Handwritten Notes — Page 8",             filename: "WhatsApp Image 2026-04-16 at 10.17.24 AM.jpeg",        type: "image", size: "32.0 KB",  category: "Handwritten" },
  { id: 14, title: "HRM Handwritten Notes — Page 9",             filename: "WhatsApp Image 2026-04-16 at 10.17.24 AM (1).jpeg",    type: "image", size: "27.9 KB",  category: "Handwritten" },
  { id: 15, title: "HRM Handwritten Notes — Page 10",            filename: "WhatsApp Image 2026-04-16 at 10.17.24 AM (2).jpeg",    type: "image", size: "92.6 KB",  category: "Handwritten" },
  { id: 16, title: "HRM Handwritten Notes — Page 11",            filename: "WhatsApp Image 2026-04-16 at 10.17.25 AM.jpeg",        type: "image", size: "33.3 KB",  category: "Handwritten" },
  { id: 17, title: "HRM Handwritten Notes — Page 12",            filename: "WhatsApp Image 2026-04-16 at 10.17.25 AM (1).jpeg",    type: "image", size: "23.4 KB",  category: "Handwritten" },
  { id: 18, title: "HRM Handwritten Notes — Page 13",            filename: "WhatsApp Image 2026-04-16 at 10.17.26 AM.jpeg",        type: "image", size: "35.6 KB",  category: "Handwritten" },
  { id: 19, title: "HRM Handwritten Notes — Page 14",            filename: "WhatsApp Image 2026-04-16 at 10.17.26 AM (1).jpeg",    type: "image", size: "87.0 KB",  category: "Handwritten" },
  { id: 20, title: "HRM Handwritten Notes — Page 15",            filename: "WhatsApp Image 2026-04-16 at 10.17.26 AM (2).jpeg",    type: "image", size: "60.3 KB",  category: "Handwritten" },
  { id: 21, title: "HRM Handwritten Notes — Page 16",            filename: "WhatsApp Image 2026-04-16 at 10.17.27 AM.jpeg",        type: "image", size: "60.8 KB",  category: "Handwritten" },
  { id: 22, title: "HRM Handwritten Notes — Page 17",            filename: "WhatsApp Image 2026-04-16 at 10.17.27 AM (1).jpeg",    type: "image", size: "121.6 KB", category: "Handwritten" },
  { id: 23, title: "HRM Handwritten Notes — Page 18",            filename: "WhatsApp Image 2026-04-16 at 10.17.27 AM (2).jpeg",    type: "image", size: "70.4 KB",  category: "Handwritten" },
  { id: 24, title: "HRM Handwritten Notes — Page 19",            filename: "WhatsApp Image 2026-04-16 at 10.17.28 AM.jpeg",        type: "image", size: "138.5 KB", category: "Handwritten" },
  { id: 25, title: "HRM Handwritten Notes — Page 20",            filename: "WhatsApp Image 2026-04-16 at 10.17.28 AM (1).jpeg",    type: "image", size: "57.1 KB",  category: "Handwritten" },
  { id: 26, title: "HRM Handwritten Notes — Page 21",            filename: "WhatsApp Image 2026-04-16 at 10.17.29 AM.jpeg",        type: "image", size: "101.4 KB", category: "Handwritten" }
];

// =============================================
// DOM REFERENCES
// =============================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const grid           = $("#files-grid");
const searchInput    = $("#search-input");
const searchClear    = $("#search-clear");
const filterTabs     = $$(".filter-tab");
const resultsInfo    = $("#results-info");
const lightbox       = $("#lightbox");
const lightboxTitle  = $("#lightbox-title");
const lightboxBody   = $("#lightbox-body");
const lightboxClose  = $("#lightbox-close");
const lightboxDl     = $("#lightbox-download");
const lightboxPrev   = $("#lightbox-prev");
const lightboxNext   = $("#lightbox-next");
const lightboxDot    = $("#lightbox-type-dot");
const lightboxCounter= $("#lightbox-counter");
const scrollProgress = $("#scroll-progress");
const scrollTopBtn   = $("#scroll-top");
const toolbar        = $("#toolbar");
const loadingScreen  = $("#loading-screen");

// =============================================
// STATE
// =============================================
let currentFilter = "all";
let currentSearch = "";
let currentLightboxIdx = -1;
let filteredFiles = [...FILES];

// =============================================
// HELPERS
// =============================================
const enc = (name) => encodeURIComponent(name);

function getFiltered() {
  return FILES.filter(f => {
    const filt = currentFilter === "all" || f.type === currentFilter;
    const srch = currentSearch === "" ||
      f.title.toLowerCase().includes(currentSearch) ||
      f.filename.toLowerCase().includes(currentSearch) ||
      f.category.toLowerCase().includes(currentSearch);
    return filt && srch;
  });
}

// =============================================
// PARTICLES (Canvas Starfield)
// =============================================
function initParticles() {
  const canvas = $("#particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const PARTICLE_COUNT = 80;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.15,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      p.pulse += 0.015;

      // wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(220, 30%, 80%, ${alpha})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `hsla(265, 60%, 65%, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener("resize", () => { resize(); createParticles(); });
}

// =============================================
// ANIMATED COUNTER
// =============================================
function animateCounter(el, target, duration = 1200) {
  let start = 0;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// =============================================
// SCROLL OBSERVER FOR CARDS
// =============================================
function setupScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger the animation
        const delay = parseInt(entry.target.dataset.index || 0) * 60;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, Math.min(delay, 500));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  return observer;
}

const cardObserver = setupScrollObserver();

// Stats observer
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => {
        entry.target.classList.add("visible");
        const numEl = entry.target.querySelector(".stat-card__number");
        if (numEl) {
          animateCounter(numEl, parseInt(numEl.dataset.count));
        }
      }, delay);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// =============================================
// RENDER CARDS
// =============================================
function renderCards() {
  filteredFiles = getFiltered();
  grid.innerHTML = "";

  // Update results info
  if (currentSearch) {
    resultsInfo.innerHTML = `Showing <span class="highlight">${filteredFiles.length}</span> result${filteredFiles.length !== 1 ? 's' : ''} for "<span class="highlight">${currentSearch}</span>"`;
  } else {
    resultsInfo.innerHTML = `Showing <span class="highlight">${filteredFiles.length}</span> file${filteredFiles.length !== 1 ? 's' : ''}`;
  }

  if (filteredFiles.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">🔍</div>
        <div class="empty-state__title">No files found</div>
        <p class="empty-state__text">Try adjusting your search or switching the filter tab.</p>
      </div>`;
    return;
  }

  filteredFiles.forEach((file, idx) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View ${file.title}`);
    card.dataset.index = idx;

    const previewInner = file.type === "pdf"
      ? `<div class="pdf-preview">
           <div class="pdf-preview__icon">📄</div>
           <div class="pdf-preview__label">PDF Document</div>
         </div>`
      : `<img src="${enc(file.filename)}" alt="${file.title}" loading="lazy" />`;

    card.innerHTML = `
      <div class="file-card__preview">
        ${previewInner}
        <span class="file-card__badge ${file.type}">${file.type === "pdf" ? "PDF" : "IMAGE"}</span>
        <div class="file-card__overlay">
          <button class="file-card__overlay-btn" data-action="view" data-idx="${idx}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Quick View
          </button>
        </div>
      </div>
      <div class="file-card__body">
        <div class="file-card__title">${file.title}</div>
        <div class="file-card__footer">
          <span class="file-card__size">${file.size}</span>
          <div class="file-card__actions">
            <button class="file-card__btn" data-action="download" data-file="${enc(file.filename)}" data-name="${file.filename}" title="Download" aria-label="Download ${file.title}">↓</button>
            <button class="file-card__btn" data-action="view" data-idx="${idx}" title="View" aria-label="View ${file.title}">👁</button>
          </div>
        </div>
      </div>`;

    // Click to open lightbox
    card.addEventListener("click", (e) => {
      if (e.target.closest('[data-action="download"]')) return;
      openLightbox(idx);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(idx); }
    });

    grid.appendChild(card);
    cardObserver.observe(card);
  });

  // Download buttons
  grid.querySelectorAll('[data-action="download"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      downloadFile(btn.dataset.name);
    });
  });
}

// =============================================
// COUNTS
// =============================================
function updateCounts() {
  const all = FILES.length;
  const pdfs = FILES.filter(f => f.type === "pdf").length;
  const imgs = FILES.filter(f => f.type === "image").length;
  $("#count-all").textContent = all;
  $("#count-pdf").textContent = pdfs;
  $("#count-image").textContent = imgs;
}

// =============================================
// SEARCH
// =============================================
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value.toLowerCase().trim();
  searchClear.classList.toggle("active", currentSearch.length > 0);
  renderCards();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  searchClear.classList.remove("active");
  searchInput.focus();
  renderCards();
});

// =============================================
// FILTER TABS
// =============================================
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    currentFilter = tab.dataset.filter;
    renderCards();
  });
});

// =============================================
// LIGHTBOX
// =============================================
function openLightbox(idx) {
  currentLightboxIdx = idx;
  const file = filteredFiles[idx];
  if (!file) return;

  lightboxTitle.textContent = file.title;
  lightboxDot.className = `lightbox__type-dot ${file.type}`;
  lightboxCounter.textContent = `${idx + 1} / ${filteredFiles.length}`;

  if (file.type === "image") {
    lightboxBody.innerHTML = `<img src="${enc(file.filename)}" alt="${file.title}" />`;
  } else {
    lightboxBody.innerHTML = `<iframe src="${enc(file.filename)}" title="${file.title}"></iframe>`;
  }

  lightboxPrev.style.display = idx > 0 ? "flex" : "none";
  lightboxNext.style.display = idx < filteredFiles.length - 1 ? "flex" : "none";

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
  lightboxBody.innerHTML = "";
  currentLightboxIdx = -1;
}

function navLightbox(dir) {
  const next = currentLightboxIdx + dir;
  if (next >= 0 && next < filteredFiles.length) openLightbox(next);
}

function downloadFile(name) {
  const a = document.createElement("a");
  a.href = enc(name);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => navLightbox(-1));
lightboxNext.addEventListener("click", () => navLightbox(1));
lightboxDl.addEventListener("click", () => {
  if (currentLightboxIdx >= 0) downloadFile(filteredFiles[currentLightboxIdx].filename);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lightboxBody) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navLightbox(-1);
  if (e.key === "ArrowRight") navLightbox(1);
});

// =============================================
// SCROLL PROGRESS BAR
// =============================================
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + "%";
}

// =============================================
// STICKY TOOLBAR BORDER
// =============================================
function updateToolbar() {
  toolbar.classList.toggle("scrolled", window.scrollY > 200);
}

// =============================================
// SCROLL TO TOP
// =============================================
function updateScrollTop() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 500);
}

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =============================================
// SCROLL EVENT (THROTTLED)
// =============================================
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollProgress();
      updateToolbar();
      updateScrollTop();
      ticking = false;
    });
    ticking = true;
  }
});

// =============================================
// LOADING SCREEN
// =============================================
function hideLoading() {
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 800);
}

// =============================================
// INIT
// =============================================
function init() {
  updateCounts();
  renderCards();
  initParticles();

  // Observe stat cards
  $$(".stat-card").forEach(card => statsObserver.observe(card));

  // Hide loading
  hideLoading();
}

// Run on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
