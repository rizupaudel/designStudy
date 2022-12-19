import { setVisible, setProgress, getDesign, setTime, nextPage, updateImage, setInnerHtml } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 6);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 6) {
    window.location = "/";
}

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
    return true;
});

document.getElementById("checkbox").addEventListener('click', function(e) {
    document.getElementById("nextbutton").style.pointerEvents = e.target.checked ? "auto": "none";
    document.getElementById("nextbutton").style.opacity = e.target.checked ? 1: 0.4;
});

var did = sessionStorage.getItem("did");
var data = did ? await getDesign(did) : await getDesign();

var images = data.images;
sessionStorage.setItem("did", data.did);
if (images.length <= 1) {
    setInnerHtml("h2", "");
    setInnerHtml(".checkbox label", "I have gone through the design");
}

function loadImage(flag="") {
    updateImage(images, flag);
}
window.loadImage = loadImage;
loadImage();

function gotoquest() {
    nextPage(7, "quest");
}
window.gotoquest = gotoquest;