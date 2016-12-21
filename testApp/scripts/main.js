requirejs.config({
    baseUrl: "scripts",
    paths: {
        "lib": "lib",
        "text": "lib/text"
    }
});

require(['model/input','controller/deletelist','controller/cntrllr','view/displayview'], function(list,deletelist,cntrllr,displayview){
    "use strict";
    var createDb,
        createDoc,
        createView,
        getTasks;
    var dbName = "my-sample-db",
        link = "/api/v1/data";
    link = link + "/" + dbName;
var check=[];


  var inputText=document.getElementById('input').value;

//  var list=new list(inputText);
var clr=document.getElementById("clearbutton");
clr.onclick=function clearall() {

        var tickmark = document.getElementsByClassName("ticklist");
        var i;
        for (i = 0; i < tickmark.length; i++) {
            if (tickmark[i].checked == true) {
              check=displayview.getcheck();
              console.log("result"+check[i])
                deletelist.deleteTask(check[i])
            }
        }
    }
    document.getElementById('input').onkeydown = function(event) {
        if (event.keyCode == 13) {
            validate();
        }
    }


    function validate() {
        var inputText = document.getElementById('input').value;
        if (inputText == "") {
            alert("Enter text");
        } else {
            cntrllr.createDoc();
            //after adding to list clear the text inputs
            document.getElementById("input").value = "";
        }
    }

  });
