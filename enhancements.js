(() => {
  const work = document.querySelector('#work');
  const services = document.querySelector('#services');
  if (!work || !services) return;

  const benefits = document.createElement('section');
  benefits.className = 'benefits section';
  benefits.innerHTML = `
    <div class="benefits-head">
      <p class="section-label">03 / Что получает клиент</p>
      <p class="benefits-note">Не просто дизайн — готовый инструмент для задачи</p>
    </div>
    <div class="benefits-grid">
      <div class="benefits-statement">
        <h2>Не набор<br><em>слайдов.</em><br>Решение.</h2>
        <p>Каждый материал собирается вокруг задачи: что нужно объяснить, кому и какое действие должно произойти после просмотра.</p>
      </div>
      <div class="benefit-list">
        <article class="benefit-item" tabindex="0"><span>01</span><div><h3>Понятная структура</h3><p>Информация выстроена так, чтобы её было легко читать и воспринимать.</p><div class="benefit-preview preview-structure"><i></i><i></i><i></i><b></b><b></b></div></div><b class="benefit-arrow">↗</b></article>
        <article class="benefit-item" tabindex="0"><span>02</span><div><h3>Единая визуальная система</h3><p>Типографика, акценты и композиция работают как одно целое.</p><div class="benefit-preview preview-system"><i></i><i></i><i></i><b></b><b></b><b></b></div></div><b class="benefit-arrow">↗</b></article>
        <article class="benefit-item" tabindex="0"><span>03</span><div><h3>Готовность к работе</h3><p>Финальный материал можно сразу отправлять, показывать, публиковать или использовать в работе.</p><div class="benefit-preview preview-ready"><strong>READY</strong><span>FINAL / 100%</span></div></div><b class="benefit-arrow">↗</b></article>
        <article class="benefit-item" tabindex="0"><span>04</span><div><h3>Исходник и порядок</h3><p>Файлы собраны аккуратно, чтобы проект можно было продолжить редактировать.</p><div class="benefit-preview preview-files"><i></i><i></i><i></i><span>EDITABLE</span></div></div><b class="benefit-arrow">↗</b></article>
      </div>
    </div>`;
  services.parentNode.insertBefore(benefits, services);

  const signature = document.createElement('div');
  signature.className = 'site-signature';
  signature.setAttribute('aria-hidden', 'true');
  signature.innerHTML = '<span class="signature-ag">AG</span><span class="signature-line"></span><span class="signature-dot"></span>';
  document.body.appendChild(signature);

  const sectionMarks = document.querySelectorAll('.intro, .work, .services, .about, .contact');
  sectionMarks.forEach((section, index) => {
    const mark = document.createElement('span');
    mark.className = 'section-mark';
    mark.setAttribute('aria-hidden', 'true');
    mark.textContent = ['✦', '↗', 'AG', '02', '∞'][index] || '✦';
    section.appendChild(mark);
  });

  const enhancementStyle = document.createElement('style');
  enhancementStyle.textContent = `
    .benefits{position:relative;background:#111;color:#f4f1eb;overflow:hidden}.benefits .section-label{color:#f4f1eb;opacity:.55}.benefits-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:70px}.benefits-note{font-size:12px;opacity:.45;margin:0}.benefits-grid{display:grid;grid-template-columns:.75fr 1.25fr;gap:8vw;align-items:start}.benefits-statement h2{font-size:clamp(48px,7vw,105px);line-height:.83;letter-spacing:-.075em;margin:0 0 35px}.benefits-statement h2 em{font-family:'Playfair Display',serif;font-weight:500}.benefits-statement p{font-size:14px;line-height:1.6;max-width:350px;opacity:.55;margin:0}.benefit-list{border-top:1px solid rgba(244,241,235,.25)}
    .benefit-item{display:grid;grid-template-columns:44px 1fr 48px;gap:22px;align-items:start;padding:28px 0;border-bottom:1px solid rgba(244,241,235,.25);position:relative;overflow:hidden;cursor:default;transition:padding .45s cubic-bezier(.2,.7,.2,1),background .35s ease}.benefit-item:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:#d6ff36;transform:scaleY(0);transform-origin:center;transition:transform .35s ease}.benefit-item:nth-child(even):before{background:#b9a6ff}.benefit-item:hover,.benefit-item:focus-visible,.benefit-item.is-open{padding:30px 0 30px 18px;background:rgba(214,255,54,.07);outline:none}.benefit-item:hover:before,.benefit-item:focus-visible:before,.benefit-item.is-open:before{transform:scaleY(1)}.benefit-item>span{font-size:10px;letter-spacing:.14em;opacity:.4;padding-top:7px}.benefit-item h3{font-size:clamp(24px,3vw,42px);line-height:.95;letter-spacing:-.05em;margin:0 0 8px;transition:transform .4s ease}.benefit-item:hover h3,.benefit-item:focus-visible h3,.benefit-item.is-open h3{transform:translateX(6px)}.benefit-item p{font-size:13px;line-height:1.5;max-width:500px;opacity:.48;margin:0;transition:opacity .3s ease}.benefit-item:hover p,.benefit-item:focus-visible p,.benefit-item.is-open p{opacity:.78}.benefit-arrow{width:44px;height:44px;border:1px solid rgba(244,241,235,.45);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:400;transition:transform .4s ease,background .3s ease,color .3s ease}.benefit-item:hover .benefit-arrow,.benefit-item:focus-visible .benefit-arrow,.benefit-item.is-open .benefit-arrow{transform:rotate(45deg);background:#d6ff36;color:#111;border-color:#d6ff36}
    .benefit-preview{height:0;max-width:500px;opacity:0;overflow:hidden;margin-top:0;transform:translateY(-8px);transition:height .45s cubic-bezier(.2,.7,.2,1),opacity .3s ease,transform .45s ease,margin-top .45s ease;position:relative}.benefit-item:hover .benefit-preview,.benefit-item:focus-visible .benefit-preview,.benefit-item.is-open .benefit-preview{height:76px;opacity:1;margin-top:22px;transform:none}
    .preview-structure{display:flex;align-items:center;gap:7px;padding:10px 18px;border:1px solid rgba(244,241,235,.22);border-radius:12px;background:rgba(244,241,235,.035)}.preview-structure i{height:4px;width:22%;border-radius:10px;background:#f4f1eb;opacity:.75}.preview-structure i:first-child{width:40%;background:#d6ff36}.preview-structure b{position:absolute;bottom:13px;width:22px;height:18px;border:1px solid rgba(244,241,235,.3);border-radius:4px}.preview-structure b:nth-of-type(1){left:18px}.preview-structure b:nth-of-type(2){left:47px}
    .preview-system{display:flex;align-items:center;gap:10px;padding:10px 16px}.preview-system i{width:48px;height:48px;border-radius:10px;border:1px solid rgba(244,241,235,.25);background:#f4f1eb}.preview-system i:nth-child(2){background:#d6ff36}.preview-system i:nth-child(3){background:#b9a6ff}.preview-system b{position:absolute;right:16px;width:70px;height:5px;border-radius:5px;background:#f4f1eb;opacity:.45}.preview-system b:nth-of-type(1){top:17px}.preview-system b:nth-of-type(2){top:31px;width:52px}.preview-system b:nth-of-type(3){top:45px;width:35px}
    .preview-ready{border:1px solid rgba(244,241,235,.22);border-radius:12px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;background:rgba(214,255,54,.08)}.preview-ready strong{font-size:22px;letter-spacing:.04em;color:#d6ff36}.preview-ready span{font-size:10px;letter-spacing:.12em;opacity:.45}
    .preview-files{display:flex;align-items:center;padding:10px 16px;border:1px solid rgba(244,241,235,.22);border-radius:12px}.preview-files i{width:50px;height:48px;border:1px solid rgba(244,241,235,.3);border-radius:7px;background:#f4f1eb;transform:rotate(-7deg);margin-left:-8px}.preview-files i:nth-child(2){transform:rotate(2deg);background:#b9a6ff}.preview-files i:nth-child(3){transform:rotate(8deg);background:#d6ff36}.preview-files span{margin-left:auto;font-size:10px;letter-spacing:.13em;opacity:.45}
    .button span,.text-link,.all-work span,.header-cta,.project-meta>span,.contact-button span{display:inline-block;transition:transform .35s cubic-bezier(.2,.8,.2,1)}.button:hover span,.text-link:hover,.all-work:hover span,.header-cta:hover,.project-meta:hover>span,.contact-button:hover span{transform:translate(4px,-4px)}.header-cta{transition:transform .3s ease,background .3s ease,color .3s ease}.header-cta:hover{transform:translateY(-3px)}.hero-tags span{transition:transform .3s ease,background .3s ease,color .3s ease}.hero-tags span:hover{transform:translateY(-4px);background:#111;color:#fff}.project-meta{transition:transform .4s ease}.project:hover .project-meta{transform:translateX(5px)}.footer a{transition:transform .3s ease,opacity .3s ease}.footer a:hover{transform:translateY(-3px);opacity:1}.section-label{transition:letter-spacing .4s ease}.section:hover>.section-label{letter-spacing:.18em}.hero-photo img{transition:transform .9s cubic-bezier(.2,.8,.2,1),filter .5s ease}.hero-photo:hover img{transform:scale(1.025)}.photo-sticker{transition:transform .45s cubic-bezier(.2,.8,.2,1)}.hero-photo:hover .photo-sticker{transform:rotate(-4deg) scale(1.04)}.photo-caption{transition:transform .45s ease}.hero-photo:hover .photo-caption{transform:translateX(-6px)}
    .site-signature{position:fixed;right:22px;bottom:22px;z-index:25;display:flex;align-items:center;gap:8px;pointer-events:none;mix-blend-mode:multiply;opacity:.42}.signature-ag{font-size:14px;font-weight:800;letter-spacing:-.08em;transform:rotate(-8deg)}.signature-line{width:28px;height:1px;background:#111}.signature-dot{width:7px;height:7px;border-radius:50%;background:#d6ff36;box-shadow:0 0 0 5px rgba(214,255,54,.15);animation:signaturePulse 2.8s ease-in-out infinite}@keyframes signaturePulse{0%,100%{transform:scale(1);box-shadow:0 0 0 5px rgba(214,255,54,.12)}50%{transform:scale(1.35);box-shadow:0 0 0 9px rgba(214,255,54,0)}}.section-mark{position:absolute;right:3%;top:7%;font-size:clamp(60px,9vw,150px);line-height:1;font-weight:800;letter-spacing:-.1em;opacity:.035;pointer-events:none;transform:rotate(-8deg);user-select:none}.section-mark:nth-child(odd){transform:rotate(7deg)}.benefits .section-mark{color:#f4f1eb}.contact .section-mark{opacity:.07}
    @media(max-width:800px){.benefits-head{display:block;margin-bottom:45px}.benefits-note{margin-top:-18px}.benefits-grid{grid-template-columns:1fr;gap:50px}.benefits-statement h2{font-size:58px}.benefits-statement p{font-size:13px}.benefit-item{grid-template-columns:32px 1fr 40px;gap:12px;padding:23px 0}.benefit-item:hover,.benefit-item:focus-visible,.benefit-item.is-open{padding-left:10px}.benefit-item h3{font-size:28px}.benefit-item p{font-size:12px}.benefit-arrow{width:38px;height:38px}.benefit-item:hover .benefit-preview,.benefit-item:focus-visible .benefit-preview,.benefit-item.is-open .benefit-preview{height:68px;margin-top:16px}.benefit-preview{max-width:100%}.site-signature{right:12px;bottom:12px;opacity:.3}.section-mark{right:5%;top:5%;font-size:70px}.hero-photo:hover img{transform:none}.hero-photo:hover .photo-sticker{transform:none}.hero-photo:hover .photo-caption{transform:none}}
  `;
  document.head.appendChild(enhancementStyle);

  document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('is-open'));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); item.classList.toggle('is-open'); }
    });
  });

  if (window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - .5) * 10;
      const y = (event.clientY / window.innerHeight - .5) * 8;
      signature.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    }, { passive: true });
  }
})();
