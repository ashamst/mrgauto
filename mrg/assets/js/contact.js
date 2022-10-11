var nameError = document.getElementById('name-error');
var mailError = document.getElementById('mail-error');
var phoneError = document.getElementById('number-error');
var messageError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('name').value;
    var x = document.getElementById('name');
    if(name.length == 0){
        x.className = "form-control is-invalid";
        nameError.innerHTML = "Enter your name";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        x.className = "form-control is-invalid";
        nameError.innerHTML = "Enter your full name";
        return false;
    }
    x.className = "form-control is-valid";
    nameError.innerHTML = '';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email').value;
    var x = document.getElementById('email');
    if(email.length == 0){
        x.className = "form-control is-invalid";
        mailError.innerHTML = 'Enter your mail id';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        x.className = "form-control is-invalid";
        mailError.innerHTML = 'Enter valid mail id';
        return false;
    }
    x.className = "form-control is-valid";
    mailError.innerHTML = '';
    return true;

}
function validateMobile(){
    var mobile = document.getElementById('number').value;
    var x = document.getElementById('number');
    if(mobile.length == 0){
        x.className = "form-control is-invalid";
        phoneError.innerHTML = "Enter valid mobile number";
        return false;
    }
    if(mobile.length !== 10){
        x.className = "form-control is-invalid";
        phoneError.innerHTML = "Must contain 10 digits";
        return false;
    }
    if(!mobile.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)){
        x.className = "form-control is-invalid";
        phoneError.innerHTML = "Enter valid number";
        return false;
    }
    x.className = "form-control is-valid";
    phoneError.innerHTML = '';
    return true;
}
function validateMsg(){
    var message = document.getElementById("message").value;
    var x = document.getElementById("message");
    var required = 20;
    var left = required - message.length;
    if(left > 0){
        x.className = "form-control is-invalid";
        messageError.innerHTML = left + " more charecters";
        return false;
    }
    x.className = "form-control is-valid";
    messageError.innerHTML = '';
    return true;
}
function validateForm(){
    var nameVal = validateName();
    var mailVal = validateEmail();
    var mobVal = validateMobile();
    var msgVal = validateMsg();
    if(!nameVal || !mailVal || !mobVal || !msgVal){
        submitError.innerHTML = "Fill missing input values";
        return false;
    }
}