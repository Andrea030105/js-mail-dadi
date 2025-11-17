/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes! */


/* 1 - creare un arrey con delle mail preimpostate;
2 - chiedere l'emil con un prompt (in seguito con in input html);
3 - controllare con una condizione ed il falg se l'emil inserita è presente nell'arrey;
    - se c'è stampare messaggio di conferma;+
    - se non c'è stampare messagio d'errore;
 */

const arrey_mail = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com",];

const login = document.getElementById("login");

let message = document.querySelector(".message");

login.addEventListener("click", function () {

    let cerca = document.getElementById("input-email").value;

    let falg = false;

    for (i = 0; i < arrey_mail.length; i++) {

        if (arrey_mail[i] == cerca) {
            falg = true;
        }

    }

    if (falg) {
        message.innerHTML = `<h1 id="h1" class="fs-2 fw-bold" >${"Benvenuto"}</h1>`;
    } else {
        message.innerHTML = `<h1 id="h1" class="fs-2 fw-bold" >${"Inserire un emali valida"}</h1>`;
    }

})

const reset = document.getElementById("reset");

reset.addEventListener("click", function () {

    document.getElementById("input-email").value = "";

    message.removeChild(h1)

    falg = false
})