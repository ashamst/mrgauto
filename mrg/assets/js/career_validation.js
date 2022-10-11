var Nerror = document.getElementById("name-error");
var Mlerror = document.getElementById("mail-error");
var Numerror = document.getElementById('number-error');
var messageError = document.getElementById('msg-error');
var Suberror = document.getElementById('sub-error');

function valName() {
    var x = document.getElementById("name");
    var name = x.value;
    if (name.length == 0) {
        x.className = "form-control is-invalid";
        Nerror.innerHTML = "Enter your name";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        Nerror.innerHTML = "Enter your full name";
        x.className = "form-control is-invalid";
        return false;
    }
    x.className = "form-control is-valid";
    Nerror.innerHTML = '';
    return true;
}

function valEmail() {
    var x = document.getElementById('email');
    var email = x.value;
    if (email.length == 0) {
        x.className = "form-control is-invalid";
        Mlerror.innerHTML = 'Enter your mail id';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        x.className = "form-control is-invalid";
        Mlerror.innerHTML = 'Enter mail id like username@example.com';
        return false;
    }
    x.className = "form-control is-valid";
    Mlerror.innerHTML = '';
    return true;

}

function valNumber() {
    var x = document.getElementById('number');
    var mobile = x.value;
    if (mobile.length == 0) {
        x.className = "form-control is-invalid";
        Numerror.innerHTML = "Enter your Mobile number";
        return false;
    }
    if (mobile.length !== 10) {
        Numerror.innerHTML = "Must contain 10 digits";
        x.className = "form-control is-invalid";
        return false;
    }
    if (!mobile.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
        x.className = "form-control is-invalid";
        Numerror.innerHTML = "Enter valid number";
        return false;
    }
    x.className = "form-control is-valid";
    Numerror.innerHTML = '';
    return true;
}

function valMsg() {
    var x = document.getElementById("message");
    var message = x.value;
    var required = 20;
    var left = required - message.length;
    if (left > 0) {
        x.className = "form-control is-invalid";
        messageError.innerHTML = left + " more charecters";
        return false;
    }
    x.className = "form-control is-valid";
    messageError.innerHTML = '';
    return true;
}

function valForm() {
    var resultName = valName();
    var resultMail = valEmail();
    var resultNumber = valNumber();
    var resultMsg = valMsg();

    if ((!resultName) && (!resultNumber) && (!resultMail) && (!resultMsg)) {
        Suberror.innerHTML = "Fill the mandatory fields";
        return false;
    } 
    else {
        return true;
        Suberror.innerHTML = "";
    }
}