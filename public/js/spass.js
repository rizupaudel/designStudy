import {setProgress, getDesign } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 9);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 1) {
//     window.location = "/";
// }

var data = await getDesign(sessionStorage.getItem("did"));
var images = data.images;
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

loadImage();


async function gotoscog() {
    var res = comparePasswords()
    if (1 in res) {
        sessionStorage.setItem("page_id", 10);
        sessionStorage.setItem("password2", res[1]);
        window.location = "scog";
    } else {
        var p = document.getElementById("passmatch");
        p.innerHTML = res[0]
        p.style.visibility = "visible";
        p.style.opacity = 1;
    }
}
window.gotoscog = gotoscog;

function comparePasswords() {
    var x = document.getElementById("pass");
    var y = document.getElementById("repass");
    
    if (x.value === y.value) {
        if (x.value === "" || y.value === "") {
            return {0: "⚠️ Password is required!"}
        }
        return {1: x.value};
    } else {
        return {0: "⚠️ Passwords did not match!"}
    }
}

function showPasswords() {
    var x = document.getElementById("pass");
    var y = document.getElementById("repass");
    if (x.type === "password" || y.type==="password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
}
window.showPasswords = showPasswords;


// function secondImage(){
//     var pages = document.getElementById("pages");
//     pages.src = "designs/Dart2.png";
// }
// window.secondImage = secondImage;


// function firstImage() {
//     var pages = document.getElementById("pages");
//     pages.src = "designs/Dart1.png";
// }
// window.firstImage = firstImage;