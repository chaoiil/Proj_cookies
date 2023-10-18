let compter = 0;

const Logoclick = document.getElementById('Logo_click');
const span = document.getElementById('span_id');

Logoclick.addEventListener("click", (event) => {
  compter++;
  span.innerHTML = compter;
});

const autoClick = setInterval(DebutAutoClick, Interval);

function DebutAutoClick() {
  compter++;
  span.innerHTML = compter;
}

function ArretAutoClick() {
  clearInterval(autoClick);
}

document.addEventListener('Touche', (event) => {
  if (event === 'v' || event === 'V') {
    DebutAutoClick(); 
  } else if (event === 'b' || event === 'B') {
    ArretAutoClick(); 
  }
});

















