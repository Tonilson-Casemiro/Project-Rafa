
// owl carousel marcas

$(".slidesMarcas").owlCarousel({
  items : 5,
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
      items: 2
    },

    540:{
      items: 3
    },

    900:{
      items: 3
    },

    1080:{
      items: 5
    },

    
  }

  
})
