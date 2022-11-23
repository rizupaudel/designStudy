import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(4);

async function gotoPage4() {
    sessionStorage.setItem("page_id", 4);
    window.location = "page4";
}
window.gotoPage4 = gotoPage4;