import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 1) {
//     window.location = "/";
// }

async function gotodemo() {
    var ntry = parseInt(sessionStorage.getItem("ntry")) || 1;
    
    var nextPage = true;
    var cpassword = getPassword();

    if (ntry < 3) {
        if (!verifyPassword(cpassword)) {
            var p = document.getElementById("retryPass");
            p.style.display = "block";
            clearPassword();
            nextPage = false;
        }
    }
    ntry += 1;
    sessionStorage.setItem("ntry", ntry);
    (!nextPage || ntry===4) && sessionStorage.setItem(`password2_recall${ntry-1}`, cpassword);
    
    if (nextPage) {
        window.location = "demo";
        delete sessionStorage.ntry;
    }
}
window.gotodemo = gotodemo;


function clearPassword() {
    var x = document.getElementById("pass");
    x.value = "";
}

function getPassword() {
    var x = document.getElementById("pass");
    return x.value;
}

function verifyPassword(cpassword) {
    var password1 = sessionStorage.getItem("password2");
    return cpassword === password1;

}

function showPassword() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
window.showPassword = showPassword;