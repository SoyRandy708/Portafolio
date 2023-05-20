const menu = document.getElementById("menu")

function menuMobileToggle() {
    const header = document.querySelector("header")
    header.classList.toggle("mostrar-menu")
}

menu.addEventListener("click", menuMobileToggle)