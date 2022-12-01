import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(0);

sessionStorage.clear();

async function startStudy() {
    sessionStorage.setItem("page_id", 1);
    window.location = "fpass";
}
window.startStudy = startStudy;

// async function getData() {
//     const response = await window.fetch('/get_data');
//     data = await response.json();
//     console.log(data);
//     return data;
// }

// async function dbButtonClick() {
//     data = await getData();
//     document.getElementById("textInput").value = JSON.stringify(data);
//     document.getElementById("textInput").className = "show";
// }

