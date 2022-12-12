import { setVisible, setProgress, getDesign, setTime, nextPage } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 6);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 4) {
//     window.location = "/";
// }

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
});

document.getElementById("checkbox").addEventListener('click', function(e) {
    document.getElementById("nextbutton").style.pointerEvents = e.target.checked ? "auto": "none";
    document.getElementById("nextbutton").style.opacity = e.target.checked ? 1: 0.4;
});

var data = {};
if (sessionStorage.getItem("did")) {
    data = await getDesign(sessionStorage.getItem("did"));
} else {
    data = await getDesign();
}
var did = data.did;
var images = data.images;
sessionStorage.setItem("did", did);


function loadImage(flag="") {
    var indicator = document.getElementById("indicator");
    var count = 1;
    var pages = document.getElementById("pages");
    var imgsrc = pages.getAttribute("src");
    if (imgsrc && imgsrc !== "") {
        let i = images.indexOf(imgsrc);
        if (flag === "next") {
            if (i >= 0 && i+1 < images.length) {
                pages.src = images[i+1];
                count = i + 2;
            } else {
                count = i + 1;
            }
        } else if (flag === "prev") {
            if (i-1 >= 0) {
                pages.src = images[i-1];
                count = i;
            }
        } else {
            pages.src = images[0];
        }
    } 
    // disable next button
    document.getElementsByClassName("nButton")[0].style.pointerEvents = (count === images.length) ? "none": "auto";
    document.getElementById("n").src = (count === images.length) ? "": "designs/next.png";

    // disable previous button
    document.getElementsByClassName("pButton")[0].style.pointerEvents = (count === 1) ? "none": "auto";
    document.getElementById("p").src = (count === 1) ? "": "designs/prev.png";

    
    indicator.innerHTML = `${count} of ${images.length}`;
}
window.loadImage = loadImage;

async function gotoquest() {
    nextPage(7, "quest");
}
window.gotoquest = gotoquest;

loadImage();