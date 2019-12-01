function sumNumber() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    const number = document.getElementById("input_number").value;
    xhttp.open("GET", `getData?number=${number}`);
    xhttp.send();
}