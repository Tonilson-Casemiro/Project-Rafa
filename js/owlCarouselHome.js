$(document).ready(function(){

  
  // owl carousel imagens Destaque

  $(".slidesImgsDestaques").owlCarousel({
    items : 4,
    loop : true,
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

      614:{
        items: 2
      },

      900:{
        items: 3
      },

      1000:{
        items: 4
      }
    }

    
  })

  // owl carousel Products

  $(".slidesProducts").owlCarousel({
    items: 4,
    margin : 10,
    nav : false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    startPosition: 1,
    slideBy: 1,
    // slideTransition: 'ease',
    rtl: false,
    
    responsive:{
      0:{
        items: 1
      },
      650:{
        items: 2
      },

      800:{
        items: 3
      },

      1100:{
        items: 4
      },

    }

    
  })




  // owl carousel Blogs
  $(".slidesBlogs").owlCarousel({
    items: 3,
    margin : 10,
    nav : false,
    // autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    startPosition: 1,
    slideBy: 1,
    // slideTransition: 'ease',
    rtl: false,
    
    responsive:{
      0:{
        items: 1
      },
      530:{
        items: 2
      },

      1040:{
        items: 3
      },
    }
    
  })
});

