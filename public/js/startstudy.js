import { setVisible, wait, setTime, nextPage } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 0);
window.setTime = setTime;

window.addEventListener('DOMContentLoaded', (event) => {
    wait(1000).then(() => {
        setVisible('body', true);
        setVisible('.card', true);
        setVisible('#loading', false);
    });
});

async function startStudy() {
    nextPage(1, "fpass");
}
window.startStudy = startStudy;