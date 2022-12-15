import { setProgress, setTime, nextPage, setVisible } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 13);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 1) {
//     window.location = "/";
// }

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
    return true;
});

async function gotodemo() {
    var ntry = parseInt(sessionStorage.getItem("ntry")) || 1;
    
    var next = true;
    var passBox = document.getElementById("pass");
    var errorText = document.getElementById("retryPass");
    var cpassword = passBox.value;

    if (cpassword==="") {
        errorText.innerHTML = "⚠️ Password is required!";
        errorText.style.visibility = "visible";
        errorText.style.opacity = 1;
    } else {
        if (ntry < 3) {
            if (!verifyPassword(cpassword)) {
                errorText.innerHTML = "⚠️ Password did not match. Please try again.";
                errorText.style.visibility = "visible";
                errorText.style.opacity = 1;
                passBox.value = "";
                next = false;
            }
        }
        (ntry <= 3 && !verifyPassword(cpassword)) && sessionStorage.setItem(`password2_recall${ntry}`, cpassword);
        ntry += 1;
        sessionStorage.setItem("ntry", ntry);

        if (next) {
            errorText.style.visibility = "hidden";
            errorText.style.opacity = 0;
            sessionStorage.removeItem("ntry");
            nextPage(14, "demo");
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