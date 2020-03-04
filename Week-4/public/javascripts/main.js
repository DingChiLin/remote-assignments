function delayedResult(n1, n2, delayTime, callback){
    window.setTimeout(callback, delayTime, n1+n2);
}

// delayedResult(4, 5, 3000, function(result){
//     console.log(result);
// }); 

// delayedResult(-5, 10, 2000, function(result){
//     window.alert(result);
// });

function ajax(src, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            callback(this.responseText);
        }
    };
    xhttp.open("GET", src);
    xhttp.send(); 
}

function render(data){
    console.log(data);

    const currentDiv = document.getElementById('show');
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    for (el of ["Name", "Price", "Description"]) {
        var th=document.createElement("th");
        th.style.borderWidth = '1px';
        th.style.borderStyle = 'solid';
        th.style.backgroundColor = '#dddddd';
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
    };
    thead.appendChild(headRow);
    table.appendChild(thead); 
    for (el of JSON.parse(data)) {
        var tr = document.createElement("tr");
        for (var o in el) {
            var td = document.createElement("td");
            td.style.borderWidth = '1px';
            td.style.borderStyle = 'solid';
            td.appendChild(document.createTextNode(el[o]))
            tr.appendChild(td);
        }
        tbody.appendChild(tr);  
    };
    table.appendChild(tbody);
    currentDiv.appendChild(table);
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
    render(response);
});