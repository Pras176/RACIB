var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var regEx = /^[a-zA-Z0-9-]+@[a-zA-Z-]+[a-zA-Z0-9-]/;
var passw=  /^[A-Za-z0-9]\w{5,20}$/;
var form = document.querySelector('.form');

function validateForm(){
    if ( regEx.test(inputEmail.value) && passw.test(inputPassword.value) && inputMessage.value !== ""){
       button.style.backgroundColor = 'blue';
       button.disabled = false;
    } else {
       button.style.backgroundColor = '#c5dce7';
       button.disabled = true;
    }
}
form.addEventListener('submit', function(event){
     event.preventDefault();
     alert("Login Successfully");

})