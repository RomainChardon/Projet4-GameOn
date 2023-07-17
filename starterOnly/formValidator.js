const form = document.querySelector('form');



form.addEventListener("submit", (event) => {
    
    // empeche le refresh
    event.preventDefault();

    // select input
    let prenom = document.getElementById("first");
    let nom = document.getElementById("last");
    let email = document.getElementById("email");
    let date = document.getElementById("birthdate");
    let nbTournois = document.getElementById("quantity");
    let ca = document.getElementById("checkbox1");

    if (prenom.value.length < 2) {
        prenom.classList.add("erreur");
        erreurAlert('Minimum 2 caractères !', prenom);
    } else {
        prenom.classList.remove("erreur");
    }

    if (nom.value.length < 2) {
        nom.classList.add("erreur");
        erreurAlert('Minimum 2 caractères !', nom);
    } else {
        nom.classList.remove("erreur");
    }

});

function erreurAlert(message, select) {
    // console.log(select.parentNode.children);
    // Creer une fonction qui empeche le doublon du message erreur

    let newDiv = document.createElement("div");
    let newText = document.createElement("p");

    newText.textContent = message;
    newDiv.classList.add('error-container');
    newText.classList.add('error');

    newDiv.appendChild(newText);

    select.parentNode.appendChild(newDiv);
};