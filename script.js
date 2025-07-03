//  Navbar javascript
function toggleMenu (){
  var menuToggle = document.querySelector ('.toggle');
  var menu = document.querySelector ('.menu');
  menuToggle.classList.toggle('active')
    menu.classList.toggle('active')

}

// Scroll Animation
const sr = ScrollReveal({
  origin: 'top',
  distance:'85px',
  duration:2000,
  reset: true
})

sr.reveal('.home-text',{})
sr.reveal('.home-image',{dealy:200})
sr.reveal('.social',{dealy:200})

sr.reveal('.about-img',{})
sr.reveal('.heading',{dealy:200})
sr.reveal('.about-text',{dealy:200})

sr.reveal('.home-text',{})
sr.reveal('.home-img',{dealy:200})
sr.reveal('.social',{dealy:200})

sr.reveal('.service-content',{})

sr.reveal('.work-text',{})
sr.reveal('.work-img',{dealy:200})

sr.reveal('.app h1',{})
sr.reveal('.app',{dealy:200})

sr.reveal('form input',{})
sr.reveal('form textarea',{dealy:200})
sr.reveal('.app',{})

 
