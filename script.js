const cards = document.querySelectorAll('.card');
const panels = document.querySelectorAll('.panel');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const target = card.dataset.target;

    cards.forEach((item) => item.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));

    card.classList.add('active');
    document.getElementById(target).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
