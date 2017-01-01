function getContent(fragmntId,callback){
var request=new XMLHttpRequest();
request.onload=function(){
callback(request.responseText),
};
request.open("GET",fragmtId'.html');
request.send();
}
navigate();
addEventListener("hashChange",function(){
navigate();
});
function navigate(){
var content=document.getElementById('conetnt');
fragmentId=location.hash.substr(1);
content.innerHTML=getContent(fragmentId);

}

