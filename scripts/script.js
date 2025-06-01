const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-navigation');
window.addEventListener('DOMContentLoaded', ()=>{
    requestAnimationFrame(() => {
        nav.style.transition = '500ms ease-in-out';
    });
});

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
  toggle.classList.toggle('open');
  nav.classList.toggle('open');
});