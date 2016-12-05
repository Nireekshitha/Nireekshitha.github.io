var flag=0;
var Validation = function(name, req, min, max, valid) {
    this.name = name,
        this.required = req,
        this.max = max,
        this.min = min,
        this.msg = "",
        this.valid = 0;
    this.validate = function() {

        var fieldnameElem = document.getElementsByName(this.name);
        var fieldname = fieldnameElem[0].value;
        if (this.required) {
            if (fieldname == "") {
                this.msg = "Please enter the value";
                console.log(this.msg);
                this.valid = 0;

            }

        }
        if ((this.name == "firstname") || (this.name == "lastname") || (this.name == "city") || (this.name == "state")) {

            var reg = /^[a-zA-Z]{3,30}$/;
            console.log(this.name);
            if (!(reg.test(fieldname))) {
                this.msg = "Enter proper Name length in between 3 to 30";
                console.log(this.msg)
                this.valid = 0;

            } else {
                console.log("correct");
                this.valid = 1;

            }
        } else if (this.name == "email") {
            var regemail = /^[a-zA-Z]+\w*(\.?[a-zA-z]+)\@[a-zA-z]+\.[a-zA-Z]+$/;
            if (!(regemail.test(fieldname))) {
                this.msg = "Enter proper Mail address";
                this.valid = 0;
            } else {
                this.valid = 1;
            }

        } else if (this.name == "mobileNumber") {
            if (!/^\d+$/.test(fieldname)) {
                this.msg = "Mobile number should be digits";
                this.valid = 0;

            } else if (fieldname.length != 10) {
                this.msg = "Mobile number should be 10 digits";
                this.valid = 0;
            } else {
                this.msg = "";
                this.valid = 1;

            }
        } else if (this.name == "pincode") {
            if (!(/^\d+$/.test(fieldname))) {
                this.msg = "Pincode number should be digits";
                this.valid = 0;

            } else if (pinCode.length != 6) {
                this.msg = "Pincode number should be 6 digits";
                this.valid = 0;

            } else {
                this.msg = "";
                this.valid = 1;

            }
        } else if (this.name == "date") {debugger;
              this.msg  = dateOfBirthValidation();
            this.valid = flag;

        } else if ((this.name == "gender") || (this.name == "hobbies")) { debugger;
            var checkedValue = "";
            var radioitem = fieldnameElem;
            for (var i = 0; radioitem[i]; ++i) {
                if ( radioitem[i].checked) {
                    checkedValue =  radioitem[i].value;
                    this.valid=1;
                }
            }
            if (checkedValue = "") {
                this.msg = "Please select any one of the option"
                this.valid=0;
            }
        }


        // if (!(this.msg == "")) {

            var error = createDiv(this.name);
            error.innerHTML = this.msg;
            var parent = fieldnameElem[0].parentElement;
            parent.appendChild(error);
        // }
    }
}

function createDiv(name) {
  if(!(document.getElementById(name+"A"))){
    var div1 = document.createElement("DIV");
    div1.className = "check-item"
    div1.id=name+"A";
    return div1;
}
else{
  return (document.getElementById(name+"A"))
}
}
function dateOfBirthValidation() { debugger;
    var flag = 0,valid=0,msg="";
    var dateError = createDiv();
    var day = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    if ((year == "") || (day = "") || (month == "")) {
        msg = "Please Enter Date of birth"
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
            msg = "In valid date of birth";
            valid=0;
        } else {
            msg = "";
            valid=1;
        }
    }
    return msg;
}
function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("myimage");
    //  imgtag.title = selectedFile.name;

    reader.onload = function(event) {
        //  imgtag.src = event.target.result;
        imgtag.src = reader.result;
    };

    reader.readAsDataURL(selectedFile);
}
// var submitBtton=document.getElementById("submt");
//   submitBtton.addEventListener('click',RegistrationValid()); ;
// //var fname=document.getElementsByName("firstname")[0].value;
function RegistrationValid() {

    var firstName = new Validation("firstname", true, 3, 30);
    firstName.validate();
    var email = new Validation("email", true);
    email.validate();
    var city = new Validation("city", true, 3, 30);
    city.validate();
    var state = new Validation("state", true, 3, 30);
    state.validate();
    var lastName = new Validation("lastname", true, 3, 30);
    lastName.validate();
    var mobilePhone = new Validation("mobileNumber", true);
    mobilePhone.validate();
    var pincode = new Validation("pincode", true);
    pincode.validate();
    var dateOfbirth = new Validation("date");
    dateOfbirth.validate();
    var ab=new Validation("gender");
    ab.validate();
    var Hobbies = new Validation("hobbies");
    Hobbies.validate();
    var address = new Validation("add", true)
    address.validate();
    if (firstName.valid&& email.valid &&city.valid &&  state.valid && lastName.valid &&  mobilePhone.valid &&  pincode.valid  &&dateOfbirth.valid && address.valid) {
        document.getElementById("submt").type = "submit";
    } else {
      //  alert("Error: One or More Input field are improper");

    }
}
