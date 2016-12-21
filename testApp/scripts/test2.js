var x = 0,
    node,
    y = 0;
var createDb,
    createDoc,
    createView,
    getTasks;
var dbName = "my-sample-db",
    link = "/api/v1/data";
link = link + "/" + dbName;
var check = [];

createDb = function() {
    var putReq = new XMLHttpRequest();
    putReq.open("PUT", link, true);
    putReq.send();
}
createDoc = function() {
    var task = {
        "task": document.getElementById('input').value
    };
    var postReq = new XMLHttpRequest();
    console.log(postReq)
    postReq.open("POST", link, true);
    postReq.setRequestHeader('Content-Type', 'application/json');
    postReq.send(JSON.stringify(task));
    postReq.onload = function() {
        debugger;
        if (postReq.readyState === postReq.DONE) {
            getTasks();
        }
    };
}
getTasks = function() {
    var url = link + "/_design/tasks/_view/tasks";
    var getReq = new XMLHttpRequest();
    getReq.open("GET", url, true);
    getReq.send();
    getReq.onload = function() {
        if (getReq.readyState === getReq.DONE) {
            if (getReq.status === 200) {
                var view = JSON.parse(getReq.response);
                var tasks = [];
                for (var k = 0; k < view.rows.length; k++) {
                    tasks.push(view.rows[k].value)
                }
                displayTasks(tasks);
                console.log(getReq.response);
                //        console.log(getReq.responseText);
            }
        }
    };
}

function createCheckbox() {
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
    return span1;
}

function createSpanCloseMark(task) {
    var span2 = document.createElement("INPUT");
    span2.type = "button";
    span2.className = "closelist";
    span2.value = "X";
    span2.onclick = function() {
        deleteTask(JSON.stringify(task))
    };
    return span2;
}

function displayTasks(tasks) {
    var x = 0,
        li;
    var ul = document.createElement("UL");

    for (var j = 0; j < tasks.length; j++) {
        console.log(j);
        li = document.createElement("LI");
        li.className = "listingStyle"
        var hr = document.createElement("HR");
        var checkbx = createCheckbox();
        li.appendChild(checkbx);
        var textnode = document.createTextNode(tasks[j].task);
        li.appendChild(textnode);
        check[j] = JSON.stringify(tasks[j]);
        var closemark = createSpanCloseMark(tasks[j])
        li.appendChild(closemark);
        li.appendChild(hr);
        ul.appendChild(li);
    }

    var listing = document.getElementById('listing');
    listing.textContent = '';
    listing.appendChild(ul)

}

function deleteTask(task) {

    var task = JSON.parse(task);
    var delReq = new XMLHttpRequest();
    var path = link + "/" + task._id + "?rev=" + task._rev;
    delReq.open("DELETE", path, true);
    delReq.send();
    delReq.onload = function() {
        if (delReq.readyState === delReq.DONE) {
            if (delReq.status == 200) {
                getTasks();
            }
        }
    };
}



function clearall() {

    var tickmark = document.getElementsByClassName("ticklist");
    var i;
    for (i = 0; i < tickmark.length; i++) {
        if (tickmark[i].checked == true) {
            deleteTask(check[i])
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
        createDoc();
        //after adding to list clear the text inputs
        document.getElementById("input").value = "";
    }
}
