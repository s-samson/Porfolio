// hier verranderd hij het thema van de calculator
let headerButton = document.querySelector('body');
let myButtons = document.querySelector('.themeToggle');

function changeBackground(){
    headerButton.classList.toggle ('bg_dark');
}


// rekenmachine
let display='0';
let operator=null;
let firstValue= 0;
let secondValue= 0;
let result= 0;

let displayElement=document.querySelector('.display');
let buttonsElement=document.querySelector('.buttons');

buttonsElement.addEventListener('click', manageClick);
showDisplay();

// hier kijkt de machine welke event de gebruiker kiest, en roept hij een functie aan.
function manageClick(event)
{
    const element=event.target;

    switch(element.className)
    {
        case 'btn-number':
            manageNumber(element);
            break;
        case 'btn-operator':
            manageOperator(element);
            break;
        case 'btn-dot':
            manageDot(element);
            break;
        case 'btn-clear':
            manageClear(element);
            break;
        case 'btn-equal':
            manageEqual(element);
            break;
    }
}
//  Hier voert hij de nummers in.
function manageNumber(el)
{
    let number=el.innerHTML;

    if(display==='0'){
        display=number;
    }
    else{
        display=display+number;
    }

    showDisplay();
} 
//  Hier handelt de machine de operater die de gebruiker kiest.
function manageOperator(el) {
    firstValue = display;
    display = "0";
    operator=el.innerHTML;
    showDisplay();
}

// Hier Berekent de calculator de Operators & convert de string naar getallen.
function manageEqual () {
    secondValue=display;
    display = "0";
    let one = parseFloat(firstValue);
    let two = parseFloat(secondValue);
    if (operator === "+") {
        result = one+two;
    }else if(operator === "-") {
        result = one-two;
    }else if(operator === "*") {
        result = one*two;
    }else if(operator === "/") {
        result = one/two;
    }
    display=result;
    showDisplay();

}
// Dit is de functie waarbij je maar 1 dot mag zetten per berekening.
function manageDot(el){
    let dot = el.innerHTML;
    if(!display.includes(".")){
        display=display+dot;
    }
    showDisplay();
}

// hier cleart hij de calculator
function manageClear (el) {
    display='0';
    operator= null;
    firstValue= 0;
    secondValue= 0;
    result= 0;
    displayElement.innerHTML = 0;
    showDisplay;
}
// dit is de functie om de display te showen.
function showDisplay(){
    displayElement.innerHTML=display;
}