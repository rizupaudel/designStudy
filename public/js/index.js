import { setVisible } from "./utility.js";
sessionStorage.clear();

async function verifyWorker(wid) {
    return window.fetch('/verify_worker' + '/' + wid).then(result => result.json());
}

async function submitId() {
    var textBox = document.getElementsByClassName("textbox")[0];
    var errorText = document.getElementById("reqfields");

    var wid = textBox.value;
    var errorMsg = "";

    if (wid) {
        errorText.innerHTML = "Verifying Worker ID...";
        errorText.style.visibility = "visible";
        errorText.style.opacity = 1;
        const validResponse = await verifyWorker(wid);
        errorText.style.visibility = "hidden";
        errorText.style.opacity = 0;
        if (validResponse.valid) {
            sessionStorage.clear();
            sessionStorage.setItem("wid", wid);
            sessionStorage.setItem("page_id", 0);
            window.location = "startstudy";
        } else {
            errorMsg = validResponse.errorMsg + " Please try again.";
            errorMsg = "* " + errorMsg;
            errorText.innerHTML = errorMsg;
            errorText.style.visibility = "visible";
            errorText.style.opacity = 1;
        }
    } else {
        errorMsg = "Worker ID is required."
        errorMsg = "* " + errorMsg;
        errorText.innerHTML = errorMsg;
        errorText.style.visibility = "visible";
        errorText.style.opacity = 1;
    }
}
window.submitId = submitId;