import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(5);

async function gotoRoot() {
    sessionStorage.setItem("page_id", 5);
    sessionStorage.clear();
    window.location = "/";
}
window.gotoRoot = gotoRoot;

function secondImage(){
    var pages = document.getElementById("Pages");
    pages.src = "designs/Logos2.png";
}
window.secondImage = secondImage;