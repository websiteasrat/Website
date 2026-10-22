(() => {
  const dialog = document.querySelector('.book-dialog');
  let trigger;
  document.querySelectorAll('[data-order]').forEach(button => button.addEventListener('click', () => {
    trigger = button;
    dialog.showModal();
  }));
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => trigger?.focus());
})();
