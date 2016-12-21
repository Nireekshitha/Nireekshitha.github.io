var todos = new Array;
var x = 0,
    node,
    y = 0;
var createDb,
    createDoc,
    createView,
    deleteTask,
    deleteTasks,
    getTasks;
var dbName = "my-sample-db",
    link = "/api/v1/data";
link = link + "/" + dbName;
var check = [];
createDb = function() {
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

createDoc = function() {
    var task = {
        "task": document.getElementById('input').value
    };
    $.ajax({
        url: link,
        type: "POST",
        dataType: "JSON",
        data: JSON.stringify(task),
        contentType: "application/json; charset=UTF-8",
        success: function(data) {
            console.log(data.id);
            getTasks();
        },
        error: function(err) {
            console.log(err);
        }
    });
};

getTasks = function() {
    $.ajax({
        url: link + "/_design/tasks/_view/tasks",
        success: function(data) {
            var view = JSON.parse(data);
            var tasks = [];
            $(view.rows).each(function(index, item) {
                tasks.push(item.value);
            });
            displayTasks(tasks);
        }
    });
}

function displayTasks(tasks) {
  console.log(task)
    var x = 0;
    var html = "<ul>";
    $(tasks).each(function(index, task) {
        console.log(index)
        html += "<li class='listingStyle'>";
        html += "<hr/>";

        var checkboxs = "<span class='check-item'><input type='checkbox' name='tick' class='ticklist'></span>";
        check[index] = JSON.stringify(task);
        var del = "<input type='button' value='X'  class= 'closelist'" + "onclick='deleteTask(" + JSON.stringify(task) + ")' />";
        html += checkboxs
        html += task.task;
        html += del;
        html += "</li>";
    });
    html += "</ul>";

    $('#listing').empty();
    $('#listing').append(html);
}



deleteTask = function(task) {
    $.ajax({
        type: "DELETE",
        url: link + "/" + task._id + "?rev=" + task._rev,
        success: function() {
            getTasks();
        }
    });
}
deleteTasks = function(abc) {
    var task = JSON.parse(abc);
    $.ajax({
        type: "DELETE",
        url: link + "/" + task._id + "?rev=" + task._rev,
        success: function() {
            getTasks();
        }
    });
}
function clearall() {
    debugger;
    var tickmark = document.getElementsByClassName("ticklist");
    var i;
    for (i = 0; i < tickmark.length; i++) {
        if (tickmark[i].checked == true) {
            deleteTasks(check[i])
        }
    }
}
// create view (will fail if already existing)


$("document").ready(function() {

    $.ajax({
        url: link,
        type: "HEAD",
        dataType: "JSON",
        success: function(data) {
            console.log(" my-sample-db db already present");
        },
        error: function(err) {
            createDb();
        }
    });
});

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
