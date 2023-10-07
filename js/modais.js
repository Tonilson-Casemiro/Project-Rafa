var body = document.body

// Modal adicionar produto no carrinho

overlay_modal_addProducts = document.querySelector('.overlay-modal-addProducts')
close_modal_addProducts =  document.querySelector('.close-modal-addProducts')
botoes_modal_addProducts = document.querySelectorAll('.container-buttons-modal-addProducts button')

for (const element of botoes_modal_addProducts){
  element.addEventListener('click', function(){
    overlay_modal_addProducts.classList.remove('show')
    body.classList.remove('removeOverflow')
  })
}

close_modal_addProducts.addEventListener('click', function(){
  overlay_modal_addProducts.classList.remove('show')
  body.classList.remove('removeOverflow')
})


// Modal produto já adicionado
overlay_modal_produto_adicionado = document.querySelector('.overlay-modal-productAdicionado')
close_modal_produto_adicionado = document.querySelector('.close-modal-productAdicionado')

close_modal_produto_adicionado.addEventListener('click', function(){
  overlay_modal_produto_adicionado.classList.remove('show')
  body.classList.remove('removeOverflow')
})


// Modal de detalhes do Produto
overlay_modal_view_products = document.querySelector('.overlay-modal-view-Products')
close_modal_view_produto = document.querySelector('.close-modal-view-Products')

close_modal_view_produto.addEventListener('click', function(){
  overlay_modal_view_products.classList.remove('show')
  body.classList.remove('removeOverflow')
})


// Modal de Item já existente no carrinho

overlay_modal_product_existInCar = document.querySelector('.overlay-modal-product-existInCar')
close_modal_product_existInCar = document.querySelector('.close-modal-product-existInCar')
close_modal_product_existInCar.addEventListener('click', function(){
  overlay_modal_product_existInCar.classList.remove('show')
  body.classList.remove('removeOverflow')
})



// Funcionalidades ou clicks que abriram os modais 

//Abrir modal add Product 

add_product = document.querySelectorAll('.container-icon-span-add-products')
console.log('aqui')
console.log(add_product)
for (const element of add_product){
  element.addEventListener('click', function(){
    overlay_modal_addProducts.classList.add('show')
    body.classList.add('removeOverflow')
  })
}

// Ao clicar no view products no container do produto

view_products = document.querySelectorAll('.container-img-products')

for(const element of view_products){
  element.addEventListener('click', function(){
    overlay_modal_view_products.classList.add('show')
    body.classList.add('removeOverflow')
  })
}



// Ao clicar no botao de adicionar no carrinho do Modal view details product

btn_addProduct_modalView = document.querySelector('.btn-add-product')
btn_addProduct_modalView.addEventListener('click', function(){
  // overlay_modal_addProducts.classList.add('show')
  overlay_modal_view_products.classList.remove('show')
  overlay_modal_produto_adicionado.classList.add('show')
  
})



// Após confirmar a adição do produto no carrinho ao clicar no botão sim  

btnSimAddProduct = document.querySelectorAll('.container-buttons-modal-addProducts button')
btnSimAddProduct[0].addEventListener('click', function(){
  overlay_modal_addProducts.classList.remove('show')
  overlay_modal_produto_adicionado.classList.add('show')
  body.classList.add('removeOverflow')
})






