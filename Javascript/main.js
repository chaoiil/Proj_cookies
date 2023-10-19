let compteur = 0;
let multiplicateur = 1;
let autoClickInterval;
let autoClickIntervalL;
let clic = 1;
let prixB = 20;
let couleur_bouton;

const logoclick = document.getElementById('Logo_click');
const span = document.getElementById('span_id');
const logoB = document.getElementById('LogoB');
const spanB = document.getElementById('spanB');
const logoL = document.getElementById('LogoL');
const spanL = document.getElementById('spanL');
const autoclick = document.getElementById('clickauto')
const span_auto = document.getElementById('span_id')


// Le clicker 
logoclick.addEventListener("click", (event) => {
  compteur += clic;
  span.innerHTML = compteur
});

// Le cliquer augmente a chaque click et augmente le prix

logoB.addEventListener("click", (event) => {
  if (compteur >= prixB) {
    compteur -= prixB;
    prixB += 20;
    span.innerHTML = compteur;
    spanB.innerHTML = prixB;
    clic++;
    colour();
  } else {
   alert("Vous n'avez pas suffisamment de points pour acheter SUPER MARIO !");
  }
});

// Auto cliquer que tu debloques des que tu auras atteint 128 000 euros
function DebutAutoClick() {
  compteur++;
  colour();
  span.innerHTML = compteur;
}
logoD.addEventListener("click", (event) => {
if (compteur >= 128000) {
  span.innerHTML = compteur;
  const autoClickInterval = setInterval(DebutAutoClick, 100);
} 
else {
  alert("Vous n'avez pas suffisamment de points pour acheter DIDIER DROGBA !");
}
});
// Pendant 5 secondes le clique se multiplie par 3  
function DebutAutoClickLass() {
  compteur *= 3;
  colour();
  span.innerHTML = compteur;
}
const autoClickInterval2 = setTimeout(DebutAutoClickLass, 5000);
logoL.addEventListener("click", (event) => {
  if (compteur >= 200000) {
    span.innerHTML = compteur;
    const autoClickInterval2 = setInterval(DebutAutoClickLass, 1000);
    setTimeout(() => {
      clearInterval(autoClickInterval2); 
      }, 3000
    );
  }
  else {
   alert("Vous n'avez pas suffisamment de points pour acheter LASSANA DIARRA!");
  }
});
























