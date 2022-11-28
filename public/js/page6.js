import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(5);

if (sessionStorage.getItem("page_id") != 6) {
    window.location = "/";
}