import { setVisible, setProgress, getDesign, setTime, nextPage, updateImage, updateImage1, setInnerHtml } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 6);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 7) {
    window.location = "/";
}

document.getElementById("checkbox").addEventListener('click', function(e) {
    document.getElementById("nextbutton").style.pointerEvents = e.target.checked ? "auto": "none";
    document.getElementById("nextbutton").style.opacity = e.target.checked ? 1: 0.4;
});

// var did = sessionStorage.getItem("did");
var did = 3;
var data = did ? await getDesign(did) : await getDesign();

var images = data.images;
sessionStorage.setItem("did", data.did);
if (images.length <= 1) {
    setInnerHtml("h2", "");
    setInnerHtml(".checkbox label", "I have gone through the design");
    if (images[0].includes("OnlineChat")) {
        setInnerHtml(".title", "Please scroll through the image.");
        document.querySelector(".designPages").style.overflow = "scroll";
        document.querySelector(".designPages").style.height = "69vh";
        document.querySelector(".designPages img").style.maxHeight = "none";
    }
}
if (images[0].includes("Reflection")) {
    // disable next button
    document.getElementsByClassName("nButton")[0].style.pointerEvents = "none";
    document.getElementById("n").src = "";

    // disable previous button
    document.getElementsByClassName("pButton")[0].style.pointerEvents = "none";
    document.getElementById("p").src = "";

    setInnerHtml(".title", "The design below contains multiple pages that altogether convey a message.<br>Please click on the <b>button inside the image</b> to navigate between the pages.");
    document.querySelector("#pages").setAttribute("onclick", `loadImage1("next")`);
    loadImage1();
} else {
    loadImage();
}

setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);

function loadImage(flag="") {
    updateImage(images, flag);
}
window.loadImage = loadImage;

function loadImage1(flag="") {
    updateImage1(images, flag);
}
window.loadImage1 = loadImage1;

function gotocsquest() {
    nextPage(8, "csquest");
}
window.gotocsquest = gotocsquest;