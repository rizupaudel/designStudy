import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 3) {
//     window.location = "/";
// }

async function gotodesignint() {
    sessionStorage.setItem("page_id", 6);
    window.location = "designint";
}
window.gotodesignint = gotodesignint;