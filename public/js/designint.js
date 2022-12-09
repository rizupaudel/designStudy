import { setProgress, getDesign } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 6);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 4) {
//     window.location = "/";
// }

document.getElementById("checkbox").addEventListener('click', function(e) {
    document.getElementById("nextbutton").style.pointerEvents = e.target.checked ? "auto": "none";
    document.getElementById("nextbutton").style.opacity = e.target.checked ? 1: 0.4;
});

var images = await getDesign();
function loadImage(flag="") {
    var pages = document.getElementById("pages");
    var imgsrc = pages.getAttribute("src");
    if (imgsrc && imgsrc !== "") {
        let i = images.indexOf(imgsrc);
        if (flag === "next") {
            pages.src = i+1 < images.length ? images[i+1] : imgsrc;
        } else if (flag === "prev") {
            pages.src = i-1 >= 0 ? images[i-1] : imgsrc;
        } else {
            pages.src = images[0];
        }
    } else {
        pages.src = images[0];
    }
}
window.loadImage = loadImage;

async function gotoquest() {
    sessionStorage.setItem("page_id", 7);
    window.location = "quest";
}
window.gotoquest = gotoquest;

loadImage();