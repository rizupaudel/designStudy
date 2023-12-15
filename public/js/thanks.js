import { setInnerHtml, setProgress, setVisible } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 15);
window.setProgress = setProgress;
setProgress(14);

// if (sessionStorage.getItem("page_id") != 11) {
//     window.location = "/";
// }

// generategiftcard();
window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
    return true;
});

sessionStorage.clear();

// if (sessionStorage.getItem("page_id") != 6) {
//     window.location = "/";
// }

// async function generategiftcard() {
//     setInnerHtml(".giftcard", sessionStorage.getItem("giftcard"));
// }