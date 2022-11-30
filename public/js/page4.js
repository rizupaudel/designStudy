import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(5);

// if (sessionStorage.getItem("page_id") != 4) {
//     window.location = "/";
// }

async function gotoRoot() {
    sessionStorage.setItem("page_id", 6);
    window.location = "page5";
}
window.gotoRoot = gotoRoot;

function secondImage(){
    var pages = document.getElementById("Pages");
    pages.src = "designs/Logos2.png";
}
window.secondImage = secondImage;