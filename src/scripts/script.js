document.querySelectorAll('[data-reveal-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = document.getElementById(btn.dataset.revealTarget);
    details.open = !details.open;
  });
});