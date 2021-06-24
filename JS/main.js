const panicButton = document.querySelector(".paniek-knop")

panicButton.addEventListener("click", handlePanic);

function handlePanic() {
    window.alert("Je ouders/verzorgers worden gecontacteerd.")
}