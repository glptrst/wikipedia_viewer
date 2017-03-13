var input = document.getElementById("entry");
var button = document.getElementById("search");

button.addEventListener("click", function(){
    getEntries();
});

function showResults(obj){
    var entriesArray = obj.query.search; 
    var oldEntriesDiv = document.getElementById("entries");
    
    var newEntriesDiv = document.createElement("div");
    entriesArray.forEach(function(entry){
        var el =  document.createElement("div");
        el.innerHTML = entry.title;
        newEntriesDiv.appendChild(el);
    });

    document.body.replaceChild(newEntriesDiv, oldEntriesDiv); 
    newEntriesDiv.setAttribute("id", "entries");
};

function getEntries() {
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=" + input.value;
    makeReq("GET", url, showResults);

}

function makeReq(method, url, callback) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function(){
        callback(JSON.parse(req.responseText));
    });
    req.open(method, url); 
    req.send();
}
