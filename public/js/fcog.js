import {setProgress} from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 2);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 2) {
//     window.location = "/";
// }

async function gotofpasssurvey() {
    sessionStorage.setItem("page_id", 3);
    var textBox = document.getElementsByClassName("textbox")[0];
    var nTriangle = textBox.value;
    
    if (Number.isInteger(+nTriangle)) {
        window.location = "fpasssurvey";
    } else {
        var numError = document.getElementById("reqfields")
        numError.style.display = "block";
    }
}
window.gotofpasssurvey = gotofpasssurvey;

// async function gotoPage22() {
//     sessionStorage.setItem("page_id", 22);
//     window.location = "page22";
// }