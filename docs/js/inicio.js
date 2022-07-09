let botonInfo = document.querySelector(".boton-info-juego");

botonInfo.addEventListener("click", () => {
    eliminarClase(containerModal, "oculto");
    eliminarClase(containerCerrarModal, "transition-cerrar-modal")
    setTimeout(() => agregarClase(containerCerrarModal, "transition-abrir-modal"), 30);
});

let botonMusica = document.querySelector(".boton-musica");
let sonido = true;

let musica = document.querySelector(".audio-juego");

botonMusica.addEventListener("click", () => {
    if (sonido) {
        musica.pause()
        sonido = false;
    } else {
        musica.play()
        sonido = true;
    }
})

let botonInicio = document.querySelector("#inicio-juego");
let pantallaDificultad = document.querySelector(".container-dificultad");
let pantallaInicio = document.querySelector(".intro-juego");

botonInicio.addEventListener("click", () => {
    agregarClase(pantallaInicio, "oculto");
    eliminarClase(pantallaDificultad, "oculto")
})

let botonAgregarPalabra = document.querySelector("#agregar-palabra");
let pantallaAgregarPalabra = document.querySelector(".container-palabra-nueva")

botonAgregarPalabra.addEventListener("click", () => {
    agregarClase(pantallaInicio, "oculto");
    eliminarClase(pantallaAgregarPalabra, "oculto")
})

function eliminarClase(elemento, clase) {
    elemento.classList.remove(clase);
}

function agregarClase(elemento, clase) {
    elemento.classList.add(clase);
}

