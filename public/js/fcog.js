import { nextPage, setProgress, setTime } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 2);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 2) {
//     window.location = "/";
// }

async function gotofpasssurvey() {
    var textBox = document.getElementsByClassName("textbox")[0];
    var nTriangle = textBox.value;
    if (nTriangle && Number.isInteger(+nTriangle)) {
        nextPage(3, "fpasssurvey")
    } else {
        var numError = document.getElementById("reqfields")
        numError.style.visibility = "visible";
        numError.style.opacity = 1;
    }
}
window.gotofpasssurvey = gotofpasssurvey;
