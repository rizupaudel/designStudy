import { nextPage, setProgress, setTime, setVisible } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 11);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 2) {
//     window.location = "/";
// }

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
});

async function gotospasssurvey() {
    var textBox = document.getElementsByClassName("textbox")[0];
    var nTriangle = textBox.value;
    
    if (nTriangle && Number.isInteger(+nTriangle)) {
        nextPage(12, "spasssurvey")
    } else {
        var numError = document.getElementById("reqfields")
        numError.style.visibility = "visible";
        numError.style.opacity = 1;
    }
}
window.gotospasssurvey = gotospasssurvey;
