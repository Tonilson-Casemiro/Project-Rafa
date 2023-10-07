
// Modal de detalhes 

function abrirModalViewDetails(){
  overlay_modal_viewDetails = document.querySelector('.overlay-modal-viewDetails')
  overlay_modal_viewDetails.classList.add('show')
  close_modal_viewDetails = document.querySelector('.container-modal-viewDetails .close-modal-viewDetails')

  close_modal_viewDetails.addEventListener('click', function(){
    overlay_modal_viewDetails.classList.remove('show')
  })

}