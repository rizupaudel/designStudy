import { setVisible, wait } from "./utility.js";

async function startStudy() {
    sessionStorage.setItem("page_id", 1);
    window.location = "fpass";
}
window.startStudy = startStudy;

window.addEventListener('DOMContentLoaded', (event) => {
    wait(1000).then(() => {
        setVisible('body', true);
        setVisible('.card', true);
        setVisible('#loading', false);
    });
});