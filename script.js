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
