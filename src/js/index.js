const menuHamburguesa = document.getElementById("menu-hamburguesa")

function menuMobileToggle() {
    const menuMobile = document.getElementById("navegacion-mobile")
    menuMobile.classList.toggle("inactivo")
}

menuHamburguesa.addEventListener("click", menuMobileToggle)