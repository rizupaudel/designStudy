import { setProgress, getDesign, setTime, nextPage, setVisible, updateImage } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 10);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 10) {
    window.location = "/";
}

function loadImage(flag="") {
    updateImage(images, flag);
}
window.loadImage = loadImage;

var data = await getDesign(sessionStorage.getItem("did"));
var images = data.images;
loadImage();
setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);


async function gotoscog() {
    var res = comparePasswords()
    if (1 in res) {
        sessionStorage.setItem("password2", res[1]);
        nextPage(11, "scog");
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