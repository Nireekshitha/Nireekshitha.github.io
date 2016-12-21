define( ['controller/gettask'],function(gettask) {

     function createDoc() {
       var dbName = "my-sample-db",
           link = "/api/v1/data";
       link = link + "/" + dbName;
        var task = {
            "task": document.getElementById('input').value
        };
        var postReq = new XMLHttpRequest();
        console.log(postReq);
        postReq.open("POST", link, true);
        postReq.setRequestHeader('Content-Type', 'application/json');
        postReq.send(JSON.stringify(task));

        postReq.onload = function() {
            if (postReq.readyState === postReq.DONE) {
                if (postReq.status === 201) {
                  gettask.getTasks();
                }

            }
        };
      //  postReq.close();
    }
    return{
    createDoc:createDoc
  };
});
