const openMenu = document.querySelector('.bi-list')
let containerMenu = document.querySelector('.containerMenu')

openMenu.addEventListener('click', () => {
    containerMenu.classList.toggle('menuVisibility')
})