function getContent(fragmntId, callback) {
    var request = new XMLHttpRequest();
    request.onload = function() {
        callback(request.responseText)
    };
    path=fragmntId+'.html'
    request.open("GET", path);
    request.send(null);
}
navigate();
window.addEventListener("hashchange", function() {
    navigate();
});

function navigate() {
    var content = document.getElementById('content');
    var fragmentId = location.hash.substr(1);
    content.innerHTML = getContent(fragmentId);

}
