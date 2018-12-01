function loginFunc(){
  let usuario = document.getElementById('nombreUsuario');
  let passOne = document.getElementById('passOne');
  if( usuario.value != '' && passOne.value != ''){
    
  }else{
    alert('Acceso denegado');
  }
}

function signUp(){
  let nombreCompleto = document.getElementById('nombreCompleto');
  let usuario        = document.getElementById('usuario');
  let date           = document.getElementById('date');
  let passwordOne    = document.getElementById('passwordOne');
  let passwordTwo    = document.getElementById('passwordTwo');
  let completeForm   = false;
  let samePassword   = false;
  if(nombreCompleto.value != '' && usuario != ''.value && date.value != '' && passwordOne != '' && passwordTwo !='') completeForm = true;
  if( passwordOne.value == passwordTwo.value ) samePassword = true
  else( alert('Verifica tu contraseña'))
  if( samePassword && completeForm){
    window.location.replace("profile.html");
  }
}

function loginRedirect(){
  let usuario = document.getElementById('nombreUsuario');
  usuario.focus();
}

function modalSignUp(){
  let modal = document.getElementById('modalRegistro');
  modal.classList.remove('noMostrar');
}

function selectInput(x){
  let allInputs = document.getElementsByClassName('registroInput');
  for( let i = 0; i < allInputs.length; i++ ){
    allInputs[i].classList.remove('select');
  }
  x.classList.add('select');
}

function closeModalRegister(){
  let modal          = document.getElementById('modalRegistro');
  let nombreCompleto = document.getElementById('nombreCompleto');
  let usuario        = document.getElementById('usuario');
  let date           = document.getElementById('date');
  let passwordOne    = document.getElementById('passwordOne');
  let passwordTwo    = document.getElementById('passwordTwo');

  nombreCompleto.value = "";
  usuario.value        = "";
  date.value           = "";
  passwordOne.value    = "";
  passwordTwo.value    = "";
  modal.classList.add('noMostrar');
}
