

// Section Categorias

nomes_categorias = document.querySelectorAll('.container-elements-categories')
fotos_categorias = document.querySelectorAll('.img-categories')
console.log(nomes_categorias)
console.log(fotos_categorias)
var max_nomes_categorias = nomes_categorias.length
console.log(max_nomes_categorias)
var max_fotos_categorias = fotos_categorias.length
console.log(max_fotos_categorias)



function showImgCategoria(parametro){
  for(let c=0; c<=max_fotos_categorias-1;c++){
    fotos_categorias[c].classList.remove('selected')
  }
  fotos_categorias[parametro].classList.add('selected')
}













