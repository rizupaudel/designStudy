import { setVisible, setInnerHtml, setColor } from "./utility.js";
sessionStorage.clear();

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
    return true;
});

async function verifyWorker(wid) {
    return window.fetch('/verify_worker' + '/' + wid).then(result => result.json());
}

async function submitId() {
    var textBox = document.getElementsByClassName("textbox")[0];
    var wid = textBox.value;
    var errorMsg = "";

    if (wid) {
        setInnerHtml("#reqfields", "Verifying Worker ID ...");
        setColor("#reqfields", "black");
        setVisible("#reqfields", true);
        const validResponse = await verifyWorker(wid);
        setVisible("#reqfields", false);
        setColor("#reqfields", "red");
        if (validResponse.valid) {
            sessionStorage.clear();
            sessionStorage.setItem("wid", wid);
            sessionStorage.setItem("page_id", 0);
            window.location.replace("startstudy");
        } else {
            errorMsg = validResponse.errorMsg + " Please try again.";
            errorMsg = "* " + errorMsg;
            setInnerHtml("#reqfields", errorMsg);
            setVisible("#reqfields", true);
        }
    } else {
        errorMsg = "Worker ID is required."
        errorMsg = "* " + errorMsg;
        setInnerHtml("#reqfields", errorMsg);
        setVisible("#reqfields", true);
    }
}
window.submitId = submitId;