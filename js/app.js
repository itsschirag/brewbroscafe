const header = document.getElementById('siteHeader');
const mobileNav = document.getElementById('mobileNav');
const menuToggle = document.getElementById('menuToggle');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => io.observe(el));

const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-panel');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    panels.forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.menu-panel[data-panel="${tab.dataset.tab}"]`).classList.add('active');
  });
});

function closeMobileNav() {
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-label', 'Open menu');
}

menuToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

mobileNav.addEventListener('click', (event) => {
  if (event.target === mobileNav || event.target.closest('a')) closeMobileNav();
});

document.getElementById('yr').textContent = new Date().getFullYear();
