// Animacion icon Back to top

var ContainerBackToTopButton = document.querySelector('.container-icon-back-to-top')
window.addEventListener('scroll', function(){
  if(window.scrollY >= 300){
    ContainerBackToTopButton.classList.add('showBackToTop')
  }
  else{
    ContainerBackToTopButton.classList.remove('showBackToTop')
  }
})