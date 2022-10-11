var Nerror = document.getElementById("name-error");
var Numerror = document.getElementById("number-error");
var Mlerror = document.getElementById("mail-error");
var Dterror = document.getElementById("date-error");
var Tmerror = document.getElementById("time-error");
var Mdlerror = document.getElementById("model-error");
var Suberror = document.getElementById("submit-error");

function valName(){
    var x = document.getElementById("name");
    var name = x.value;
    if(name.length == 0){
        x.className = "form-control is-invalid";
        Nerror.innerHTML = "Enter your name";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        Nerror.innerHTML = "Enter your full name";
        x.className = "form-control is-invalid";
        return false;
    }
    x.className = "form-control is-valid";
    Nerror.innerHTML = '';
    return true;
}

function valNumber() {
    var mobile = document.getElementById('number').value;
    var x = document.getElementById('number');
    if (mobile.length == 0) {
        x.className = "form-control is-invalid";
        Numerror.innerHTML = "Enter valid mobile number";
        return false;
    }
    if (mobile.length !== 10) {
        x.className = "form-control is-invalid";
        Numerror.innerHTML = "Must contain 10 digits";
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

function valEmail() {
    var email = document.getElementById('mail').value;
    var x = document.getElementById('mail');
    if (email.length == 0) {
        x.className = "form-control is-invalid";
        Mlerror.innerHTML = 'Enter your mail id';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        x.className = "form-control is-invalid";
        Mlerror.innerHTML = 'Enter valid mail id';
        return false;
    }
    x.className = "form-control is-valid";
    Mlerror.innerHTML = '';
    return true;

}
function valDate(){      
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
    var x = document.getElementById('date');
    var dateString = document.getElementById('date').value;

    // Match the date format through regular expression      
    if(dateString.match(dateformat)){      
        let operator = dateString.split('/');      
      
        // Extract the string into month, date and year      
        let datepart = [];      
        if (operator.length>1){      
            datepart = dateString.split('/');      
        }      
        let month= parseInt(datepart[0]);      
        let day = parseInt(datepart[1]);      
        let year = parseInt(datepart[2]);      
              
        // Create list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
        if (month==1 || month>2){      
            if (day>ListofDays[month-1]){      
                ///This check is for Confirming that the date is not out of its range 
                x.className = "form-control is-invalid";
                Dterror.innerHTML = "Invalid date format";    
                return false;            
            }      
        }else if (month==2){      
            let leapYear = false;      
            if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                leapYear = true;      
            }      
            if ((leapYear == false) && (day>=29)){      
                return false;      
            }else      
            if ((leapYear==true) && (day>29)){      
                x.className = "form-control is-invalid";
                Dterror.innerHTML = "Invalid date format";    
                return false;      
            }      
        }      
    }else{      
        x.className = "form-control is-invalid";
        Dterror.innerHTML = "Invalid date format";    
        return false;       
    }
    x.className = "form-control is-valid";
    Dterror.innerHTML = "";          
    return true;      
}   

function valTime(){
    var x = document.getElementById("time");
    var isValid = '^([0-1][0-9]|2[0-3]):([0-5][0-9])$';

    if (!x.value.match(isValid)){
        Tmerror.innerHTML = "Enter valid time";
        x.className = "form-control is-invalid";
        return false;
    }
    Tmerror.innerHTML = "";
    x.className = "form-control is-valid";
    return true;
}

function valModel(){
    var x = document.getElementById("model");
    model = x.value;
    if(model.length == 0){
        Mdlerror.innerHTML = "This field is mandatory";
        x.className = "form-control is-invalid";
        return false;
    }
    Mdlerror.innerHTML = "";
    x.className = "form-control is-valid";
    return true;

}

function valForm(){
    var resultName = valName();
    var resultMail = valEmail();
    var resultNumber = valNumber();
    var resultDate = valDate();
    var resultTime = valTime();
    var resultModel = valModel();

    if((!resultName)&&(!resultNumber)&&(!resultMail)&&(!resultDate)&&(!resultTime)&&(!resultModel)){
        Suberror.innerHTML = "Fill the mandatory fields";
        return false;
    }
    return true;
    Suberror.innerHTML = "";
}