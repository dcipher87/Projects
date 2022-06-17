// TEST TO SEE THAT JS FILE IN LINKED TO HTML
// const navToggle = document.querySelector('.nav-toggle');
//
// navToggle.addEventListener('click', () => {
//   document.body.classList.toggle('nav-open');
// });

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
