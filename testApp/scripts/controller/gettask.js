
define(['view/displayview'], function(displayview){
function getTasks () {
  var dbName = "my-sample-db",
      link = "/api/v1/data";
  link = link + "/" + dbName;
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
                displayview.displayTasks(tasks);
                console.log(getReq.response);
                //        console.log(getReq.responseText);
            }
        }
    };
}
return{
getTasks:getTasks
};
});
