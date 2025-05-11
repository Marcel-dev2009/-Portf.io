const texts = [" a Nollywood Film Director", " an Actor", " a Film maker", " a Content Creator"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function typeEffect() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(eraseEffect, 1500); // wait before erasing
  } else {
    setTimeout(typeEffect, 150);
  }
}

function eraseEffect() {
  letter = currentText.slice(0, --index);
  document.querySelector(".typing").textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(eraseEffect, 100);
  }
}

typeEffect();

 const heroINtro = [
  `I am Johnpaul Nwanganga a distinguished filmmaker, director, and actor with a proven track record in the Nigerian film industry. 
  Having honed my craft through various roles, including production assistant and crew positions, I have risen to prominence as a prolific director, 
  known for my compelling storytelling and technical expertise.
  A respected leader in the industry, I serve as the National Director of Social and 
  Welfare for the Directors Guild of Nigeria (DGN). I previously held esteemed positions,
  including President of the Igbo   filmmakers & Igbo Movie Producers Association of Nigeria (IMPAN)
  and Chapter Chairman of the Association of Movie Producers (AMP), Enugu State Chapter. Update Member 
  of Actors Guild of Nigeria.`

];

let text = 0;
let key  = 0;
let mainText = '';
let wordsDisplayed = '';

function DynamicIntro() {
   if (text === heroINtro.length) {
       text = 0;
   } 
   mainText = heroINtro[text];
   wordsDisplayed = mainText.slice(0, ++key);
  
   document.querySelector(".introduction").textContent = wordsDisplayed;
     setTimeout(DynamicIntro, 50);
} 


  DynamicIntro(); 

