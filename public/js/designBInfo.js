import { nextPage, setProgress, setTime, setVisible } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 5);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 4) {
    window.location = "/";
}

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
    return true;
});

async function gotodesignB() {
    nextPage(5, "designB");
}
window.gotodesignB = gotodesignB;