import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 1) {
//     window.location = "/";
// }

async function gotoscog() {
    var res = comparePasswords()
    if (1 in res) {
        sessionStorage.setItem("page_id", 10);
        sessionStorage.setItem("password2", res[1]);
        window.location = "scog";
    } else {
        var p = document.getElementById("passmatch");
        p.innerHTML = res[0]
        p.style.display = "block";
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