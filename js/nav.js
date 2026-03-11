/* ═══════════════════════════════════════════════════════════
   IB DP Design Technology — Navigation & UI Scripts
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── MOBILE MENU ─────────────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.textContent = isOpen ? '✕' : '☰';
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.textContent = '☰';
      }
    });
  }

  /* ── DROPDOWN CLICK TOGGLE ───────────────────────────────── */
  document.querySelectorAll('.nav-label').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const item = btn.closest('.nav-item');
      const isOpen = item.classList.contains('open');
      // Close all dropdowns first
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
      // Toggle this one
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── CLOSE DROPDOWN ON OUTSIDE CLICK ────────────────────── */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
    }
  });

  /* ── CLOSE DROPDOWN WHEN A LINK INSIDE IS CLICKED ───────── */
  document.querySelectorAll('.dropdown a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
    });
  });

  /* ── KEYBOARD NAV FOR DROPDOWNS ──────────────────────────── */
  document.querySelectorAll('.nav-label').forEach(function (btn) {
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        btn.closest('.nav-item').classList.remove('open');
        btn.blur();
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const dropdown = btn.closest('.nav-item').querySelector('.dropdown');
        if (dropdown) {
          const firstLink = dropdown.querySelector('a');
          if (firstLink) firstLink.focus();
        }
      }
    });
  });

  /* ── ACTIVE SIDEBAR LINK (topic pages) ───────────────────── */
  const sidebarLinks = document.querySelectorAll('.sidebar nav a');
  if (sidebarLinks.length > 0) {
    const sections = Array.from(sidebarLinks)
      .map(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          return document.querySelector(href);
        }
        return null;
      })
      .filter(Boolean);

    function onScroll() {
      let current = null;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) current = section;
      });
      sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === '#' + current.id) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── SMOOTH SCROLL OFFSET for sticky header ──────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 88;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── BACK TO TOP on logo click ───────────────────────────── */
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle && siteTitle.getAttribute('href') === '../index.html') {
    // on topic pages, just navigate — no override needed
  }

});
