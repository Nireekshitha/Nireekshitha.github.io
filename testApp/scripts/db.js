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
        createDoc;
    /*
        Function to create database
    */
    createDb = function () {
        var dbName = "my-sample-db-name",
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
    createDoc = function (inputval) {
        var dbName = "list-app-database",
            link = "/api/v1/data/" + dbName;
        $.ajax({
            url         : link,
            type        : "POST",
            dataType    : "JSON",
            data        : JSON.stringify({"item":$inputval}),
            contentType : "application/json; charset=UTF-8",
            success     : function (data) {
                console.log(data);
            },
            error       : function (err) {
                console.log(err);
            }
        });
    };
    // $("document").ready(function () {
    //     var html = "";
    //     /*
    //         Create the HTML template
    //     */
    //     html += "<div>";
    //     html += "<p> <button id='new-db'>Creat DB</button> </p>";
    //     html += "<p> <button id='new-doc'>Creat Doc</button> </p>";
    //     html += "</div>";
    //     /*
    //         Append the html to the DOM
    //     */
    //     $("#couch-db-app").append(html);
    //     /*
    //         Binding the events to required
    //     */
    //     $("#new-db").off().on("click", function () {
    //         createDb();
    //     });
    //     $("#new-doc").off().on("click", function () {
    //         createDoc();
    //     });
    // });
});
