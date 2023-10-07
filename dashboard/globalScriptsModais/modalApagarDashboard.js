
// Modal Deslogar da Dashboard

function abrirModalApagar(){
  
  overlay_modal_apagarDashboard = document.querySelector('.overlay-modal-apagarDashboard')
  overlay_modal_apagarDashboard.classList.add('show')

  botoes_modal_apagarDashboard = document.querySelectorAll('.container-buttons-modal-apagarDashboard button')

  for (const element of botoes_modal_apagarDashboard){
    element.addEventListener('click', function(){
      overlay_modal_apagarDashboard.classList.remove('show')
    })
  }
}