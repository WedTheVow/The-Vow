/* ========================================
   THE VOW — Interactions
   ======================================== */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade-in on scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to key elements
document.querySelectorAll('.service-card, .portfolio__item, .about__content, .contact__title').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Mobile menu toggle (basic)
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

if (toggle) {
  toggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.top = '100%';
    menu.style.left = '0';
    menu.style.right = '0';
    menu.style.background = 'var(--soft-white)';
    menu.style.padding = 'var(--space-md)';
  });
}

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(247, 248, 244, 0.95)';
  } else {
    nav.style.background = 'rgba(247, 248, 244, 0.85)';
  }
});
