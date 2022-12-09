import { setProgress } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 5);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 3) {
//     window.location = "/";
// }

document.getElementById("checkbox").addEventListener('click', function(e) {
    document.getElementById("nextbutton").style.pointerEvents = e.target.checked ? "auto": "none";
    document.getElementById("nextbutton").style.opacity = e.target.checked ? 1: 0.4;
});

async function gotodesignint() {
    sessionStorage.setItem("page_id", 6);
    window.location = "designint";
}
window.gotodesignint = gotodesignint;