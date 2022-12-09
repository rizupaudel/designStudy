import { setProgress } from "./utility.js";
window.setProgress = setProgress;
setProgress(0.4);

sessionStorage.clear();

async function startStudy() {
    sessionStorage.setItem("page_id", 1);
    window.location = "fpass";
}
window.startStudy = startStudy;