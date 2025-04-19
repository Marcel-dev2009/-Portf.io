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


/* 
window.addEventListener("scroll", () => {

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } 
        if(menuToggle.classList.contains("open")){
            menuToggle.classList.remove("open");
        }
            if (blurEFFECT.classList.contains("menu-open")) {
                blurEFFECT.classList.remove("menu-open");
                
            }
                    if (blur.classList.contains("menu-open")) {
                        blur.classList.remove("menu-open");
                    }
                }) */
