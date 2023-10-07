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
 #iframe,
 .container-content-ourContacts, 
 .form-send-message`
,{interval: 100}
)