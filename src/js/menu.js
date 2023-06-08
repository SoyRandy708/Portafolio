const menu = document.getElementById("menu")
const menuItems = document.querySelectorAll(".navegacion .item")
const header = document.querySelector("header")

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        header.classList.remove("mostrar-menu")
    })
})

menu.addEventListener("click", () => {
    header.classList.toggle("mostrar-menu")
})


const modoOscuro = document.querySelector(".modo-oscuro")
const circulo = document.querySelector(".modo-oscuro .circulo")

modoOscuro.addEventListener("click", () => {
    circulo.classList.toggle("modo-color")
})