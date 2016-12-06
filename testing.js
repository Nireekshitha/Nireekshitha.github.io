window.onload=testing();

function testing() {
  var msg="";
    var form = document.getElementById("myform");
    var inputELe = document.getElementsByTagName('input');
    for (i = 0; i <  inputELe.length; i++)
        if ( inputELe[i].type == "text") {
            if (inputELe[i].value == "") {
                msg = "text field not empty you must enter value"
                if (!(msg == "")){
                    var error = createDiv();

                error.innerHTML = msg;
                var parent = inputELe[i].parentElement;
                parent.appendChild(error);
                msg="";
            }
        }
}
}
function createDiv() {
    // if (!(document.getElementById(name + "A"))) {
        var div1 = document.createElement("DIV");
        div1.className = "check-item"
        //div1.id = name + "A";
        return div1;
    // } else {
    //     return (document.getElementById(name + "A"))
    // }
}
