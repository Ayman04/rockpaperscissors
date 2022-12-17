function getComputerChoice(){
    let num = Math.random();

    if(num <= 0.33){
        return "rock"
    } else if(num >= 0.33 && num < 0.66){
        return "scissor"
    } else {
        return "paper"
    }
}

function match(player,computer){
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


function message(type, decision){
    if(type === "won"){
        console.log("congrats, you won! The computer chose "+ decision);
    } else if(type === "lost"){
        console.log("you lost :( The computer chose " + decision);
    } else{
        console.log("TIE!");
    }
}

function game(){
    let pPlayer = 0;
    let pComputer = 0
    for(let i = 0; i < 5; i++){
        let player = prompt("type `rock` `paper` or `scissor`");
        let result = match(player.toLowerCase(), getComputerChoice());

        if( result === "won"){
            pPlayer++
        } else if(result === "lost"){
            pComputer++
        }

     console.log(pPlayer, pComputer);

    }


}

game()