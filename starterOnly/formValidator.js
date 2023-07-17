const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");
    console.log(document.getElementById('last').value);
});