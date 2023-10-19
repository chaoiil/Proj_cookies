let compteur = 0;
let multiplicateur = 1;
let autoClickInterval;
let rythmeClic = 0;
let clic = 1;
let prixB = 20;
let prixD = 50;


const Logoclick = document.getElementById('Logo_click');
const span = document.getElementById('span_id');

const LogoB = document.getElementById('LogoB');
const spanB = document.getElementById('spanB');


const autoclick = document.getElementById('clickauto')
const span_auto = document.getElementById('span_id')

const clickrythme = document.getElementById('clickrythme')
const span_rythme = document.getElementById('span_rythme')


// Le clicker 
Logoclick.addEventListener("click", (event) => {
compteur += clic;
span.innerHTML = compteur

});

LogoB.addEventListener("click", (event) => {
if (compteur >= prixB) {
compteur -= prixB;
prixB += 20;
compteur.innerHTML = compteur;
spanB.innerHTML = prixB;
clic++;
} else {
alert("Vous n'avez pas suffisamment de points pour acheter SUPER MARIO !");
}
});

function DebutAutoClick() {
compteur++;
span.innerHTML = compteur;
;
}
LogoD.addEventListener("click", (event) => {
 if (compteur >= 128000) {
span.innerHTML = compteur;
const autoClickInterval = setInterval(DebutAutoClick, 100);
} 
else {
alert("Vous n'avez pas suffisamment de points pour acheter DIDIER DROGBA !");
}






});






















