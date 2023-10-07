

function abrirModalEfectuado(){
  
  overlay_modal_efectuado = document.querySelector('.overlay-modal-efectuado')
  overlay_modal_efectuado.classList.add('show')
  close_modal_efectuado = document.querySelector('.close-modal-efectuado')

  close_modal_efectuado.addEventListener('click', function(){
    overlay_modal_efectuado.classList.remove('show')
  })
}
