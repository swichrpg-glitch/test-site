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

/* Services — editorial list */
.service-list{position:relative;overflow:hidden}
.service{position:relative;grid-template-columns:72px minmax(280px,1.1fr) minmax(240px,.7fr) 58px;gap:28px;padding:38px 0;transition:padding .45s cubic-bezier(.2,.7,.2,1),background .45s ease}
.service:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#d6ff36;transform:scaleY(0);transform-origin:center;transition:transform .4s cubic-bezier(.2,.7,.2,1)}
.service:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(214,255,54,.11),transparent 55%);opacity:0;pointer-events:none;transition:opacity .45s ease}
.service:hover{padding-left:24px;padding-right:18px;background:transparent}
.service:hover:before{transform:scaleY(1)}
.service:hover:after{opacity:1}
.service>span,.service h3,.service p,.service b{position:relative;z-index:1}
.service>span{font-size:11px;letter-spacing:.14em;font-weight:800;opacity:.42;align-self:start;padding-top:8px;transition:color .35s ease,opacity .35s ease}
.service:hover>span{color:#111;opacity:1}
.service h3{font-size:clamp(30px,4.2vw,64px);line-height:.95;letter-spacing:-.06em;margin:0;transition:transform .45s cubic-bezier(.2,.7,.2,1)}
.service:hover h3{transform:translateX(8px)}
.service p{font-size:14px;line-height:1.55;margin:0;max-width:390px;opacity:.58;transition:opacity .35s ease}
.service:hover p{opacity:.9}
.service b{width:48px;height:48px;border:1px solid rgba(17,17,17,.65);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:500;transition:transform .45s cubic-bezier(.2,.7,.2,1),background .35s ease,color .35s ease,border-color .35s ease}
.service:hover b{transform:rotate(45deg);background:#111;color:#fff;border-color:#111}
.service:nth-child(2):before{background:#b9a6ff}
.service:nth-child(3):before{background:#d6ff36}
.service:nth-child(4):before{background:#b9a6ff}

@media(max-width:800px){
.service{grid-template-columns:35px 1fr 48px;gap:12px;padding:28px 0}
.service p{grid-column:2;max-width:none}
.service b{grid-column:3;grid-row:1;width:40px;height:40px}
.service:hover{padding-left:10px;padding-right:6px}
.service h3{font-size:30px}
.service p{font-size:12px}
}
`;
document.head.appendChild(style);
