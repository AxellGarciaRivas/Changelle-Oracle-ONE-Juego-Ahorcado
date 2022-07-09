let botonRegresar = document.querySelector(".boton-regresar");

botonRegresar.addEventListener("click", () => {
    agregarClase(pantallaDificultad, "oculto");
    eliminarClase(pantallaInicio, "oculto");
})

// mostrando la pantalla del lienzo y dificultad
let pantallaLienzo = document.querySelector(".juego-canvas");
let botonFacil = document.querySelector("#dificultad-facil");

botonFacil.addEventListener("click", () => {
    //maximo ocho caracteres
    const palabrasFaciles = ["teclado", "mouse", "muchila", "sobremesa", "almohada", "camarote", "atardecer", "vestidos", "estacion", "vialactia", "vestimenta", "pantalla", "borrador", "tenedor", "camisas", "caminar", "microbus", "aeronave", "nautica", "leyenda"];
    let sorteoNumero = sorteoNumeroPalabra();

    mostrarLienzo();
    empezarJuego(palabrasFaciles, sorteoNumero);
})

let botonMedio = document.querySelector("#dificultad-medio");

botonMedio.addEventListener("click", () => {
    //maximo 10 caracteres
    const palabrasMedias = ["interruptor", "avalanchas", "flexometro", "medicamentos", "supermercado", "transporte", "aguinaldo", "programacion", "estabilizar", "estuciasmo", "computador", "campeonato", "lujuriaso", "femeninas", "cartuchera", "amenazador", "estrategico", "cargadores", "JavaScript", "sospechoso"];
    let sorteoNumero = sorteoNumeroPalabra();
    
    mostrarLienzo();
    empezarJuego(palabrasMedias, sorteoNumero);
})

let botonDificil = document.querySelector("#dificultad-dificil");

botonDificil.addEventListener("click", () => {
    //maximo 15 caracteres
    const palabrasDificiles = ["estacionamiento", "escenografia", "responsabilidad", "multifuncionalidad", "envejecimiento", "aeroespacial", "estandarizacion", "constituyente", "involucramiento", "actualizaciones","catalizadores", "circunferencia", "generalmente", "circustancia", "distanciamiento", "hemorragias", "vasovasectomia", "colonoscopia", "electricidad", "funcionalidad"];
        let sorteoNumero = sorteoNumeroPalabra();

    mostrarLienzo();
    empezarJuego(palabrasDificiles, sorteoNumero);
})

//numero de intentos
let intentos = 8;

let botonReinicio = document.querySelector(".reinicio");

botonReinicio.addEventListener("click", () => {
    agregarClase(mensajeReinicio, "cerrar");

    setTimeout(() => {
        agregarClase(mensajeReinicio, "oculto");
        agregarClase(pantallaLienzo, "oculto");
        eliminarClase(pantallaInicio, "oculto");
        ulLetrasUtilizadas.innerHTML = "";
        ulListaLetras.innerHTML = "";
        limpiarAtributos(letras);
        limpiarClase(letras);
        teclasPresionadas = [];
        palabraMostrar = [];
        intentos = 8;
        eliminarClase(mensajeReinicio, "cerrar");
        agregarClase(mensajeReinicio, "abrir");
        document.removeEventListener("keydown", activarTeclas)
    }, 310);
})

//reinicio del juego
let mensajeReinicio = document.querySelector(".fin-juego");

function finJuego() {
    eliminarClase(mensajeReinicio, "oculto");
    setTimeout(() => {
        eliminarClase(mensajeReinicio, "abrir");
    }, 310);
}

let palabraMostrar = [];

//mostrar letra acertada en la pantalla
function mostrarLetraAcertada(letra) {
    let palabra = palabraMostrar[0];
    let restarIntento = true;

    for (let i = 0; i < palabra.length; ++i) {

        if (letra.toLowerCase() == palabraMostrar[0][i]) {
            agregarLetraPantalla(letra, i, palabra);
            restarIntento = false;
        }
    }

    let lineas = document.querySelectorAll(".letra");
    let campoLleno = 0;
    let ganaste = false;

    if (restarIntento) {
        --intentos;
        let lienzo = document.querySelector(".lienzo");
        let pincel = lienzo.getContext("2d")

        switch (intentos) {
            case 7:
                dibujarFalloUno(pincel);
                break;

            case 6:
                dibujarFalloDos(pincel)
                break;

            case 5:
                dibujarFalloTres(pincel)
                break;

            case 4:
                dibujarFalloCuatro(pincel)
                break;

            case 3:
                dibujarFalloCinco(pincel)
                break;

            case 2:
                dibujarFalloSeis(pincel)
                break;

            case 1:
                dibujarFalloSiete(pincel)
                break;

            case 0:
                dibujarFalloOcho(pincel)
                setTimeout(() => {
                    let containerPalabra = document.querySelector(".palabra-oculta");
                    containerPalabra.textContent = palabraMostrar[0].toUpperCase();
                    finJuego();
                }, 400)
                break;

            default:
                break;
        }

    }

    if (intentos != 0) {

        for (let i = 0; i < lineas.length; ++i) {

            if (lineas[i].textContent != "") {
                ++campoLleno;
            }
        }

        if (campoLleno == lineas.length) {
            ganaste = true;
        }
    }

    if (ganaste) {
        mensajeGanaste();
    }
}

