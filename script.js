(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const progress = document.querySelector('.reading-progress');
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

  function setMenu(open) {
    menuToggle.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', event => {
    if (nav.classList.contains('is-open') && !event.target.closest('.header-inner')) setMenu(false);
  });

  let scheduled = false;
  function updateScroll() {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    progress.style.transform = `scaleX(${Math.min(1, window.scrollY / maxScroll)})`;
    header.classList.toggle('is-scrolled', window.scrollY > 28);
    const scrollPoint = window.scrollY + window.innerHeight * .32;
    let active = '';
    sections.forEach(section => { if (section.offsetTop <= scrollPoint) active = section.id; });
    navLinks.forEach(link => {
      const selected = link.getAttribute('href') === `#${active}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { requestAnimationFrame(updateScroll); scheduled = true; } }, { passive: true });
  window.addEventListener('resize', updateScroll);
  updateScroll();

  const elements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } });
    }, { threshold: .06, rootMargin: '0px 0px 45px 0px' });
    elements.forEach(el => { el.classList.add('reveal-ready'); observer.observe(el); });
  }
})();
