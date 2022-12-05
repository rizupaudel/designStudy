import {setProgress} from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 6);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 4) {
//     window.location = "/";
// }

async function gotoquest() {
    sessionStorage.setItem("page_id", 7);
    window.location = "quest";
}
window.gotoquest = gotoquest;

function secondImage(){
    var pages = document.getElementById("pages");
    pages.src = "designs/Dart2.png";
}
window.secondImage = secondImage;

function firstImage() {
    var pages = document.getElementById("pages");
    pages.src = "designs/Dart1.png";
}
window.firstImage = firstImage;