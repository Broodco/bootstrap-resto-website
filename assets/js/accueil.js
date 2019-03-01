window.onload = () => {
    var nom = prompt("Quel est votre nom?")
    if (nom == null || nom == "") {
        nom = "Joyeux Anonyme"
    }
    space = document.querySelector("#msg")
    let message = document.createElement("p")
    message.innerHTML = "Bonjour " + nom + ','
    space.prepend(message)
}