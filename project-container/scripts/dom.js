  export function ContentLoaded () {
    const icon = document.querySelector('.icon');

    if (icon){
     icon.stop();

     const observer = new IntersectionObserver((entries) => {
       const entry =  entries[0];
       if (entry.isIntersecting){
         icon.play();
       } else {
         icon.stop();
       }

     })
     observer.observe(icon);
    }
} 