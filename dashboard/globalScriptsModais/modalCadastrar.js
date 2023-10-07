// Modal cadastrar

// Dom do formulario
form_register = document.querySelector('#form_register')
form_register.addEventListener('submit', (e)=>{
  e.preventDefault()
})

function abrirModalCadastrar(){
  
  overlay_modal_cadastrarDashboard = document.querySelector('.overlay-modal-cadastrarDashboard')
  overlay_modal_cadastrarDashboard.classList.add('show')
  
  close_modal_cadastrarDashboard =  document.querySelector('.close-modal-cadastrarDashboard')

  close_modal_cadastrarDashboard.addEventListener('click', function(){
    overlay_modal_cadastrarDashboard.classList.remove('show')
  })

  botoes_modal_cadastrarDashboard = document.querySelectorAll('.container-buttons-modal-cadastrarDashboard button')

  
}