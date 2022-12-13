import { setVisible, wait, setTime, nextPage } from "./utility.js";
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