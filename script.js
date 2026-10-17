(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const progress = document.querySelector('.reading-progress');
  const mobile = window.matchMedia('(max-width: 1100px)');
  function setMenu(open, restoreFocus = false) {
    if (!toggle || !nav) return;
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    if (restoreFocus) toggle.focus();
  }
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.header-inner')) setMenu(false);
  });
  header?.addEventListener('focusout', event => {
    if (!header.contains(event.relatedTarget)) setMenu(false);
  });
  mobile.addEventListener('change', () => setMenu(false));
  let scheduled = false;
  function updateScroll() {
    const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    if (progress) progress.style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / max))})`;
    header?.classList.toggle('is-scrolled', window.scrollY > 28);
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { requestAnimationFrame(updateScroll); scheduled = true; }
  }, { passive: true });
  window.addEventListener('resize', updateScroll);
  updateScroll();
})();
