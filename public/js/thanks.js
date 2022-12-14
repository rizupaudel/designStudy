import { setInnerHtml, setProgress, setVisible } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 15);
window.setProgress = setProgress;
setProgress(14);

generategiftcard();
sessionStorage.clear();

// if (sessionStorage.getItem("page_id") != 6) {
//     window.location = "/";
// }

async function generategiftcard() {
    setInnerHtml(".giftcard", "Please submit this code to MTurk: " + sessionStorage.getItem("giftcard"));
}