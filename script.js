document.getElementById('year').textContent = new Date().getFullYear();


/* 施工写真をクリック・Enterキーで拡大表示 */
(() => {
  const photos = document.querySelectorAll('.case-image img');
  if (!photos.length) return;
  const modal = document.createElement('div');
  modal.className = 'photo-modal';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', '施工写真の拡大表示');
  modal.innerHTML = '<button class="photo-modal-close" type="button" aria-label="閉じる">× 閉じる</button><div class="photo-modal-content"><img alt=""><div class="photo-modal-caption"></div></div>';
  document.body.appendChild(modal);
  const image = modal.querySelector('img');
  const caption = modal.querySelector('.photo-modal-caption');
  const close = modal.querySelector('button');
  let previousFocus = null;
  const closeModal = () => {
    modal.hidden = true;
    image.removeAttribute('src');
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
  };
  photos.forEach(photo => {
    photo.setAttribute('tabindex', '0');
    photo.setAttribute('role', 'button');
    photo.setAttribute('aria-label', photo.alt + '（拡大表示）');
    const open = () => {
      previousFocus = document.activeElement;
      image.src = photo.currentSrc || photo.src;
      image.alt = photo.alt;
      caption.textContent = photo.alt;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      close.focus();
    };
    photo.addEventListener('click', open);
    photo.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
  close.addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', event => {
    if (!modal.hidden && event.key === 'Escape') closeModal();
    if (!modal.hidden && event.key === 'Tab') {
      event.preventDefault();
      close.focus();
    }
  });
})();

/* 施工事例専用ページ：分類ごとの絞り込み */
(() => {
  const filters = document.querySelectorAll('.works-filter-button');
  const projects = document.querySelectorAll('.works-project[data-categories]');
  const count = document.querySelector('.works-results-count');
  if (!filters.length || !projects.length) return;
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let visible = 0;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach(project => {
      const show = category === 'all' || project.dataset.categories.split(' ').includes(category);
      project.hidden = !show;
      if (show) visible++;
    });
    if (count) count.textContent = visible + '件の施工事例を表示しています';
  }));
})();
