// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


// FUNZIONI
function generateBoombs(min, max) {
  // creo un array dove pushare i numeri bomba
  const bombs = [];
  // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
  while(bombs.length < 16){
    const bomb = Math.floor(Math.random() * (max - min + 1)) + min;
    if (bombs.includes(bomb)) {
      
    } else {
      bombs.push(bomb);
    }
  }
  return bombs;
}

// let bombe = generateBoombs (1, 81);
// console.log(bombe);
// /FUNZIONI

// prendo il bottone per avviare lo script
const playBtn = document.getElementById('play');

// creo l'evento al click
playBtn.addEventListener ('click', function () 
{
  // quando clicco pulisce tutto l'html per evitare di stampare a all'infinito
  const container = document.getElementById('gridContainer');
  container.innerHTML = '';
  // ccontrollo il valore scelto dall'utente
  const difficult = document.getElementById('difficulty').value;
  console.log(difficult);
  
  // questa variabile mi serve per nascondere il grid
  let hidden = document.querySelector('.hidden');
  
  // creo le condizioni
  if (difficult == 'easy') {
    // creo la griglia del livello easy 10x10
    const rowEasy = 10;
    const colEasy = 10;
    const numberSquareEasy = rowEasy * colEasy;
    let bombe = generateBoombs (1, 100);
    console.log(bombe);
   
    // seleziono il mio container per creargli all'interno dei div
    document.getElementById('gridConatiner');
    
    hidden.classList.add('active');
    // creo un ciclo for per creare tanti div con all'interno dei numeri
    for (let i = 1; i <= numberSquareEasy; i++) {
      const square = document.createElement('div');
      square.classList.add('square', 'easy');
      // console.log(square);
      square.innerHTML = i;
      gridContainer.append(square);

      // se clicco sullo square questo cambia colore
      square.addEventListener('click', function () {
        const element = this;
        element.classList.add('blue');
      });
    }
  } else if (difficult == 'medium') {
    // creo la griglia del livello medium 9x9
    const rowMedium = 9;
    const colMedium = 9;
    const numberSquareMedium = rowMedium * colMedium;
    let bombe = generateBoombs (1, 81);
    console.log(bombe);

    hidden.classList.add('active');
    for (let i = 1; i <= numberSquareMedium; i++) {
      const square = document.createElement('div');
      square.classList.add('square', 'medium');
      // console.log(square);
      square.innerHTML = i;
      gridContainer.append(square);

      // se clicco sullo square questo cambia colore
      square.addEventListener('click', function () {
        const element = this;
        element.classList.add('blue');
      });
    }
  }  else if (difficult == 'hard') {
    // creo la griglia del livello hard 7x7
    const rowHard = 7;
    const colHard = 7;
    const numberSquareHard = rowHard * colHard;
    let bombe = generateBoombs (1, 49);
    console.log(bombe);

    hidden.classList.add('active');
    for (let i = 1; i <= numberSquareHard; i++) {
      let square = document.createElement('div');
      square.classList.add('square', 'hard');
      // console.log(square);
      square.innerHTML = i;
      gridContainer.append(square);
      
      // se clicco sullo square questo cambia colore
      square.addEventListener('click', function () {
        const element = this;
        element.classList.add('blue');
      });
    }
  }
});

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.







