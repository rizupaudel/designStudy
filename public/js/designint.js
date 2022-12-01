import {setProgress} from "./utility.js";
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
    pages.src = "designs/Logos2.png";
}
window.secondImage = secondImage;

function firstImage() {
    var pages = document.getElementById("pages");
    pages.src = "designs/Logos1.png";
}
window.firstImage = firstImage;