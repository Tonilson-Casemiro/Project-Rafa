
// Menu lateral dashboard e mobile
// Toggle menu lateral

var containerMenuLateral = document.querySelector('.container-menuLateral')
var iconMenuMobile = document.documentElement.querySelector('.containerTop .fa-bars')

iconMenuMobile.addEventListener('click',()=>{
  containerMenuLateral.classList.toggle('show')
})