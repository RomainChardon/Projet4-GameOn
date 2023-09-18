const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    
    // select input
    let prenom = document.getElementById("first");
    let nom = document.getElementById("last");
    let email = document.getElementById("email");
    let date = document.getElementById("birthdate");
    let nbTournois = document.getElementById("quantity");
    let location = document.querySelector(".checkbox-input[name='location']:checked");
    let ca = document.getElementById("checkbox1");
    let formValide = true;
    let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regexQuantity = /^\d{1,3}$/gm;
    let regexDate = /^\d{4}-\d{2}-\d{2}$/;

    console.log(regexDate.test('2023-09-20'));
    if (prenom.value.length < 2) {
        prenom.classList.add("erreur");
        erreurAlert('Veuillez entrer 2 caractères ou plus pour le champ du prénom.', prenom);
        formValide = false;
    } else {
        prenom.classList.remove("erreur");
        erreurAlertRemove(prenom);
    }

    if (nom.value.length < 2) {
        nom.classList.add("erreur");
        erreurAlert('Veuillez entrer 2 caractères ou plus pour le champ du nom.', nom);
        formValide = false;
    } else {
        nom.classList.remove("erreur");
        erreurAlertRemove(nom);
    }

    if (regexMail.test(email.value) === false) {
        email.classList.add("erreur");
        erreurAlert('Veuillez entrer une adresse mail valide.', email);
        formValide = false;
    } else {
        email.classList.remove("erreur");
        erreurAlertRemove(email);
    }

    if (regexDate.test(date.value) === false) {
        date.classList.add("erreur");
        erreurAlert('Vous devez entrer votre date de naissance.', date);
        formValide = false;
    } else {
        date.classList.remove("erreur");
        erreurAlertRemove(date);
    }

    if (regexQuantity.test(nbTournois.value) === false) {
        nbTournois.classList.add("erreur");
        erreurAlert('Vous devez entrer le nombre de tournois auquel vous avez participé.', nbTournois);
        formValide = false;
    } else {
        nbTournois.classList.remove("erreur");
        erreurAlertRemove(nbTournois);
    }


    if (location) {
        erreurAlertRemove(document.getElementById('location1'));
    } else {
        erreurAlert('Vous devez choisir une option.', document.getElementById('location1'));
        formValide = false;
    }

    if (ca.checked != true) {
        ca.classList.add("erreur");
        erreurAlert('Vous devez vérifier que vous acceptez les termes et conditions.', ca);
        formValide = false;
    } else {
        ca.classList.remove("erreur");
        erreurAlertRemove(ca);
    }

    if (formValide == false) {
        // empeche le refresh
        event.preventDefault();
    } else {
        event.preventDefault();
        modalValid.style.display = "flex";
        prenom.value = '';
        nom.value = '';
        email.value = '';
        date.value = '';
        nbTournois.value = '';
        location.value = '';
    }

});



// Affiche les messages d'erreur
function erreurAlert(message, select) {
    let verif = Array.from(select.parentNode.children);
    let test = verif.filter((el) => {
        return Array.from(el.classList).includes("erreur-container");
    })

    // Si le message d'erreur n'existe pas
    if (test.length === 0) {
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
    let verif = Array.from(select.parentNode.children);
    let test = verif.filter((el) => Array.from(el.classList).includes("erreur-container"));

    if (test.length !== 0) {
        select.parentNode.removeChild(test[0]);
    }
}