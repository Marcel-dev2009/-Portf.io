import { ContentLoaded } from './dom.js';
import { devService ,  faqContent} from './src.js';


const menuToggle = document.querySelector('.menu-toggle')
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
})

   document.addEventListener('DOMContentLoaded', () => {
      ContentLoaded();
    })

  
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
            header.style.backgroundColor = 'rgba(35,28,63,1)'; 
          } else {
            header.style.backgroundColor = 'transparent'; 
          }
        })
        AOS.init({
          once: false, 
          mirror: true,   
          delay: 0,       
          duration: 800,  
          easing: 'ease-in-out', 
          offset: 10,    
        });
        const swiper = new Swiper('.swiper', {
          loop: true, 
          slidesPerView: 0, 
          spaceBetween: 20, 
        
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
 
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        
      
          autoplay: {
            delay: 2500, // 2.5 seconds
            disableOnInteraction: false,
          },
        });
        
    
    let ServiceHTML = '';
    devService.forEach((service , index) =>{
        ServiceHTML += `
            <figure>
      <img src="${service.image}" alt="This is the icon of the service we offer " loading="lazy" width="300px" height="250px">
          <figcaption>
      <h4 class="text-${index}">${service.text}</h4>
    <p class="info-${index}">${service.info}</p>
                              
          </figcaption>
        </figure>
        `
    });
      document.querySelector('.service-content').innerHTML = ServiceHTML;
// Initialize the Swiper slider
const slider = new Swiper('.swiper', {
  effect: 'cards',
  grabCursor: true,
  initialSlide: 4,
  speed: 500,
  rotate: true,
  mousewheel: {
    invert: false,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  observer: true, 
  observeParents: true,
  slideShadows: false,
  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },
  breakpoints: {
    450: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// Set up Intersection Observer to pause/play the slider when visibility changes
const swiperContainer = document.querySelector('.swiper');

// Create options for the observer
const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.1 // Trigger when at least 10% of the element is visible
};

// Create the Intersection Observer
const swiperObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is visible in the viewport, start autoplay
      if (slider.autoplay && slider.autoplay.paused) {
        slider.autoplay.start();
        console.log('Slider is visible, autoplay started');
      }
    } else {
      // Element is not visible in the viewport, pause autoplay
      if (slider.autoplay && !slider.autoplay.paused) {
        slider.autoplay.stop();
        console.log('Slider is not visible, autoplay stopped');
      }
    }
  });
}, observerOptions);

// Start observing the Swiper container
swiperObserver.observe(swiperContainer);

// Optional: Clean up the observer when no longer needed
// Example: If the slider is part of a single-page application that may unmount components
function cleanupObserver() {
  if (swiperObserver && swiperContainer) {
    swiperObserver.unobserve(swiperContainer);
    swiperObserver.disconnect();
  }
}
      let faqHTML = '';
      faqContent.forEach((content) => {
         faqHTML += `
        <div class="faq">
               <button class="faq-question">${content.Question}</button>  <br>
                      <div class="faq-answer">
                      <p>
                      ${content.Answer}
                      </p>
                        </div>   <!-- answer end -->
                        </div>
                    
         `;
      })
      document.querySelector('.faq-container').innerHTML = faqHTML;

      document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
          const faq = button.closest('.faq'); // Find the closest parent .faq
          faq.classList.toggle('open'); // Toggle the open class on that specific FAQ
        });
      });
    
      function sendMail() {
        let params = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value,
        };
      
        emailjs.send('service_0tc45mg', 'template_jn0hl7d', params)
          .then(function(response) {
            alert('Email sent!');
          }, function(error) {
            alert('FAILED... ' + JSON.stringify(error));
          });
      }
      
      document.getElementById('submit-btn').addEventListener('click', function (e) {
        e.preventDefault(); // prevent form reload if inside a <form>
        sendMail();
      });
      
      
        
     
         