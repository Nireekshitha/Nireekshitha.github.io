// var firstName=document.getElementById("firstName").value;
// var lastName=document.getElementById("lastName").value;
// var emailId=document.getElementById("emailId").value;
// var mobileNumber=document.getElementById("mobileNumber").value;
// var city=document.getElementById("city").value;
// var pinCode=document.getElementById("pincode").value;
// var state=document.getElementById("state").value;
// var country=document.getElementById("country").value;
var BirthFlag = 0,
    firstNameFlag = 0,
    lastNameFlag = 0,
    emailFlag = 0,
    mobFlag = 0,
    pinFlag = 0,
    cityFlag = 0,
    stateFlag = 0;

function validation() {
    if (BirthFlag && emailFlag && mobFlag && pinFlag && firstNameFlag && lastNameFlag && cityFlag && stateFlag) {
        document.getElementById("submt").type = "submit";
    } else {
        alert("Error: One or More Input field are improper");

    }
}

function fistNameValidation() {
    debugger;
    var firstName = document.getElementById("firstName").value;
    var name = /^[a-zA-Z]{3,30}$/;
    if (!(name.test(firstName))) {
        document.getElementById("firsnameError").innerHTML = "Enter proper Name length in between 3 to 30";
    } else {
        document.getElementById("firsnameError").innerHTML = "";
        firstNameFlag = 1;
    }

}

function lastNameValidation() {
    var lastName = document.getElementById("lastName").value;
    var lname = /^[a-zA-Z]{3,30}$/;
    if (!(lname.test(lastName))) {
        document.getElementById("lastnameError").innerHTML = "Enter proper Name length in between 3 to 30";
    } else {
        document.getElementById("lastnameError").innerHTML = "";
        lastNameFlag = 1;
    }


}

function dateOfBirthValidation() {
    var flag = 0;
    var day = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var totaldays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((((year % 4) == 0) && ((year % 100) == 0)) || ((year % 400)==0)) {
        console.log(year % 4);
        totaldays[1] = 29;
    }
    console.log(totaldays[1]);
    switch (month) {
        case "1":
            if (day <= totaldays[0]) {
                flag = 1;
            }
            break;
        case "2":
            if (day <= totaldays[1]) {
                flag = 1;
            }
            break;
        case "3":
            if (day <= totaldays[2]) {
                flag = 1;
            }
            break;
        case '4':
            if (day <= totaldays[3]) {
                flag = 1;
            }
            break;
        case "5":
            if (day <= totaldays[4]) {
                flag = 1;
            }
            break;
        case "6":
            if (day <= totaldays[5]) {
                flag = 1;
            }
            break;
        case "7":
            if (day <= totaldays[6]) {
                flag = 1;
            }
            break;
        case "8":
            if (day <= totaldays[7]) {
                flag = 1;
            }
            break;
        case "9":
            if (day <= totaldays[8]) {
                flag = 1;
            }
            break;
        case "10":
            if (day <= totaldays[9]) {
                flag = 1;
            }
            break;
        case "11":
            if (day <= totaldays[10]) {
                flag = 1;
            }
            break;
        case "12":
            if (day <= totaldays[11]) {
                flag = 1;
            }
            break;
        default:
            flag = 0;


    }
    birthFlag = flag;
    if (flag == 0) {
        document.getElementById("birthDateError").innerHTML = "In valid date of birth";
    } else {
        document.getElementById("birthDateError").innerHTML = "";
    }

}

function EmailValidation() {
    var emailId = document.getElementById("emailId").value;
    var email = /^[a-zA-Z]+\w*(\.?[a-zA-z]+)\@[a-zA-z]+\.[a-zA-Z]+$/;
    if (!(email.test(emailId))) {
        document.getElementById("emailError").innerHTML = "Enter proper Mail address";
        emailFlag = 0;
    } else {
        emailFlag = 1;
        document.getElementById("emailError").innerHTML = "";
    }

}

function phoneNumberValidation() {
    var mobileNumber = document.getElementById("mobileNumber").value;
    if (!/^\d+$/.test(mobileNumber)) {
        document.getElementById("PhoneError").innerHTML = "Mobile number should be digits";

    } else if (mobileNumber.length != 10) {
        document.getElementById("PhoneError").innerHTML = "Mobile number should be 10 digits";

    } else {
        document.getElementById("PhoneError").innerHTML = "";
        mobFlag = 1;

    }
}

function cityValidation() {
    debugger;
    var city = document.getElementById("city").value;
    var cityname = /^[a-zA-Z]{3,30}$/;
    if (cityname.test(city)) {
        document.getElementById("cityError").innerHTML = "";
        cityFlag = 1;

    } else {
        document.getElementById("cityError").innerHTML = "City name must be in between 3 to 30 characters";
        cityFlag = 0;
    }

}

function pinCodeValidation() {
    var pinCode = document.getElementById("pincode").value;
    if (!(/^\d+$/.test(pinCode))) {
        document.getElementById("pinError").innerHTML = "Pincode number should be digits";

    } else if (pinCode.length != 6) {
        document.getElementById("pinError").innerHTML = "Pincode number should be 6 digits";

    } else {
        document.getElementById("pinError").innerHTML = "";
        pinFlag = 1;

    }
}

function stateValidation() {
    debugger;
    var state = document.getElementById("state").value;
    var statePattern = /^[a-zA-Z]{3,30}$/;
    if (statePattern.test(state)) {
        document.getElementById("stateError").innerHTML = "";
        stateFlag = 1;
    } else {
        document.getElementById("stateError").innerHTML = "State name must be in between 3 to 30 characters";
    }
}

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("myimage");
    //  imgtag.title = selectedFile.name;

    reader.onload = function(event) {
      //  imgtag.src = event.target.result;
        imgtag.src=reader.result;
    };

  reader.readAsDataURL(selectedFile);
}
