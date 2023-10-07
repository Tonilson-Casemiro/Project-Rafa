function showPassword(){
  inputPassword = document.querySelector('#password')
  iconEye = document.querySelector('#icon-eye')

  if(inputPassword.type === 'password'){
    inputPassword.setAttribute('type','text')
    iconEye.classList.replace('fa-eye-slash','fa-eye')

  }else{
    inputPassword.setAttribute('type','password')
    iconEye.classList.replace('fa-eye','fa-eye-slash')
  }
   
}