// window.onload = () => {
//
// }

function loginFunc(){
  let usuario = document.getElementById('nombreUsuario');
  let passOne = document.getElementById('passOne');

}

function signUp(){
  let nombreCompleto = document.getElementById('nombreCompleto');
  let usuario        = document.getElementById('usuario');
  let date           = document.getElementById('date');
  let passwordOne    = document.getElementById('passwordOne');
  let passwordTwo    = document.getElementById('passwordTwo');
  console.log(nombreCompleto.value + " " + usuario.value + " " + date.value + " " + passwordOne.value + " " + passwordTwo.value);
}

function loginRedirect(){
  let usuario = document.getElementById('nombreUsuario');
  usuario.focus();
}

function modalSignUp(){
  let modal = document.getElementById('modalRegistro');
  modal.classList.remove('noMostrar');
  closeModalClick();
}

function selectInput(x){
  let allInputs = document.getElementsByClassName('registroInput');
  for( let i = 0; i < allInputs.length; i++ ){
    allInputs[i].classList.remove('select');
  }
  x.classList.add('select');
}

function closeModalClick(){
  let form       = document.getElementById('registro');
  let modal      = document.getElementById('modalRegistro');
  let formTouch  = false;
  let modalTouch = false;
  modal.addEventListener('click', () => {
    modalTouch = true;
    console.log('si');
  });
  form.addEventListener('click', () => {
    formTouch = true;
  });
  console.log("modal"+modalTouch);
  console.log(formTouch);
  if( modalTouch == true && formTouch == false){
    let modal = document.getElementById('modalRegistro');
    modal.classList.add('noMostrar');
    console.log('hi');
  }
}
