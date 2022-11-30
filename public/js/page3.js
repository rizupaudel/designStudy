import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(4);

// if (sessionStorage.getItem("page_id") != 3) {
//     window.location = "/";
// }

async function gotoPage4() {
    sessionStorage.setItem("page_id", 5);
    window.location = "page4";
}
window.gotoPage4 = gotoPage4;