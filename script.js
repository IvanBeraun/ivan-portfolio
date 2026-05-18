console.log("Portafolio cargado correctamente");

const openModal = document.getElementById("open-modal");

const closeModal = document.getElementById("close-modal");

const modal = document.getElementById("github-modal");

openModal.addEventListener("click", () => {

    modal.style.display = "flex";

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});