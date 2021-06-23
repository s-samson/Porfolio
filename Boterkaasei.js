// Constants
const playerNameInputField = document.querySelector('.input-field-player-name');
const addPlayerButton = document.querySelector('.add-player-button');
const resetGameButton = document.querySelector('.reset-game-button');

// Player One items
const playerOneLabel = document.querySelector('.player-one-label');
const addPointsPlayerOneButton = document.querySelector('.add-points-player1-button');

// Player Two items
const playerTwoLabel = document.querySelector('.player-two-label');
const addPointsPlayerTwoButton = document.querySelector('.add-points-player2-button');

// Variables
const players = []; // Array to store (2) players

//Initialize game
resetGame(); 

// Event listeners
if (addPlayerButton) {
    addPlayerButton.addEventListener("click", addPlayer);
}

if (resetGameButton) {
	resetGameButton.addEventListener("click", resetGame);
}

if (addPointsPlayerOneButton) {
	addPointsPlayerOneButton.addEventListener("click", addPointsPlayerOne);
}

if (addPointsPlayerTwoButton) {
	addPointsPlayerTwoButton.addEventListener("click", addPointsPlayerTwo);
}

/**
 * LET OP: 🔴 Task 1 staat helemaal onderaan!
 */

// Functions
// 🔴 Task 2: create and add 2 players with this function
// First check if there are 2 players already. If so: then show an alert and do nothing
function addPlayer() {
    
    if (players.length >= 2) {
        alert("There are 2 players (or more) already. Press Reset button to start a new game.");       
        return;
    }

    const playerName = playerNameInputField.value;
    
    let symbol = "X";
    if (players.length == 1) {
        symbol = "O";
    }
    
    //We can create a new player from the Player class and add the player to the array
    const newPlayer = new Player(playerName,symbol); //Add the correct information
    //Add the new player to the players Array
    players.push(newPlayer);

    printPlayers();
}

function printPlayers() {
    playerNameInputField.value = ""; // Clear name input field

    // 🔴 Task 3: print the information contained within the 2 player-objects.
    console.log("Print your players here");
    console.log(players)
    /*
    * dit komt niet aan de orde omdat rand voorwaarde player moet ingevuld zijn dus er is altijd al een object aanwezig groter dan 0.
    */
    // // Clear player text when there are no players
    // if (players.length == 0) {
    //     console.log("No one to play");
    //     playerOneLabel.innerHTML = "Enter player one..";
    //     playerTwoLabel.innerHTML = "Enter player two..";

    //     return;
    // }

    let playersText = "";

    // Hints:
    // Create and print Player One text (playerOneLabel.innerHTML)
    // Create and print Player Two text (playerTwoLabel.innerHTML)
    // The text must contain the name, symbol and score!

    for(let i = 0; i < players.length; i++) {
        let player = players[i];
        //let playersText = "Name: " + player.playerName + "<br>"; etc..

        if (i == 0) { // Player One
            //Set text of player One label
            playerOneLabel.innerHTML= `${player.getName()}  "${player.getSymbol()}" <br> points: ${player.getPoints()}`;

            //addPointsPlayerOneButton.parentElement.style.visibility = "visible";// Show add points button
        } else if (i == 1) {            
            //Set text of player One label
            playerTwoLabel.innerHTML=`${player.getName()} "${player.getSymbol()}" <br> points: ${player.getPoints()}`;
            // addPointsPlayerTwoButton.parentElement.style.visibility = "visible";// Show add points button
        } else {
            return;
        }
    }
}

function resetGame() {
    // 🔴 Task 5: reset the game
    console.log("Resetting the game");
    players.length=0;
    playerOneLabel.innerHTML = "Player One";
    playerTwoLabel.innerHTML = "Player Two";
    handleRestartGame();

    // Hide add points buttons
    /*
    * Niet nodig punten worden automatisch berekend
    */
    //addPointsPlayerOneButton.parentElement.classList.add('hidden');
   // addPointsPlayerTwoButton.parentElement.classList.add('hidden')
    
}

function addPointsPlayerOne() {
    // 🔴 Task 4a: add a point to score of player 1
    console.log("Adding a point to score of player 1");
    players[0].addPoints();
}

function addPointsPlayerTwo() {
    // 🔴 Task 4b: add a point to score of player 2
    console.log("Adding a point to score of player 2");
    players[1].addPoints();
}

/* 
* 🟡 ADVANCED :: Combine the 2 'add points' functions above into 1 function.
*/

// 🔴 Task 1: complete the Class Player:
//Create a class method to return the name of the player (getName()...)

class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
        this.points = 0;
    }
    getName(){
        return this.name;
    }
    
    addPoints() {
        this.points += 1;
    }

    getPoints(){
        return this.points;
    }

    getSymbol(){
        return this.symbol;
    }



}
// Game mechanics
const statusDisplay = document.getElementById('game--status');


const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();


function handleCellClick(clickedCellEvent) {
    if(players.length < 2){
        alert("Er zijn nog niet genoeg spelers");
        return;
    }
    const clickedCell = clickedCellEvent.target;
    
    // hier pakken we de data-cell-index attribute van de geklikte cell zo kan je identifiseren welke cell het is  en getAttribute returnt een string en ik wil een int hebben dus moet hem converten.
    const clickedCellIndex = parseInt (
        clickedCell.getAttribute('data-cell-index')
    );


    // Hier check ik of de cell al gespeeld is of dat de game op pause staat. als deze condities waar zijn dan wordt de click genegeerd.
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    // als alles in orde is dan gaat het spel verder.
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    // als de speler de ronde wint geeft hij hier de winning Message af
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        if (currentPlayer === "X" ) {
            var player = players[0];
            player.addPoints();
            playerOneLabel.innerHTML=`${player.getName()}  "${player.getSymbol()}" <br> points: ${player.getPoints()}`;

            
        } else {
            var player = players[1];
            player.addPoints();
            playerTwoLabel.innerHTML=`${player.getName()}  "${player.getSymbol()}" <br> points: ${player.getPoints()}`;
            
        }
        gameActive = true;
        wipeBoard(`symbol ${currentPlayer} Heeft gewonnen!`);
        return;
    }
    // als de speler gelijk speelt geeft hij hier de message af.
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = true;
        
       wipeBoard("gelijkspel");
        return;
    }
    
    handlePlayerChange();
}

function wipeBoard(message){
    gameState = ["", "", "", "", "", "", "", "", ""];
    alert(message);
    document.querySelectorAll('.box')
    .forEach(cell => cell.innerHTML = "");
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    //statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.box')
    .forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.box').forEach(cell => cell.addEventListener('click', handleCellClick));
