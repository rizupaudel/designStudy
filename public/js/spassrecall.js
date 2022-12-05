import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 1) {
//     window.location = "/";
// }

async function gotodemo() {
    var ntry = parseInt(sessionStorage.getItem("ntry")) || 1;
    
    var nextPage = true;
    var passBox = document.getElementById("pass");
    var errorText = document.getElementById("retryPass");
    var cpassword = passBox.value;

    if (cpassword==="") {
        errorText.innerHTML = "⚠️ Password is required!";
        errorText.style.display = "block";
    } else {
        if (ntry < 3) {
            if (!verifyPassword(cpassword)) {
                errorText.style.display = "block";
                passBox.value = "";
                nextPage = false;
            }
        }
        ntry += 1;
        sessionStorage.setItem("ntry", ntry);
        (!nextPage && ntry===3) && sessionStorage.setItem(`password2_recall${ntry-1}`, cpassword);
        
        if (nextPage) {
            window.location = "demo";
            sessionStorage.removeItem("ntry");
        }
    }
}
window.gotodemo = gotodemo;


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