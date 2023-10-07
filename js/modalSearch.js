icons_open_modalSearch = document.querySelectorAll('.icons-search-header')
close_modalSearch = document.querySelector('.close-modal-search')
modalSearch = document.querySelector('.overlay-modal-search')


for (const element of icons_open_modalSearch){
  element.addEventListener('click', function(){
    modalSearch.classList.add('show')
    body.classList.add('removeOverflow')
})
}

close_modalSearch.addEventListener('click', function(){
  modalSearch.classList.remove('show')
  body.classList.remove('removeOverflow')
})