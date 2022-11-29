let leftScore = document.querySelector(".left");
let rightScore = document.querySelector(".right");
let setPlayers = document.querySelector("#setnames");

let playerOne = document.querySelector("#playerone");
let playerTwo = document.querySelector("#playertwo");
let resetGame = document.querySelector("#reset");
let playingTo = document.querySelector("#playto");

let title = document.querySelector("h2");

setPlayers.addEventListener("click", () => {
    playerOne.innerText = prompt("Enter Player 1");
    playerTwo.innerText = prompt("Enter Player 2");
})

playerOne.addEventListener("click", () => {
    let intLS = parseInt(leftScore.innerText);
    intLS += 1;
    leftScore.innerText = intLS.toString();
    setPlayers.setAttribute("disabled", "");
    if (intLS === parseInt(playingTo.value)) {
        leftScore.classList.add("win");
        rightScore.classList.add("lose");
        playerOne.setAttribute("disabled", "");
        playerTwo.setAttribute("disabled", "");
        title.innerText = `${playerOne.innerText} wins.`;
    }
})
playerOne.addEventListener("click", () => {playingTo.setAttribute("disabled", "")});

playerTwo.addEventListener("click", () => {
    let intRS = parseInt(rightScore.innerText);
    intRS += 1;
    rightScore.innerText = intRS.toString();
    setPlayers.setAttribute("disabled", "");
    if (intRS === parseInt(playingTo.value)) {
        leftScore.classList.add("lose");
        rightScore.classList.add("win");
        playerOne.setAttribute("disabled", "");
        playerTwo.setAttribute("disabled", "");
        title.innerText = `${playerTwo.innerText} wins.`;
    }
})
playerTwo.addEventListener("click", () => {playingTo.setAttribute("disabled", "");});

resetGame.addEventListener("click", () => {
    leftScore.innerText = "0";
    leftScore.classList.remove("win", "lose");

    rightScore.innerText = "0";
    rightScore.classList.remove("win", "lose");

    playingTo.removeAttribute("disabled");
    playerOne.removeAttribute("disabled");
    playerTwo.removeAttribute("disabled");

    playerOne.innerText = "Player 1";
    playerTwo.innerText = "Player 2";

    setPlayers.removeAttribute("disabled");

    title.innerHTML = "<i>PingPong <br>Score Keeper</i>";
})