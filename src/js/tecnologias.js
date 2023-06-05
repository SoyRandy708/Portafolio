const contenedorImagenes = document.querySelectorAll(".tecnologias__contenedor .img__container")

contenedorImagenes.forEach(figure => {
    const img = figure.children[0]
    const figcaption = figure.children[1]

    figcaption.textContent = img.alt
})
