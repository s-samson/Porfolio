const username = document.querySelectorAll("input");
const loginButton = document.querySelector(".login-button");

loginButton.addEventListener ("click", handleLogin);

function handleLogin(){
    if (username[0].value === "Ouder" && username[1].value === "Da") {
        console.log("Logged in");
        window.location.href = "ouders.html";        
    }else {
        window.alert("Wrong password/username");
    }
}