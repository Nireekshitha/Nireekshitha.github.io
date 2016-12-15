var todos = new Array;
var x = 0,
    node,
    y = 0;
var createDb,
    createDoc;
requirejs.config({
    baseUrl: "scripts",
    paths: {
        "lib": "lib",
        "text": "lib/text"
    }
});
requirejs([], function() {
    "use strict";

    /*
        Function to create database
    */
    createDb = function() {
        var dbName = "list-app-database",
            link = "/api/v1/data";
        link = link + "/" + dbName;
        $.ajax({
            url: link,
            type: "PUT",
            dataType: "JSON",
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err);
            }
        });
    };
    /*
        Function to create document
    */
    // var val = document.getElementById('input').value;
    createDoc = function() {
        var dbName = "list-app-database",
            link = "/api/v1/data/" + dbName;
        $.ajax({
            url: link,
            type: "POST",
            dataType: "JSON",
            data: JSON.stringify({
                "item": document.getElementById('input').value
            }),
            contentType: "application/json; charset=UTF-8",
            success: function(data) {
                console.log(data.id);
            },
            error: function(err) {
                console.log(err);
            }
        });
    };
    // document.getElementById('input').onkeydown = function(event) {
    //     if (event.keyCode == 13) {
    //
    //     }
    // }
    $("document").ready(function() {
        var dbName = "list-app-database";
        var link = "/api/v1/data/" + dbName;
        $.ajax({
            url: link,
            type: "HEAD",
            dataType: "JSON",
            success: function(data) {
                console.log("aaa");
            },
            error: function(err) {
                createDb();
            }
        });

    });
});


document.getElementById('input').onkeydown = function(event) {
    if (event.keyCode == 13) {
        validate();
    }
}

function displaySessionValues() {
    todos = get_list();
    for (i = 0; i < todos.length; i++) {
        createlist(todos[i]);
    }
}

function get_list() {
    var todos_str = sessionStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function addSessionStorage(inputText) {
    todos = get_list();
    todos.push(inputText);
    sessionStorage.setItem('todo', JSON.stringify(todos));
    return 0;
}

function createCheckbox(node) {
    //creating tick mark before the li text
    var span1 = document.createElement("SPAN");
    span1.className = "check-item"
    var tick = document.createElement("INPUT");
    tick.name = "list";
    tick.type = "checkbox";
    tick.className = "ticklist";
    tick.id = "test" + y;
    span1.appendChild(tick);
    var ticklabel = document.createElement("LABEL");
    ticklabel.htmlFor = tick.id;
    span1.appendChild(ticklabel);
    node.appendChild(span1);
    y = y + 1;
}

function createSpanCloseMark(node) {
    var span2 = document.createElement("SPAN");
    var close = document.createTextNode("\u00D7");
    span2.className = "closelist";
    span2.id = x;
    span2.appendChild(close);
    node.appendChild(span2);
    span2.addEventListener('click', removeSinglelist());
    x = x + 1;
}

//  function tells dynamically creating li elements
function createlist(inputText) {
    node = document.createElement("LI");
    //styling li element
    node.className = "listingStyle";
    node.id = y
        //creating checkbox
    createCheckbox(node)
        //taking input frome the input text adding to li value
    var textnode = document.createTextNode(inputText);
    node.appendChild(textnode);
    // creating close mark after the li text
    createSpanCloseMark(node);
    //horizontal line after each li element
    var hrnode = document.createElement("HR");
    node.appendChild(hrnode);
    //after created list i.e node to its parent ul
    document.getElementById("myList").appendChild(node);
}

function removeSinglelist() {
    return function() {
        var id = this.id;
        var liClicked = this.parentElement;
        var parentUl = document.getElementById("myList");
        parentUl.removeChild(liClicked);
        todos = get_list();
        todos.splice(id, 1);
        sessionStorage.setItem('todo', JSON.stringify(todos));
    };
}

function clearall() {
    var tickmark = document.getElementsByClassName("ticklist");
    var i;
    for (i = 0; i < tickmark.length; i++) {
        while (tickmark[i].checked == true) {
            var y = i;
            var spanClicked1 = tickmark[i].parentElement;
            var liClicked1 = spanClicked1.parentElement;
            var parentUl = document.getElementById("myList");
            parentUl.removeChild(liClicked1);
            todos = get_list();
            todos.splice(y, 1);
            sessionStorage.setItem('todo', JSON.stringify(todos));


        }
    }
}

function validate() {
    var inputText = document.getElementById('input').value;
    addSessionStorage(inputText);
    if (inputText == "" ) {
        alert("Enter text");
    } else {
        createDoc();
        todos = get_list();
        createlist(todos[todos.length - 1]); //craeting li element
        //after adding to list clear the text inputs
        document.getElementById("input").value = "";
        // document.querySelectorAll("ul li .closelist").click(removeSinglelist());

        //  var a = document.querySelectorAll("ul li .closelist")
        // var i;
        // for (i = 0; i < a.length; i++) {
        //     a[i].addEventListener("click", removeSinglelist());
        //     break;
        // }
    }

}
