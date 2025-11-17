/* Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const roll = document.getElementById("roll");


roll.addEventListener("click", function () {

    let player_num = Math.floor(Math.random() * 6 + 1);
    let pc_num = Math.floor(Math.random() * 6 + 1);
    let result_message;

    if (player_num == pc_num) {
        result_message = "PAREGGIO";
        console.log("PAREGGIO")
    } else if (player_num > pc_num) {
        result_message = "HAI VINTO";
        console.log("HAI VINTO")
    } else {
        result_message = "HAI PERSO";
        console.log("HAI PERSO")
    }

    let dado_player = document.querySelector(".dado-player")
    dado_player.innerHTML = player_num
    let dado_pc = document.querySelector(".dado-pc")
    dado_pc.innerHTML = pc_num

    let result = document.querySelector(".result");
    result.innerHTML = result_message
})
