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
  fistNameValidation();
  lastNameValidation()

    // debugger;
    // if (emailFlag && mobFlag && pinFlag && firstNameFlag && lastNameFlag && cityFlag && stateFlag && BirthFlag) {
    //     document.getElementById("submt").type = "submit";
    // } else {
    //     alert("Error: One or More Input field are improper");
    //
    // }
}

function createDiv() {
    var div1 = document.createElement("SPAN");
    div1.className="check-item";
    return div1;
}

function fistNameValidation() {
    var firstError = createDiv();

    var firstName =$("#firstName").val();
    var name = /^[a-zA-Z]{3,30}$/;
    if (firstName == "") {
        firstError.innerHTML = "Enter Text"
    } else {
        if (!(name.test(firstName))) {

            firstError.innerHTML = "Enter proper Name length in between 3 to 30";
        } else {
            firstError.innerHTML = "";
            firstNameFlag = 1;
        }
    }
    var parent = $("#firstName").parent();
    parent.append(firstError);
}

function lastNameValidation() {
    var lastError = createDiv();
    var lastName = $("#lastName").val();
    var lname = /^[a-zA-Z]{3,30}$/;
    if (lastName == "") {
        lastError.innerHTML = "Enter Text"
    } else {
        if (!(lname.test(lastName))) {
            lastError.innerHTML = "Enter proper Name length in between 3 to 30";
        } else {

            lastNameFlag = 1;
        }
    }
    var parent =  $("#lastName").parent();
    parent.append(lastError);
}

function dateOfBirthValidation() {
    var flag = 0;
    var dateError = createDiv();
    var day = $("#date").val();
    var month = $("#month").val();
    var year = $("#year").val();
    if ((year == "") || (day = "") || (month == "")) {
        dateError.innerHTML = "Please Enter Date of birth"
    } else {
        var totaldays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((((year % 4) == 0) && ((year % 100) == 0)) || ((year % 400) == 0)) {
            console.log(year % 4);
            totaldays[1] = 29;
        }

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
        BirthFlag = flag;
        if (flag == 0) {
            dateError.innerHTML = "In valid date of birth";
        } else {
            dateError.innerHTML = "";
        }
    }
}

function EmailValidation() {
    var emailError;

    var email = $("#email").val();
    var email = /^[a-zA-Z]+\w*(\.?[a-zA-z]+)\@[a-zA-z]+\.[a-zA-Z]+$/;
    if (emailId == "") {
        emailError = createDiv();
        emailError.innerHTML = "Enter Mail address";
    } else {
        if (!(email.test(emailId))) {
            emailError.innerHTML = "Enter proper Mail address";
            emailFlag = 0;
        } else {
            emailFlag = 1;
            emailError.innerHTML = "";
        }
    }
    var parent =  $("#email").parent();
    parent.append(emailError);
}

function phoneNumberValidation() {
    var phoneError;
    var mobileNumberElem = $("[name=mobileNumber]");
    var mobileNumber = mobileNumberElem[0].val();
    if (mobileNumber = "") {
        phoneError = createDiv();
        phoneError.innerHTML = "Enter mobileNumber";
    } else {
        phoneError = createDiv();
        if (!/^\d+$/.test(mobileNumber)) {
            phoneError.innerHTML = "Mobile number should be digits";

        } else if (mobileNumber.length != 10) {
            phoneError.innerHTML = "Mobile number should be 10 digits";

        } else {
            phoneError.innerHTML = "";
            mobFlag = 1;

        }
    }
    var parent = mobileNumberElem.parent();
    parent.append(phoneError);
}

function cityValidation() {
    var cityError;
    var cityElem = $("[name=city]")
    city = cityElem[0].val();
    var cityname = /^[a-zA-Z]{3,30}$/;
    if (city == "") {
        cityError = createDiv();
        cityError.innerHTML = "Please Enter city";
    } else {
        if (cityname.test(city)) {


            cityFlag = 1;

        } else {
            cityError = createDiv();
            cityError.innerHTML = "City name must be in between 3 to 30 characters";
            cityFlag = 0;
        }
    }
    var parent = cityElem.parent();
    parent.append(cityError);
}

function pinCodeValidation() {
    var pinCodeError;
    var pinCodeElem = $("[name=pincode]");
    var pinCode = pinCodeElem[0].value;
    if (city == "") {
        pinCodeError = createDiv();
        pinCodeError.innerHTML = "Please Enter city";
    } else {
        pinCodeError = createDiv();
        if (!(/^\d+$/.test(pinCode))) {
            pinCodeError.innerHTML = "Pincode number should be digits";

        } else if (pinCode.length != 6) {
            pinCodeError.innerHTML = "Pincode number should be 6 digits";

        } else {
            pinCodeError.innerHTML = "";
            pinFlag = 1;

        }
    }
    var parent = pinCodeElem.parent();
    parent.append(pinCodeErrorError);
}

function stateValidation() {
    var stateError;
    var stateElem = $("name=state");
    var state = stateElem[0].value;
    var statePattern = /^[a-zA-Z]{3,30}$/;
    if (state == "") {
        stateError = createDiv();
        stateError.innerHTML = "enter state"
    } else {
        stateError = createDiv();
        if (statePattern.test(state)) {
            stateFlag = 1;
        } else {
            stateError.innerHTML = "State name must be in between 3 to 30 characters";
        }
    }
    var parent = stateElem.parent();
    parent.append(stateError);
}

function address() {
    var addressError;
    var address = $("#add").val();
    if (address == "") {
        addressError = createDiv();
        addressError.innerHTML = "enter address";
    }
    var parent = add.parent();
    parent.append(addressError);
}

function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = $("#myimage");
    //  imgtag.title = selectedFile.name;

    reader.onload = function(event) {
      imgtag.attr('src',reader.result );
        //  imgtag.src = event.target.result;
        //imgtag.src = reader.result;

    };

    reader.readAsDataURL(selectedFile);
}
