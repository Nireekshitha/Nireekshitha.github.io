//window.onload = testing();

function creteMessage(msg, ele,name) {
    var error = createDiv(name);
    error.innerHTML = msg;
    var parent = ele.parentElement;
    parent.appendChild(error);

}

// var submit = document.getElementById('submit');
// submit.addEventListener("click",testing());
var form = document.getElementById("myform");
form.elements["email"].onchange=function(){debugger;
  if (!(form.elements["email"].value=="")) {

        msg="";
        creteMessage(msg, form.elements["email"],"email");
      }
      else{
        msg="enter mail";
          creteMessage(msg, form.elements["email"],"email");
      }

};
form.elements["email"].onchange();
function testing() {
    var msg = "";
    form = document.getElementById("myform");
    //  var inputELe = document.getElementsByTagName('input');
    for (i = 0; i < form.length; i++) {
        if (form.elements[i].tagName == "INPUT") {
            if (form.elements[i].type == "text") {
                if (form.elements[i].value == "") {
                    msg = "text field not empty you must enter value"
                    if (!(msg == "")) {
                        creteMessage(msg, form.elements[i], form.elements[i].name)
                    }


                }
            }
            if (form.elements[i].type == "email") {
                var emailreg = /^[a-zA-Z]+\w*(\.?[a-zA-z]+)\@[a-zA-z]+\.[a-zA-Z]+$/;
                if(form.elements[i].value==""){
                  msg="enter Mail adress"
                  creteMessage(msg, form.elements[i],form.elements[i].name);
                }
                else if (!(emailreg.test(form.elements[i].value))) {
                    msg = "Enter proper Mail address";

                        creteMessage(msg, form.elements[i],form.elements[i].name);
                    }
                    else{
                      msg="";
                      creteMessage(msg, form.elements[i],form.elements[i].name);
                    }

                    // form.elements[i].onchange=function(){debugger;
                    //   if (!(form.elements[i].value=="")) {
                    //         msg="";
                    //         creteMessage(msg, form.elements[i],form.elements[i].name);
                    //       }
                    //       else{
                    //         msg="enter mail";
                    //           creteMessage(msg, form.elements[i],form.elements[i].name);
                    //       }
                    //
                    // };
                    // form.elements[i].onchange();

}
            if (form.elements[i].type == "radio") {
                var checkedValue = "";
                var abc = form.elements[i].name
                console.log(form.elements[i].name);
                console.log(abc)
                var radioitem = form[abc];
                console.log(radioitem)
                for (var j = 0; radioitem[j]; ++j) {
                    if (radioitem[j].checked) {
                        checkedValue = radioitem[j].value;
                    }
                }

                if (checkedValue == "") {
                    msg = "Please select any one of the option"
                    creteMessage(msg, form.elements[i],form.elements[i].name)
                }
            }
              if (form.elements[i].type == "file") {
                if(form.elements[i].value==""){
                  msg="please choose file";
                  creteMessage(msg, form.elements[i],form.elements[i].name)
                }
              }
        }
        if (form.elements[i].tagName == "SELECT") {
            var selectname = form.elements[i].name
            if (selectname == "date") {

                var day = form.elements[i].value;
            }
            if (selectname == "month")
                var month = form.elements[i].value;
            if (selectname == "year")
                var year = form.elements[i].value;
            if(!(day == "" || month == undefined || year == undefined))  {
              dateOfBirthValidation(day, month, year);
            } else {

                msg = "Improper date Fill all 3 fields";
                creteMessage(msg, form.date,form.elements[i].name)
            }

        }
    }
}


function dateOfBirthValidation(day, month, year) {
    var flag = 0;

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
        var msg = "In valid date of birth";
        creteMessage(msg, form.date,date)
    }

}

function createDiv(name) {
    if (!(document.getElementById(name + "A"))) {
    var div1 = document.createElement("DIV");
    div1.className = "check-item"
        div1.id = name + "A";
    return div1;
    } else {
        return (document.getElementById(name + "A"))
    }
}
