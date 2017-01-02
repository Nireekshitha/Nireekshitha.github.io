function getContent(fragmntId) {
  var displayContent={
    link1:'this is link1 page',
    link2:'this is link2 page',
    link3:'this is link3 page'
  }
  return displayContent[fragmntId];

}

window.addEventListener("hashchange", function() {
    navigate();
});

function navigate() {
    var content = document.getElementById('content');
    var fragmentId = location.hash.substr(1);
    content.innerHTML = getContent(fragmentId);

}
