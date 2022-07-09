let botonCerrarModal = document.querySelector(".boton-cerrar-modal");
let containerCerrarModal = document.querySelector(".cerrar-modal");
let containerModal = document.querySelector(".container-modal");

setTimeout(() => {
    eliminarClase(containerModal, "oculto");
    setTimeout(() => agregarClase(containerCerrarModal, "transition-abrir-modal"), 30); 
}, 300)

botonCerrarModal.addEventListener("click", () => {
    eliminarClase(containerCerrarModal, "transition-abrir-modal")
    agregarClase(containerCerrarModal, "transition-cerrar-modal");
    setTimeout(() => agregarClase(containerModal, "oculto"), 630);
})