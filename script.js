const buttons = document.querySelectorAll('.card');
const panels = document.querySelectorAll('.panel');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    buttons.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
