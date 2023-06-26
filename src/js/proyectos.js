const contenedor = document.querySelector(".proyectos__contenedor")

const proyectos = [ 
    {
        nombre: "ToDo List",
        descripcion: "Sitio Web para poder crear, modificar y eliminar ToDo's tambien tiene funcionalidades como poder filtrar los ToDo's por su titulo o su estado (completado, pendiente), conservar los ToDo's creados aun si se cierra la pagina",
        imagen: "https://i.imgur.com/Wb6VPa6.jpg",
        web: "https://soyrandy708.github.io/ToDo-List/",
        github: "https://github.com/SoyRandy708/ToDo-List",
    },
    {
        nombre: "Formulario de validaciones",
        descripcion: "Formulario para iniciar sesion en una pagina donde sino se escriben correctamente los requerimientos aparecen los campos que se tiene que modificar para enviar el formulario.",
        imagen: "https://i.imgur.com/8yOgls4.png",
        web: "https://soyrandy708.github.io/FormularioConValidaciones/",
        github: "https://github.com/SoyRandy708/FormularioConValidaciones",
    },
    {
        nombre: "Numeros Aleatorios",
        descripcion: "Pagina para generar la cantidad de numeros aleatorios que se quieran entre los rangos que desee el usuario.",
        imagen: "https://i.imgur.com/EEJTalL.png",
        web: "https://soyrandy708.github.io/NumerosAleatorios/",
        github: "https://github.com/SoyRandy708/NumerosAleatorios",
    },
    {
        nombre: "Calculadora",
        descripcion: "Calculadora basica para poder hacer sumas, restas, multiplicaciones y divisones, tambien tiene dark y light mode",
        imagen: "https://i.imgur.com/JJeC54M.png",
        web: "https://soyrandy708.github.io/Calculadora-JS/",
        github: "https://github.com/SoyRandy708/Calculadora-JS",
    },
    // {
    //     nombre: "",
    //     descripcion: "",
    //     imagen: "src/assets/img/",
    //     web: "",
    //     github: "",
    // },
]

proyectos.map(proyecto => {    
    const {nombre, descripcion, imagen, web, github} = proyecto
    const article = document.createElement("article")
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const img = document.createElement("img")
    const p = document.createElement("p")
    const ul = document.createElement("ul")
    const li1 = document.createElement("li")
    const li2 = document.createElement("li")
    const botonWeb = document.createElement("a")
    const botonGithub = document.createElement("a")

    article.classList.add("proyecto")
    img.src = imagen
    img.alt = nombre
    img.loading = "lazy"
    div.classList.add("informacion")
    h3.textContent = nombre
    h3.classList.add("titulo")
    p.textContent = descripcion
    p.classList.add("descripcion")
    ul.classList.add("botones")
    botonWeb.textContent = "Sitio Web"
    botonWeb.href = web
    botonWeb.target = "_blank"
    botonGithub.textContent = "Github"
    botonGithub.href = github
    botonGithub.target = "_blank"

    article.appendChild(img)
    article.appendChild(div)
    article.appendChild(ul)
    div.appendChild(h3)
    div.appendChild(p)
    ul.appendChild(li1)
    ul.appendChild(li2)
    li1.appendChild(botonGithub)
    li2.appendChild(botonWeb)
    contenedor.appendChild(article)
})