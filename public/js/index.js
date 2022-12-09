sessionStorage.clear();

async function submitId() {

    var textBox = document.getElementsByClassName("textbox")[0];
    var wid = textBox.value;
    var errorMsg = "";

    if (wid) {
        var validResponse = await window.fetch('/verify_worker' + '/' + wid).then(result => result.json());
        if (validResponse.valid) {
            sessionStorage.setItem("page_id", 0);
            window.location = "startstudy";
        } else {
            errorMsg = validResponse.errorMsg + " Please try again.";
        }
    } else {
        errorMsg = "Worker ID is required."
    }
    errorMsg = "* " + errorMsg;
    var errorText = document.getElementById("reqfields");
    errorText.innerHTML = errorMsg;
    errorText.style.visibility = "visible";
    errorText.style.opacity = 1;
}
window.submitId = submitId;