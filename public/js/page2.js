import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(3);

async function gotoPage3() {
    sessionStorage.setItem("page_id", 3);
    window.location = "page3";
}
window.gotoPage3 = gotoPage3;

// async function gotoPage22() {
//     sessionStorage.setItem("page_id", 22);
//     window.location = "page22";
// }