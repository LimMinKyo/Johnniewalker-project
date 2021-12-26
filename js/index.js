const hover = document.querySelectorAll('.hover');

hover.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const dl = item.firstElementChild;
    dl.style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
    const dl = item.firstElementChild;
    dl.style.display = 'none';
  });
});

