// Helper Eye — script.js

/* ── LANGUAGE SWITCHER ── */
function setLang(lang) {
  if (lang === 'zh') {
    document.body.classList.add('lang-zh');
  } else {
    document.body.classList.remove('lang-zh');
  }
  // Desktop buttons
  const btnEn = document.getElementById('btn-en');
  const btnZh = document.getElementById('btn-zh');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnZh) btnZh.classList.toggle('active', lang === 'zh');
  // Mobile buttons inside menu
  const mobEn = document.getElementById('mob-btn-en');
  const mobZh = document.getElementById('mob-btn-zh');
  if (mobEn) mobEn.classList.toggle('active', lang === 'en');
  if (mobZh) mobZh.classList.toggle('active', lang === 'zh');

  localStorage.setItem('he-lang', lang);
}

/* ── HAMBURGER MENU ── */
function toggleMenu() {
  const menu = document.getElementById('nav-links');
  const btn = document.getElementById('hamburger');
  const overlay = document.getElementById('nav-overlay');
  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    closeMenu();
  } else {
    menu.classList.add('open');
    btn.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMenu() {
  const menu = document.getElementById('nav-links');
  const btn = document.getElementById('hamburger');
  const overlay = document.getElementById('nav-overlay');
  if (menu) menu.classList.remove('open');
  if (btn) btn.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close menu on resize to desktop
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) closeMenu();
});

/* ── RESTORE SAVED LANGUAGE ── */
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('he-lang');
  if (saved === 'zh') setLang('zh');
});
