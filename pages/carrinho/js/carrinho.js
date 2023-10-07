var tr  = document.querySelectorAll('table tbody tr')

var quantidadeProduto = document.querySelector('table tbody tr span.value')

function aumentarQuantProduto(parametro){
  quantidadeActual = quantidadeProduto[parametro]+1
  quantidadeProduto[parametro].innerText = quantidadeActual
}

function diminuirQuantProduto(parametro){
  if(quantidadeProduto[parametro]>=1){
    quantidadeActual = quantidadeProduto[parametro]-1
    quantidadeProduto[parametro].innerHTML = quantidadeActual
  }
  
}