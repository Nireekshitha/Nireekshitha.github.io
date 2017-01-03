function getContent(fragmntId, callback) {
    var request = new XMLHttpRequest();
    var result;
    request.onload = function() {
        console.log(request.responseText);
        callback(request.responseText)
        result = request.responseText;

    };
    //  console.log(request.responseText)
    path = fragmntId + '.html'
    request.open("GET", path, true);
    request.send();

    console.log("aaaaaaaa" + result);
    //return result;
}

function getTasks(callback) {
    var tasks = [];
    var dbName = "images",
        link = "/api/v1/data";
    link = link + "/" + dbName;
    var url = link + "/_design/tasks/_view/tasks";
    var getReq = new XMLHttpRequest();
    getReq.open("GET", url, true);
    getReq.send();
    console.log(getReq);
    getReq.onload = function() {
        console.log("inside" + getReq);
        if (getReq.readyState === getReq.DONE) {
            if (getReq.status === 200) {


                var view = JSON.parse(getReq.response);

                for (var k = 0; k < view.rows.length; k++) {
                    tasks.push(view.rows[k].value)

                }

                console.log(getReq.response);
                callback(tasks);
                //        console.log(getReq.responseText);
            }
        }
    };
    console.log(tasks)

}


navigate();
window.addEventListener("hashchange", function() {
    navigate();
});


function navigate() {

    var content1 = document.getElementById('content');

    var fragmentId = location.hash.substr(1);
    if (!location.hash) {
        content1.innerHTML = "Home Page";
        return 0;
    }
    getContent(fragmentId, function(contentDis) {
        if (fragmentId == "link1") {
            content1.innerHTML = contentDis;

            getTasks(function(contents) {

                var imgSources = contents;
                console.log(imgSources);
                for (var i = 0; i < imgSources.length; i++) {

                    // var source = $("#image").html();
                    // var source1 = $("#image");
                    // var source = source1.html();
                    var image1=document.getElementById('image');
                    var source=image1.innerHTML;
                    var template = Handlebars.compile(source);
                    console.log(template);
                    var data = {
                        imgsource: imgSources[i].source
                    };
                    content1.innerHTML+=(template(data));


                }
            });
        } else {
            content.innerHTML = contentDis;
        }
    });


}
