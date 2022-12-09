import { setProgress } from "./utility.js";
window.setProgress = setProgress;
setProgress(0.4);

sessionStorage.clear();
async function submitId() {
    sessionStorage.setItem("page_id", 0);
    var textBox = document.getElementsByClassName("textbox")[0];
    var workerId = textBox.value;
    if (workerId && Number.isInteger(+workerId)) {
        window.location = "startstudy";
    } else {
        var numError = document.getElementById("reqfields")
        numError.style.visibility = "visible";
        numError.style.opacity = 1;
    }
}
window.submitId = submitId;