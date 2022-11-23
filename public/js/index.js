// document.getElementById("progress-done").style = "width:2%";
progress = "2%";
var progressDone = document.styleSheets[1].cssRules[1].style.width = progress;
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementsByClassName("progress-done")[0].innerHTML = progress
})

async function startStudy() {
    sessionStorage.setItem("page_id", 1);
    window.location = "page1";
    console.log(document.cookie);
}

async function getData() {
    const response = await window.fetch('/get_data');
    data = await response.json();
    console.log(data);
    return data;
}

async function dbButtonClick() {
    data = await getData();
    document.getElementById("textInput").value = JSON.stringify(data);
    document.getElementById("textInput").className = "show";
}