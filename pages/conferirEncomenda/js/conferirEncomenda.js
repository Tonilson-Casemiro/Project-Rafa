
// Modal de pedido enviado

overlay_modal_pedidoEnviado = document.querySelector('.overlay-modal-pedidoEnviado')
console.log(overlay_modal_pedidoEnviado)
container_modal_pedidoEnviado = document.querySelector('.container-modal-pedidoEnviado')

function abrirModalPedidoEnviado(){
  overlay_modal_pedidoEnviado.classList.add('show')
}
function fecharModalPedidoEnviado(){
  overlay_modal_pedidoEnviado.classList.remove('show')
}