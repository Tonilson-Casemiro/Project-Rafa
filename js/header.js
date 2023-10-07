// Variaveis do header declaradas 

var itens_menu = document.querySelectorAll('.item-menu')
var header = document.querySelector('header')
var top_informacion = document.querySelector('.container-content-top') 
var nav = document.querySelector('nav.navigation-area')
var ul = document.querySelector('ul')
var toggle = document.querySelectorAll('.toggle')
var botaoLogin_MenuMobile = document.querySelector('.li-container-btn-login')
var body = document.body
var buttonOpenMenuMobile = document.querySelector('#open-menu')
var buttonCloseMenuMobile = document.querySelector('#close-menu')




// Aparecer a informação de carrinho vazio quando o carrinho for 0

var containerCarrinhoHeader = document.querySelector('.container-icon-carrinho-header')
var containerCarrinhovazio = document.querySelector('.container-info-carrinhoEmpty')

containerCarrinhoHeader.addEventListener('click', function(){
  containerCarrinhovazio.classList.toggle('aparecercontainer-info-carrinhoEmpty')
})

window.addEventListener('scroll', function(){
  containerCarrinhovazio.classList.remove('aparecercontainer-info-carrinhoEmpty')
})




// 1 - Menu Mobile

// 1.1 - Retirando show ao recarregar a pagina
document.body.addEventListener('load',function(){
  nav.classList.remove('show')
  body.classList.remove('removeOverflow')
})

// colocando e retirando o show do nav ao clicar no icon open e close menu
for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
    // ul.classList.add('animacaoMenuMobile')
  })
}

// Retirando o overFlow do body ao abrir o menu mobile]
buttonOpenMenuMobile.addEventListener('click',function(){
  body.classList.add('removeOverflow')
})
buttonCloseMenuMobile.addEventListener('click',function(){
  body.classList.remove('removeOverflow')
})




// Retirando o show no nav ao clicar em um dos itens de menu
for (const element of itens_menu){
  element.addEventListener('click', function(){
    nav.classList.remove('show')
    body.classList.remove('removeOverflow')
  })
}

// Retirando o show no nav ao clicar no li botão de Login
botaoLogin_MenuMobile.addEventListener('click', function(){
  nav.classList.remove('show')
})

// 1.2 - Retirando o Show ao clicar na camada escura
var camadaEscura = document.querySelector('#camada-escura')
camadaEscura.addEventListener('click', function(){
  nav.classList.remove('show')
  body.classList.remove('removeOverflow')
})





// 2 - Ao scrollar a pagina é retirado a informação do topo e acrescentado o box-shadow no Header
window.addEventListener('scroll', function(){
  if(scrollY >= 50){
    header.style.boxShadow = '#11111170 1px 1px 8px'
    top_informacion.classList.add('desaparecer')
  
  }
  else{
    header.style.boxShadow = '#11111157 .8px .8px 2px'
    top_informacion.classList.remove('desaparecer')
  }
})







