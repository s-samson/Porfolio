
function myFunction(button) {
    console.log(button.style.backgroundColor)

    if(button.style.backgroundColor === 'rgb(128, 201, 4)'){

        button.style.backgroundColor = 'rgb(169, 0, 65 )';
        alert("Je doet niet meer mee!")
        button.innerHTML = "Mee doen "

    } else {    
        button.style.backgroundColor='rgb(128, 201, 4)';
        window.alert("Je doet mee!");
        button.innerHTML = "Niet mee doen?"
    }
};






