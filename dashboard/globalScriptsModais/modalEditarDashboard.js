// Modal cadastrar

function abrirModalEditar(){
  
  overlay_modal_editarDashboard = document.querySelector('.overlay-modal-editarDashboard')
  overlay_modal_editarDashboard.classList.add('show')
  
  close_modal_editarDashboard =  document.querySelector('.close-modal-editarDashboard')

  close_modal_editarDashboard.addEventListener('click', function(){
    overlay_modal_editarDashboard.classList.remove('show')
  })

  botoes_modal_editarDashboard = document.querySelectorAll('.container-buttons-modal-editarDashboard button')

  for (const element of botoes_modal_editarDashboard){
    element.addEventListener('click', function(){
      overlay_modal_editarDashboard.classList.remove('show')
    })
  }
}