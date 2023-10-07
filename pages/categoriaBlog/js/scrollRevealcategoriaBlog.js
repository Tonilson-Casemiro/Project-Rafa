// Scroll Reveal

var scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:700,
  reset: true
})

scrollReveal.reveal(
  `.section-RefPage .pageName,
    .section-RefPage .container-referencePage,
    .container-blog-relacionado,
    .button-viewMore-blogs`
   
,{interval: 100}
)