const btn = document.querySelector('.button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btn.addEventListener('click', showModal);

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});

document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = (entries) => {
//   const [entry] = entries;

//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

//
