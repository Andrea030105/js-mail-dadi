/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes! */


/* 1 - creare un arrey con delle mail preimpostate;
2 - chiedere l'emil con un prompt (in seguito con in input html);
3 - controllare con una condizione ed il falg se l'emil inserita è presente nell'arrey;
    - se c'è stampare messaggio di conferma;+
    - se non c'è stampare messagio d'errore;
 */

const arrey_mail = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com",];

let cerca = prompt("Inserisci l'email!");
let falg = false

for (i = 0; i < arrey_mail.length; i++) {

    if (arrey_mail[i] == cerca) {
        falg = true
    }

}

if (falg) {
    console.log("Benvenuto")
} else {
    console.log("Inserire un emali valida")
}