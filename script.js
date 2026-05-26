// Helper Eye — script.js

function setLang(lang) {
  if (lang === 'zh') {
    document.body.classList.add('lang-zh');
  } else {
    document.body.classList.remove('lang-zh');
  }
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
  localStorage.setItem('he-lang', lang);
}

// Restore saved language preference on load
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('he-lang');
  if (saved === 'zh') setLang('zh');
});