//dibujando base
function dibujarFalloUno(pincel) {
    pincel.fillStyle = "#0A3871"

    let x = 80;
    let y = 450;

    for (let j = 0; j < 7; ++j) {
        let tiempo = 100;
        pincel.beginPath()
        pincel.arc(x, y, 3, 0, 2 * Math.PI)
        pincel.fill()
        y -= 3

    }

    for (let i = 0; i < 10; ++i) {
        pincel.beginPath()
        pincel.arc(x, y, 3, 0, 2 * Math.PI)
        pincel.fill()
        x += 3;
    }

    for (let j = 0; j < 7; ++j) {
        pincel.beginPath()
        pincel.arc(x, y, 3, 0, 2 * Math.PI)
        pincel.fill()
        y += 3
    }

    for (let i = 0; i < 10; ++i) {
        pincel.beginPath()
        pincel.arc(x, y, 3, 0, 2 * Math.PI)
        pincel.fill()
        x -= 3;
    }
}

//dibujando barra vertical
function dibujarFalloDos(pincel) {
    pincel.fillStyle = "#0A3871"
    pincel.fillRect(90, 70, 8, 360)
}

//dibujando barra horizontal con cuerda
function dibujarFalloTres(pincel) {
    pincel.fillRect(98, 70, 150, 8)
    pincel.fillRect(248, 70, 8, 50)
}

//dibujando cabeza
function dibujarFalloCuatro(pincel) {
    pincel.fillStyle = "#0A3871"
    pincel.beginPath()
    pincel.arc(252, 140, 25, 0, 2 * Math.PI)
    pincel.fill()

    pincel.fillStyle = "white"
    pincel.beginPath()
    pincel.arc(252, 140, 20, 0, 2 * Math.PI)
    pincel.fill()
}

//dibujando dorso
function dibujarFalloCinco(pincel) {
    pincel.fillStyle = "#0A3871"
    pincel.fillRect(250, 162, 5, 150)
}

//dibujando pies
function dibujarFalloSeis(pincel) {
    pincel.fillStyle = "#0A3871"
    let x1 = 252;
    let y1 = 310;

    for (let i = 0; i < 65; ++i) {
        pincel.beginPath()
        pincel.arc(x1, y1, 2, 0, 2 * Math.PI)
        pincel.fill()
        x1 += 0.5
        y1 += 1
    }

    let x2 = 252;
    let y2 = 310;

    for (let j = 0; j < 65; ++j) {
        pincel.beginPath()
        pincel.arc(x2, y2, 2, 0, 2 * Math.PI)
        pincel.fill()
        x2 -= 0.5
        y2 += 1
    }
}

//dibujando manos
function dibujarFalloSiete(pincel) {
    pincel.fillStyle = "#0A3871"
    let x1 = 252;
    let y1 = 182;

    for (let i = 0; i < 40; ++i) {
        pincel.beginPath()
        pincel.arc(x1, y1, 2, 0, 2 * Math.PI)
        pincel.fill()
        x1 += 1
        y1 += 1
    }

    let x2 = 252;
    let y2 = 182;

    for (let j = 0; j < 40; ++j) {
        pincel.beginPath()
        pincel.arc(x2, y2, 2, 0, 2 * Math.PI)
        pincel.fill()
        x2 -= 1
        y2 += 1
    }
}

//dibujando cara
function dibujarFalloOcho(pincel) {
    pincel.fillStyle = "#0A3871"
    let x1 = 240;
    let y1 = 130;
    let x2 = 248;
    let y2 = 130;

    for (let i = 0; i < 80; ++i) {
        pincel.beginPath()
        pincel.arc(x1, y1, 0.1, 0, 2 * Math.PI)
        pincel.fill()
        x1 += 0.1
        y1 += 0.1
    }

    for (let i = 0; i < 80; ++i) {
        pincel.beginPath()
        pincel.arc(x2, y2, 0.1, 0, 2 * Math.PI)
        pincel.fill()
        x2 -= 0.1
        y2 += 0.1
    }

    let a1 = 255;
    let b1 = 130;
    let a2 = 263;
    let b2 = 130;

    for (let j = 0; j < 80; ++j) {
        pincel.beginPath()
        pincel.arc(a1, b1, 0.1, 0, 2 * Math.PI)
        pincel.fill()
        a1 += 0.1
        b1 += 0.1
    }

    for (let j = 0; j < 80; ++j) {
        pincel.beginPath()
        pincel.arc(a2, b2, 0.1, 0, 2 * Math.PI)
        pincel.fill()
        a2 -= 0.1
        b2 += 0.1
    }

    pincel.fillRect(242, 147, 20, 2);
    pincel.fillRect(253, 147, 7, 7)

    pincel.fillStyle = "white"
    pincel.fillRect(255, 149, 3, 3)
}

