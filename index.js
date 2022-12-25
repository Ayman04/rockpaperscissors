const message = document.getElementById("message");
const buttons = document.querySelectorAll("button");
const spielstand = document.getElementById("spielstand");
const againBtn = document.getElementById("tryagaindiv");
const rounds = document.getElementById("runde");
let playersChoice = "";
let computersChoice = "";
let result;
let pPlayer = 0;
let pComputer = 0;
let round = 1;

buttons.forEach(button => {
        button.addEventListener("click", (e)=>{
        if (round === 5) {
            rounds.innerHTML = round + " / 5";
        }
        if (round <= 5) {
            playersChoice = e.target.textContent;
            computersChoice = getComputersChoice();
            result = getWinner(playersChoice, "scissor");
            displayMessage(result);
            changePoints(result);
            spielstand.innerHTML = `${pPlayer} - ${pComputer}`;
            rounds.innerHTML = round + " / 5";

            round++
            
        } else {
            if(pPlayer > pComputer){
                message.innerHTML = "you won GG. Will you win again?";
            } else{
                message.innerHTML = "you are a loser. You got another chance!";
            }

            round = round + 1;
            // bug fixxen
            /* if (round <= 5) {
                changePoints(result);
                round++
                spielstand.innerHTML = `${pPlayer} - ${pComputer}`;
                rounds.innerHTML = round + " / 5";

            } */
        }
    })
});

againBtn.addEventListener("click",()=>{
    pPlayer = 0;
    pComputer = 0;
    round = 1;
    spielstand.innerHTML = `${pPlayer} - ${pComputer}`;
    message.innerHTML = "new match, new luck"
})


function getWinner(player,computer){
    if (player.toLowerCase() === computer.toLowerCase()) {
        return "tie"
    } else if (player === "rock" && computer === "paper") {
        return "lost"
    } else if (player === "rock" && computer === "scissor") {
        return "won"
    } else if (player === "paper" && computer === "scissor") {
        return "lost"
    } else if (player === "paper" && computer === "rock") {
        return "won"
    } else if (player === "scissor" && computer === "rock") {
        return "lost"
    } else if (player === "scissor" && computer === "paper") {
        return "won"
    }
}

function getComputersChoice(){
    let num = Math.random();
    if(num <= 0.33){
        return "rock"
    } else if(num >= 0.33 && num < 0.66){
        return "scissor"
    } else {
        return "paper"
    }
}

function displayMessage(result){
    if(result === "won"){
        message.innerHTML = "WOW! you won"
    } else if(result === "lost"){
        message.innerHTML = "HAHA! you lost"
    } else {
        message.innerHTML = "TIE! two idiots with one thought"
    }
}

function changePoints(result){
    if (result === "won") {
        pPlayer++
    } else if (result === "lost") {
        pComputer++
    }
}



