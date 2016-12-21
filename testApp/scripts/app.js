/*globals requirejs, $, console */
requirejs.config({
    baseUrl: "scripts",
    paths: {
        "lib": "lib",
        "text": "lib/text"
    }
});
requirejs([], function () {
    "use strict";
    var createDb,
          createView;
    /*
        Function to create database
    */
    createDb = function () {
        var dbName = "my-sample-db",
            link = "/api/v1/data";
        link = link + "/" + dbName;
        $.ajax({
            url      : link,
            type     : "PUT",
            dataType : "JSON",
            success  : function (data) {
                console.log(data);
            },
            error    : function (err) {
                console.log(err);
            }
        });
    };
    /*
        Function to create document
    */
    createView = function() {
        var view = {
            "language": "javascript",
            "views": {
                "tasks": {
                    "map": "function(doc) {if (doc.task) {emit(doc.task, doc);}}"
                }
            }
        }
        $.ajax({
            type: "PUT",
            url: link + "/_design/tasks",
            contentType: "application/json",
            data: JSON.stringify(view)
        });
    }
    $("document").ready(function () {
        var html = "";
        /*
            Create the HTML template
        */
        html += "<div>";
        html += "<p> <button id='new-db'>Creat DB</button> </p>";
        html += "<p> <button id='new-doc'>Creat View</button> </p>";
        html += "</div>";
        /*
            Append the html to the DOM
        */
        $("#couch-db-app").append(html);
        /*
            Binding the events to required
        */
        $("#new-db").off().on("click", function () {
            createDb();
        });
        $("#new-doc").off().on("click", function () {
            createView();
        });
    });
});
