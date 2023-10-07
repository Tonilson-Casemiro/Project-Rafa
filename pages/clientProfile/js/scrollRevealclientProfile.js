// Scroll Reveal

var scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:700,
  reset: true
})

scrollReveal.reveal(
  `.itens-userProfile a,
    .section-userProfile p,
    .section-userProfile h1
  ` 
,{interval: 100}
)