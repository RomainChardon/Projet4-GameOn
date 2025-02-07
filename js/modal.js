function editNav() {
  let x = document.getElementById("myTopnav");
  if (xclassName === "topnav") {
    x.class.Name += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalValid = document.getElementById("modal-valid");

modalbg.style.display = "none";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
}

function closeModal() {
  modalbg.style.display = "none";
}

function closeModalValid() {
  modalValid.style.display = "none";
  closeModal();
}




