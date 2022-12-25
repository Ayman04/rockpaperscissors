function getWinner(player,computer){
    if (player.toLowerCase() === computer.toLowerCase()) {
        message("tie")
        return "tie"
    } else if (player === "rock" && computer === "paper") {
        message("lost", "paper")
        return "lost"
    } else if (player === "rock" && computer === "scissor") {
        message("won", "scissor")
        return "won"
    } else if (player === "paper" && computer === "scissor") {
        message("lost", "scissor")
        return "lost"
    } else if (player === "paper" && computer === "rock") {
        message("won", "rock")
        return "won"
    } else if (player === "scissor" && computer === "rock") {
        message("lost", "rock")
        return "lost"
    } else if (player === "scissor" && computer === "paper") {
        message("won", "rock")
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

const buttons = document.getElementsByTagName("button");
let playersChoice = "";
let computersChoice = ""

