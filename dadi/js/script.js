/* Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

let player_num = Math.floor(Math.random() * 6 + 1);
let pc_num = Math.floor(Math.random() * 6 + 1);

console.log(player_num, pc_num)

if (player_num == pc_num) {
    console.log("PAREGGIO")
} else if (player_num > pc_num) {
    console.log("HAI VINTO")
} else {
    console.log("HAI PERSO")
}