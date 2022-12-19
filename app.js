const navList = document.querySelector('.nav-list');
const navIcon = document.querySelector('.nav-icon-span');
const removeList = document.querySelector('.nav-list-remove')

navIcon.addEventListener("click", () => {
    navList.classList.toggle("active")
})

removeList.addEventListener("click", () => {
    navList.classList.remove("active")
})