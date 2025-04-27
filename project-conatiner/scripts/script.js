import { ContentLoaded } from './dom.js';

/* const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  menu.classList.toggle('active');
})

window.addEventListener('scroll',() => {
   if (menu.classList.contains('active')){
    menu.classList.remove('active');
   }
   if(menuToggle.classList.contains('open')){
    menuToggle.classList.remove('open')
   }
         if(menu.classList.contains('active')){
          body.classList.toggle('blurEffect')
         }  
}) */

   document.addEventListener('DOMContentLoaded', () => {
      ContentLoaded();
    })

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
   const loader = document.getElementById('preLoader');
   window.addEventListener('load',() => {
     setTimeout(() => {
       loader.style.display = 'none';
       document.body.classList.add('fade-in');
     }, 1000);
     
   })
    window.addEventListener('load', () => {
      const slide = document.querySelector('.slide');
      slide.classList.add('slide--show-in');
    })
    const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) { 
            header.style.backgroundColor = 'rgba(35,28,63,1)'; // add your color
          } else {
            header.style.backgroundColor = 'transparent'; // back to transparent
          }
        })
        AOS.init({
          once: false,    // Animate every time you scroll up and down (optional)
          mirror: true,   // Animate when scrolling up too (optional)
          delay: 0,       // No delay, animate immediately
          duration: 800,  // Speed of animation (milliseconds)
          easing: 'ease-in-out', // Smooth animation
          offset: 10,    // Distance (px) before triggering animation
        });
        const swiper = new Swiper('.swiper', {
          loop: true, // Infinite scroll
          slidesPerView: 1, // One image visible at a time
          spaceBetween: 20, // Space between slides (optional)
        
          // If you want next/prev buttons
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // If you want pagination bullets
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        
          // If you want autoplay (optional)
          autoplay: {
            delay: 2500, // 2.5 seconds
            disableOnInteraction: false,
          },
        });
        