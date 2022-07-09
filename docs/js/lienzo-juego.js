let botonNuevoJuego = document.querySelector("#juego-nuevo");

botonNuevoJuego.addEventListener("click", () => {
    agregarClase(pantallaLienzo, "oculto");
    eliminarClase(pantallaDificultad, "oculto");
    ulLetrasUtilizadas.innerHTML = "";
    ulListaLetras.innerHTML = "";
    limpiarAtributos(letras);
    limpiarClase(letras);
    teclasPresionadas = [];
    palabraMostrar = [];
    intentos = 8;
    document.removeEventListener("keydown", activarTeclas)
})

let botonTerminarJuego = document.querySelector("#terminar-juego");

botonTerminarJuego.addEventListener("click", () => {
    agregarClase(pantallaLienzo, "oculto");
    eliminarClase(pantallaInicio, "oculto");
    ulLetrasUtilizadas.innerHTML = "";
    ulListaLetras.innerHTML = "";
    limpiarAtributos(letras);
    limpiarClase(letras);
    teclasPresionadas = [];
    palabraMostrar = [];
    intentos = 8;
    document.removeEventListener("keydown", activarTeclas)
})

function limpiarClase(variable) {
    variable.forEach(elemento => {
        eliminarClase(elemento, "tecla-presionada");
    });
}

function limpiarAtributos(letras) {
    letras.forEach(letra => {
        letra.removeAttribute("disabled")
    })
}