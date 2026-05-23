console.log("Portafolio cargado correctamente");

const openModalGH = document.getElementById("open-modal-github");
const openModalCorreo = document.getElementById("open-modal-correo");

const closeModalGH = document.getElementById("close-modal-github");
const closeModalCorreo = document.getElementById("close-modal-correo");

const modalGH = document.getElementById("github-modal");
const modalCorreo = document.getElementById("correo-modal");

openModalGH.addEventListener("click", () => {
    modalGH.style.display = "flex";
});

closeModalGH.addEventListener("click", () => {
    modalGH.style.display = "none";
});

openModalCorreo.addEventListener("click", () => {
    modalCorreo.style.display = "flex";
});

closeModalCorreo.addEventListener("click", () => {
    modalCorreo.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modalGH) {
        modalGH.style.display = "none";
    }
    if (event.target === modalCorreo) {
        modalCorreo.style.display = "none";
    }
});