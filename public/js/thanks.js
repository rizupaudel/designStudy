import {setProgress} from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 14);
window.setProgress = setProgress;
setProgress(14);

// if (sessionStorage.getItem("page_id") != 6) {
//     window.location = "/";
// }