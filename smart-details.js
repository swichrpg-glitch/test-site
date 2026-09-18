(() => {
  const layer = document.createElement('div');
  layer.className = 'design-layer';
  layer.innerHTML = '<span class="dl-coord">GRID / 12</span><span class="dl-type">TYPE / 01</span><span class="dl-color">COLOR / ACID</span><span class="dl-structure">STRUCTURE / 04</span><span class="dl-sign">AG / 2026</span>';
  document.body.appendChild(layer);

  const contact = document.querySelector('#contact');
  if (!contact) return;

  const choices = document.createElement('div');
  choices.className = 'smart-contact';
  choices.innerHTML = '<div class="smart-contact-head"><span>06 / Начать проект</span><p>Выберите точку старта — дальше форма сама подстроится.</p></div><div class="smart-options"><button data-mode="clear"><small>01</small><strong>Я знаю, что хочу</strong><span>Есть конкретная задача →</span></button><button data-mode="idea"><small>02</small><strong>Есть идея</strong><span>Помогите превратить её в решение →</span></button><button data-mode="mess"><small>03</small><strong>У меня каша из информации 😅</strong><span>Разберёмся вместе →</span></button></div>';
  contact.insertBefore(choices, contact.querySelector('.contact-form-wrap'));

  const form = contact.querySelector('.contact-form');
  const service = form?.querySelector('[name="service"]');
  const message = form?.querySelector('[name="message"]');
  const lead = contact.querySelector('.contact-lead');

  choices.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      choices.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const mode = btn.dataset.mode;
      const texts = {
        clear: ['Отлично. Тогда сразу к задаче.', 'Выберите нужный формат и коротко опишите, что нужно сделать.'],
        idea: ['Идея — уже начало.', 'Расскажите, что задумали. Я помогу превратить это в понятное визуальное решение.'],
        mess: ['Каша — тоже рабочий материал 😄', 'Не нужно заранее всё структурировать. Просто выгрузите мысли — разберём вместе.']
      };
      if (lead) lead.textContent = texts[mode][1];
      if (message) {
        message.placeholder = mode === 'clear'
          ? 'Что нужно сделать, для кого и к какому сроку?'
          : mode === 'idea'
            ? 'Расскажите идею своими словами — даже если пока всё в общих чертах.'
            : 'Можно просто вставить сюда всё, что есть: текст, мысли, требования, ссылки…';
        message.focus();
      }
      if (service && mode === 'idea') service.value = 'Другое';
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    .design-layer{position:fixed;inset:0;pointer-events:none;z-index:4;opacity:0;transition:opacity .35s ease;font:800 9px/1 Manrope,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase}
    .design-layer span{position:absolute;padding:7px 9px;border:1px solid rgba(17,17,17,.18);background:rgba(244,241,235,.82);backdrop-filter:blur(5px)}
    .dl-coord{left:2vw;top:22vh}.dl-type{right:2vw;top:31vh}.dl-color{left:3vw;top:69vh}.dl-structure{right:2vw;top:77vh}.dl-sign{right:4vw;bottom:3vh;background:#d6ff36!important;border-color:#111!important}
    body.design-mode .design-layer{opacity:.72}
    body.design-mode .hero,.design-mode .section{--gridline:rgba(17,17,17,.08)}
    .smart-contact{margin:0 0 28px;padding:28px 0 0;border-top:1px solid rgba(17,17,17,.28);position:relative;z-index:1}
    .smart-contact-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:24px}
    .smart-contact-head>span{font-size:10px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;opacity:.55}
    .smart-contact-head p{margin:0;font-size:12px;opacity:.5}
    .smart-options{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #111}
    .smart-options button{appearance:none;border:0;border-right:1px solid #111;background:transparent;text-align:left;padding:22px 20px;min-height:150px;display:flex;flex-direction:column;align-items:flex-start;cursor:pointer;font-family:Manrope,Arial,sans-serif;transition:background .35s ease,transform .35s ease}
    .smart-options button:last-child{border-right:0}
    .smart-options button:hover,.smart-options button.selected{background:#d6ff36}
    .smart-options button:hover{transform:translateY(-5px)}
    .smart-options small{font-size:10px;font-weight:800;opacity:.45;margin-bottom:28px}
    .smart-options strong{font-size:18px;line-height:1.05;letter-spacing:-.035em}
    .smart-options span{font-size:11px;line-height:1.35;opacity:.5;margin-top:auto;padding-top:18px}
    .smart-options button.selected span{opacity:.85}
    @media(max-width:800px){
      .design-layer{display:none}
      .smart-contact{padding-top:22px}
      .smart-contact-head{display:block}
      .smart-contact-head p{margin-top:10px}
      .smart-options{grid-template-columns:1fr}
      .smart-options button{border-right:0;border-bottom:1px solid #111;min-height:112px;padding:18px}
      .smart-options button:last-child{border-bottom:0}
      .smart-options small{margin-bottom:14px}
    }
  `;
  document.head.appendChild(style);

  let timer;
  const activateDesignMode = () => {
    clearTimeout(timer);
    document.body.classList.add('design-mode');
    timer = setTimeout(() => document.body.classList.remove('design-mode'), 1800);
  };
  window.addEventListener('mousemove', (e) => {
    if (e.clientX < 110 || e.clientX > window.innerWidth - 110) activateDesignMode();
  }, {passive:true});
})();