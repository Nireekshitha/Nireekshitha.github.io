
define(['controller/gettask'], function(gettask){

function deleteTask(task) {
  var dbName = "my-sample-db",
      link = "/api/v1/data";
  link = link + "/" + dbName;
  var task = JSON.parse(task);
    var delReq = new XMLHttpRequest();
    var path = link + "/" + task._id + "?rev=" + task._rev;
    delReq.open("DELETE", path, true);
    delReq.send();
    delReq.onload = function() {
        if (delReq.readyState === delReq.DONE) {
            if (delReq.status == 200) {
                gettask.getTasks();
            }
        }
    };
}
return{
  deleteTask:deleteTask
};

});
