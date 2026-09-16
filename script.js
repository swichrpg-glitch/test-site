const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project, .service, .intro-grid, .about-grid, .contact-row').forEach(el => reveal.observe(el));

const style = document.createElement('style');
style.textContent = `
.project,.service,.intro-grid,.about-grid,.contact-row{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease}.is-visible{opacity:1;transform:none}
`;
document.head.appendChild(style);
