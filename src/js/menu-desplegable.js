const menu = document.getElementById("menu")
const menuItems = document.querySelectorAll(".navegacion .item")
const header = document.querySelector("header")

function menuMobileToggle() {
    header.classList.toggle("mostrar-menu")
}

function closeMenu() {
    header.classList.remove("mostrar-menu")
}

menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu)
})
menu.addEventListener("click", menuMobileToggle)