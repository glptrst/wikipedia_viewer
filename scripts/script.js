var input = document.getElementById("entry");
var button = document.getElementById("search");

button.addEventListener("click", function(){
    getEntries();
});

function getEntries() {
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=" + input.value;
    makeReq("GET", url,console.log);

}

function makeReq(method, url, callback) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function(){
        callback(req.responseText);
    });
    req.open(method, url); 
    req.send();
}
