/* Project gallery draft — temporary duplicates, ready to replace with real screenshots */
(() => {
  const modal = document.querySelector('.project-modal');
  if (!modal) return;

  const panel = modal.querySelector('.project-modal-panel');
  const info = modal.querySelector('.project-modal-info');
  if (!panel || !info) return;

  const gallery = document.createElement('div');
  gallery.className = 'project-modal-gallery';
  gallery.innerHTML = '<div class="project-gallery-head"><span>01 / PROJECT DETAILS</span><small>Дополнительные экраны проекта</small></div><div class="project-gallery-grid"></div>';
  panel.insertBefore(gallery, info);

  const grid = gallery.querySelector('.project-gallery-grid');

  const style = document.createElement('style');
  style.textContent = `
.project-modal-gallery{padding:0 34px 34px;background:#f4f1eb}.project-gallery-head{display:flex;justify-content:space-between;align-items:end;gap:20px;padding:0 0 14px;border-bottom:1px solid rgba(17,17,17,.18);font-size:10px;letter-spacing:.12em;font-weight:800}.project-gallery-head small{font-size:11px;letter-spacing:0;font-weight:500;opacity:.45}.project-gallery-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.project-gallery-item{position:relative;min-height:220px;background:#171717;border-radius:16px;overflow:hidden;display:flex;align-items:center;justify-content:center}.project-gallery-item:first-child{grid-column:1 / -1;min-height:360px}.project-gallery-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.2,.8,.2,1);filter:saturate(.98)}.project-gallery-item:first-child img{object-fit:contain;padding:24px;box-sizing:border-box}.project-gallery-item:hover img{transform:scale(1.025)}.project-gallery-item:after{content:'DRAFT SCREEN';position:absolute;left:14px;bottom:12px;padding:6px 8px;background:#d6ff36;color:#111;font-size:8px;font-weight:800;letter-spacing:.1em}.project-gallery-item:nth-child(2):after{background:#b9a6ff}.project-gallery-item:nth-child(3):after{background:#f4f1eb}.project-gallery-item:nth-child(4):after{background:#d6ff36}
@media(max-width:800px){.project-modal-gallery{padding:0 20px 24px}.project-gallery-head{display:block}.project-gallery-head small{display:block;margin-top:7px}.project-gallery-grid{grid-template-columns:1fr;gap:10px}.project-gallery-item,.project-gallery-item:first-child{min-height:240px}.project-gallery-item:first-child img{padding:14px}.project-gallery-item:after{font-size:7px}}
`;
  document.head.appendChild(style);

  const fillGallery = (project) => {
    const source = project?.querySelector('.project-image img');
    if (!source) return;
    const src = source.currentSrc || source.src;
    const alt = source.alt || 'Проект';
    grid.innerHTML = '';

    // Черновик: один и тот же кадр повторяется 4 раза.
    // Позже здесь просто заменим src на реальные скрины конкретного проекта.
    [src, src, src, src].forEach((imageSrc, index) => {
      const item = document.createElement('div');
      item.className = 'project-gallery-item';
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = `${alt} — экран ${index + 1}`;
      img.loading = 'lazy';
      item.appendChild(img);
      grid.appendChild(item);
    });
  };

  document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
      fillGallery(project);
    });
  });
})();
