let botonCancelar = document.querySelector("#cancelar");

botonCancelar.addEventListener("click", () => {
    agregarClase(pantallaAgregarPalabra, "oculto");
    eliminarClase(pantallaInicio, "oculto");
    palabraNueva.value = "";
    sugerenciaTexto.textContent = "Máx. de 15 letras, no se permiten numeros, caracteres especiales o espacios."
    eliminarClase(sugerenciaTexto, "error-mensaje");
})

let botonAgregarIniciar = document.querySelector("#agregar-palabra-empezar");

let palabraNueva = document.querySelector("#entrada-palabra-nueva");
botonAgregarIniciar.addEventListener("click", () => {
    const palabraSecreta = [];
    let numero = 0
    // let palabraCorrecta = validarPalabraNueva(palabraNueva.value);

    if (validarPalabraNueva(palabraNueva)) {
        palabraSecreta.push(palabraNueva.value)
        agregarClase(pantallaAgregarPalabra, "oculto")
        eliminarClase(pantallaLienzo, "oculto")
        mostrarLienzo()
        empezarJuego(palabraSecreta, numero)
        palabraNueva.value = "";
        sugerenciaTexto.textContent = "Máx. de 15 letras, no se permiten numeros, caracteres especiales o espacios."
        eliminarClase(sugerenciaTexto, "error-mensaje");
    }
})

let sugerenciaTexto = document.querySelector(".sugerencia-texto");

function validarPalabraNueva(palabra) {
    const expresion = /^[a-zA-Z/ñÑ]{1,15}$/;

    if (palabra.value.length <= 15) {
        console.log(palabra.value);

        if (expresion.test(palabra.value)) {
            return true;

        } else {
            sugerenciaTexto.textContent = "Haz ingresado algun número, caracter especial o un espacio.";
            agregarClase(sugerenciaTexto, "error-mensaje");
        }

    } else {
        sugerenciaTexto.textContent = "El numero de caracteres es mayor a 15.";
        agregarClase(sugerenciaTexto, "error-mensaje");
    }
}