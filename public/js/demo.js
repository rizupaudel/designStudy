import { getQuestions, setProgress, generateQuestions, setTime, nextPage, setVisible, getResponse, setInnerHtml } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 14);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
});

window.addEventListener('click', (event) => {
    if (event.target.value ) {
        var tbox = document.getElementsByName(event.target.name+"-val");
        if (event.target.value.includes("please specify:")) {
            tbox[0].disabled = false;
        } else {
            if (tbox.length>0)
                tbox[0].disabled = true;
        }
    }
});

var questions = await getQuestions("demo");
var val = generateQuestions(questions);
setInnerHtml("#quest", val);

async function gotothanks() {
    var data = getResponse(questions);
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);

        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        let res = await saveUserResponse();
        if (res.success) {
            sessionStorage.setItem("giftcard", res.success);
            nextPage(14, "thanks");
        } else {
            alert("There is a problem. Couldn't save the survey data.");
        }
    } else {
        setVisible("#reqfields", true);
    }
}
window.gotothanks = gotothanks;

async function saveUserResponse() {
    sessionStorage.removeItem("page_id");
    sessionStorage.removeItem("ptime");
    let wid = sessionStorage.getItem("wid");
    sessionStorage.removeItem("wid");
    const res = await window.fetch('/post_response' + '/' + wid, 
    {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(sessionStorage)
    }).then(result => result.json());
    return res;
};