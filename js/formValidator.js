const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    
    // select input
    let prenom = document.getElementById("first");
    let nom = document.getElementById("last");
    let email = document.getElementById("email");
    let date = document.getElementById("birthdate");
    let nbTournois = document.getElementById("quantity");
    let ca = document.getElementById("checkbox1");
    // let validPage =  document.getElementById('modal-valid');
    let formValide = true;
    let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regexQuantity = /^\d{1,3}$/gm;

    if (prenom.value.length < 2) {
        prenom.classList.add("erreur");
        erreurAlert('Minimum 2 caractères !', prenom);
        formValide = false;
    } else {
        prenom.classList.remove("erreur");
        erreurAlertRemove(prenom);
    }

    if (nom.value.length < 2) {
        nom.classList.add("erreur");
        erreurAlert('Minimum 2 caractères !', nom);
        formValide = false;
    } else {
        nom.classList.remove("erreur");
        erreurAlertRemove(nom);
    }

    if (regexMail.test(email.value) === false) {
        email.classList.add("erreur");
        erreurAlert('email non valide', email);
        formValide = false;
    } else {
        email.classList.remove("erreur");
        erreurAlertRemove(email);
    }

    if (date.value == '') {
        date.classList.add("erreur");
        erreurAlert('Saisir votre date de naissance', date);
        formValide = false;
    } else {
        date.classList.remove("erreur");
        erreurAlertRemove(date);
    }

    if (regexQuantity.test(nbTournois.value) === false) {
        nbTournois.classList.add("erreur");
        erreurAlert('Saisir un chiffre', nbTournois);
        formValide = false;
    } else {
        nbTournois.classList.remove("erreur");
        erreurAlertRemove(nbTournois);
    }

    if (ca.checked === false) {
        ca.classList.add("erreur");
        erreurAlert('Vous devez accepter les conditions d\'utilidation', ca);
        formValide = false;
    }

    if (formValide == false) {
        // empeche le refresh
        event.preventDefault();
    } else {
        // validPage.style.display = "flex";
    }

});

function closeModalValid() {
    validPage.style.display = "none";
}

// Affiche les messages d'erreur
function erreurAlert(message, select) {
    // Si le message d'erreur n'existe pas
    if (!select.parentNode.children[4]) {
        let newDiv = document.createElement("div");
        let newText = document.createElement("p");

        newText.textContent = message;
        newDiv.classList.add('erreur-container');
        newText.classList.add('erreur-text');

        newDiv.appendChild(newText);

        select.parentNode.appendChild(newDiv);
    }
};

// Supprime les messages d'erreur
function erreurAlertRemove(select) {
    if (select.parentNode.children[4]) {
        select.parentNode.removeChild(select.parentNode.children[4]);
    }
}