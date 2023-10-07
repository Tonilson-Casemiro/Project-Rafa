// Scroll Reveal

var scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:700,
  reset: true
})

scrollReveal.reveal(
 `.container-section1 .text-big, 
  .container-section1 .text-small, 
  .container-informacion-about-site,
  .container-info-section3,
  .container-info-section3 .img-back,
  .container-info-section3 .img-front,
  #section-slides-marcas
  
  `
   
,{interval: 100}
)

