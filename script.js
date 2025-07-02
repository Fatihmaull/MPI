// script.js

// Fade in animation on load
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-fade-in');
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      el.style.opacity = 1;
    }, 100);
  });
});

// Smooth scroll for internal links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
