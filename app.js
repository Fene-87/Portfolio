const navList = document.querySelector('.nav-list');
const navIcon = document.querySelector('.nav-icon-span');
const removeList = document.querySelector('.nav-list-remove');
const removeSlider = document.querySelectorAll('.nav-li');

navIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});

removeList.addEventListener('click', () => {
  navList.classList.remove('active');
});

removeSlider.forEach((item) => {
  item.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});