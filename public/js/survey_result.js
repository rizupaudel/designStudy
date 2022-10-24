progress = "10%";
var progressDone = document.styleSheets[1].cssRules[1].style.width = progress;
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementsByClassName("progress-done")[0].innerHTML = progress
})

async function startStudy() {
    sessionStorage.setItem("page_id", 1);
    window.location = "page1";
}

async function getData() {
    const response = await window.fetch('/get_data');
    data = await response.json();
    return data;
}

async function dbButtonClick() {
    data = await getData();
    // document.getElementById("textInput").value = JSON.stringify(data);
    // document.getElementById("textInput").className = "show";

    var tbody = document.getElementById("tbody");

    var val = "<tbody>";
    for (i = 0; i < data.length; i++){
        val += "<tr>";
        for (var k in data[i]) {
            val += "<td>" + data[i][k] + "</td>";
        }
        val += "</tr>";
    }
    val += "<tbody>";
    tbody.innerHTML = val;
}