body = document.body

// Modal video - aboutUS

open_modal_video = document.querySelector('.img-play')
overlay_modal_video = document.querySelector('.overlay-modal-video')
close_modal_video = document.querySelector('.close-modal-video')

open_modal_video.addEventListener('click', function(){
  overlay_modal_video.classList.add('show')
  body.classList.add('removeOverflow')
})

close_modal_video.addEventListener('click', function(){
  overlay_modal_video.classList.remove('show')
  body.classList.remove('removeOverflow')
})



// carousel team

$(".carouselTeam").owlCarousel({
  items : 3,
  // loop : true,
  margin : 10,
  nav : false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  startPosition: 1,
  slideBy: 1,
  // slideTransition: 'ease',
  rtl: false,
  responsive: {
    0:{
      items: 1
    },



    780:{
      items: 2
    },

    1040:{
      items: 3
    },
    
  }

  
})


// Scroll Reveal

// var scrollReveal = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration:700,
//   reset: true
// })

// scrollReveal.reveal(
//  `
//   `
   
// ,{interval: 100}
// )

