import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(3);

// if (sessionStorage.getItem("page_id") != 2) {
//     window.location = "/";
// }

async function gotoPage3() {
    sessionStorage.setItem("page_id", 4);
    window.location = "page3";
}
window.gotoPage3 = gotoPage3;

// async function gotoPage22() {
//     sessionStorage.setItem("page_id", 22);
//     window.location = "page22";
// }