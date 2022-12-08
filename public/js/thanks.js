import { setProgress } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 14);
window.setProgress = setProgress;
setProgress(14);

sessionStorage.clear();

window.history.forward();
function noBack() { window.history.forward();}
window.noBack = noBack;
// if (sessionStorage.getItem("page_id") != 6) {
//     window.location = "/";
// }