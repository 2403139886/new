const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('is-visible', window.scrollY > 700), { passive: true });
