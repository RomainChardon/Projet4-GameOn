const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    
    // select input
    let prenom = document.getElementById("first");
    let nom = document.getElementById("last");
    let email = document.getElementById("email");
    let date = document.getElementById("birthdate");
    let nbTournois = document.getElementById("quantity");
    let ca = document.getElementById("checkbox1");
    let formValide = true;
    let regexMail = /[A-Za-z0-9]+\.[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/i;
    let regexQuantity = /[0-9]+/i;

    if (prenom.value.length < 2) {
        prenom.classList.add("erreur");
        erreurAlert('Minimum 2 caractères !', prenom);
        formValide = false;
    } else {
        prenom.classList.remove("erreur");
    }

    if (nom.value.length < 2) {
        nom.classList.add("erreur");
        erreurAlert('Minimum 2 caractères !', nom);
        formValide = false;
    } else {
        nom.classList.remove("erreur");
    }

    // if (regexMail.test(email)) {
    //     email.classList.add("erreur");
    //     erreurAlert('email non valide', email);
    //     formValide = false;
    //     console.log('blabla');
    // } else {
    //     email.classList.remove("erreur");
    //     console.log('blablaOK');
    // }

    if (regexQuantity.test(nbTournois)) {
        nbTournois.classList.add("erreur");
        erreurAlert('Chiffre', nbTournois);
        formValide = false;
    } else {
        nbTournois.classList.remove("erreur");
    }

    if (formValide == false) {
        // empeche le refresh
        event.preventDefault();
        console.log('nope');
    }

});

function erreurAlert(message, select) {
    // console.log(select.parentNode.children);
    // Creer une fonction qui empeche le doublon du message erreur

    let newDiv = document.createElement("div");
    let newText = document.createElement("p");

    newText.textContent = message;
    newDiv.classList.add('erreur-container');
    newText.classList.add('erreur-text');

    newDiv.appendChild(newText);

    select.parentNode.appendChild(newDiv);
};