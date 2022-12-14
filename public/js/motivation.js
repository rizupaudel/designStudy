import { nextPage, setProgress, setTime, setVisible } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 9);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
});

document.getElementById("checkbox").addEventListener('click', function(e) {
    document.getElementById("nextbutton").style.pointerEvents = e.target.checked ? "auto": "none";
    document.getElementById("nextbutton").style.opacity = e.target.checked ? 1: 0.4;
});

async function gotospass() {
    nextPage(10, "spass");
}
window.gotospass = gotospass;