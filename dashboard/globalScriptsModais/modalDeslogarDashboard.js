
// Modal Deslogar da Dashboard

function abrirModalDeslogar(){
  
  overlay_modal_deslogarDashboard = document.querySelector('.overlay-modal-deslogarDashboard')
  overlay_modal_deslogarDashboard.classList.add('show')

  botoes_modal_deslogarDashboard = document.querySelectorAll('.container-buttons-modal-deslogarDashboard button')

  for (const element of botoes_modal_deslogarDashboard){
    element.addEventListener('click', function(){
      overlay_modal_deslogarDashboard.classList.remove('show')
    })
  }
}