//mostrar mensaje ganaste
function mensajeGanaste() {
    let mensajeGanaste = document.querySelector(".ganaste-juego");
    eliminarClase(mensajeGanaste, "oculto");

    let botonOk = document.querySelector(".ok");

    botonOk.addEventListener("click", () => {
        agregarClase(mensajeGanaste, "oculto");
    })

    let letrasPantalla = document.querySelectorAll(".letra-pantalla");

    letrasPantalla.forEach(letra => {
        letra.setAttribute("disabled", true);
        eliminarClase(letra, "letra-hover");
    })
}

//agregar letra pantalla
function agregarLetraPantalla(letra, indice) {
    let lineas = document.querySelectorAll(".letra");
    lineas[indice].textContent = letra;
}

//array verificar teclas
let teclasPresionadas = [];

// evento click en la pantalla
let letras = document.querySelectorAll(".letra-pantalla");

letras.forEach(letra => {
    letra.addEventListener("click", () => {
        bontonCambios(letra);
        teclasPresionadas.push(letra.textContent.toLowerCase());
        mostrarLetraUtilizada(letra.textContent);
        mostrarLetraAcertada(letra.textContent);
    })
});

//vinculacion de teclado fisico con el de la panatalla
function activarTeclas() {
    let teclaPulsada = event.key;
    const expresiones = /^[a-zA-Z/ñÑ]$/;

    if (intentos > 0) {

        if (expresiones.test(teclaPulsada)) {
            teclaRepetida(teclaPulsada.toLowerCase(), teclasPresionadas);
            mostrarLetraAcertada(teclaPulsada.toUpperCase());
        }
    }
}

//funcion de cambio del boton
function bontonCambios(letra) {
    agregarClase(letra, "tecla-presionada");
    eliminarClase(letra, "letra-hover");
    letra.setAttribute("disabled", true);
}

//verificaccion de letra con las de la pantalla
function verificarLetrasPantalla(tecla) {

    for (let i = 0; i < letras.length; ++i) {
        let letra = letras[i].textContent;

        if (letra === tecla) {
            return i;
        }
    }
}

function teclaRepetida(teclaPulsada, teclasPresionadas) {
    let letraEncontrada = false;
    if (!(teclasPresionadas == "")) {

        for (let i = 0; i < teclasPresionadas.length; ++i) {

            if (teclaPulsada.includes(teclasPresionadas[i])) {
                console.log("Esta tecla ya la presionaste");
                mensajeTeclaRepetida();
                letraEncontrada = true;
                break;
            }
        }
    }

    if (teclasPresionadas == "") {
        teclasPresionadas.push(teclaPulsada);
        bontonCambios(letras[verificarLetrasPantalla(teclaPulsada.toUpperCase())]);
        mostrarLetraUtilizada(teclaPulsada.toUpperCase());

    } else if (!letraEncontrada) {
        teclasPresionadas.push(teclaPulsada);
        bontonCambios(letras[verificarLetrasPantalla(teclaPulsada.toUpperCase())]);
        mostrarLetraUtilizada(teclaPulsada.toUpperCase());
    }
}

//mostrar mensaje de tecla ya presionada
let mensajePantalla = document.querySelector(".tecla-repetida");

function mensajeTeclaRepetida() {
    eliminarClase(mensajePantalla, "oculto");
}

let botonPantalla = document.querySelector(".error");

botonPantalla.addEventListener("click", () => {
    agregarClase(mensajePantalla, "oculto");
})


let ulLetrasUtilizadas = document.querySelector(".lista-letras-utilizadas");

function mostrarLetraUtilizada(letraUtilizada) {
    let li = document.createElement("li");
    agregarClase(li, "letras-utilizadas");
    li.textContent = letraUtilizada;
    ulLetrasUtilizadas.appendChild(li);
}

//sorteo de numero
function sorteoNumeroPalabra() {
    let numeroSorteado = Math.round(Math.random() * 19);
    return numeroSorteado;
}

//dibular el lienzo
function mostrarLienzo() {
    agregarClase(pantallaDificultad, "oculto");
    eliminarClase(pantallaLienzo, "oculto");
    document.addEventListener("keydown", activarTeclas)

}

//inicio del juego
function empezarJuego(palabras, numero) {
    let dimensionPantalla = tamanioActual();
    dibujarLienzo(dimensionPantalla);

    let palabraAsignada = palabras[numero];
    crearLineas(palabraAsignada);

    let pantallaLetrasUtilizadas = document.querySelector(".container-letras-utilizadas");

    eliminarClase(pantallaLetrasUtilizadas, "oculto");

    palabraMostrar.push(palabraAsignada);
}

function dibujarLienzo(anchoLienzo) {
    let lienzo = document.querySelector(".lienzo");
    let pincel = lienzo.getContext("2d");

    pincel.fillStyle = "white"
    pincel.fillRect(0, 0, anchoLienzo, 500);
}

// creacion contenedores de letras
let ulListaLetras = document.querySelector(".lista-letras");

function crearLineas(palabraElegida) {

    for (let i = 0; i < palabraElegida.length; ++i) {
        let li = document.createElement("li");
        li.classList.add("letra");
        ulListaLetras.appendChild(li);
    }
}