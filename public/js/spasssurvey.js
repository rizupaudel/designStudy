import { setProgress, getQuestions, generateQuestions, setTime, nextPage, getResponse, setInnerHtml, setVisible, setDisplay } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 12);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 12) {
    window.location = "/";
}

var q2 = "Please tell us how your strategy varies from that in the presented design.";
var q3 = "Please tell us why you haven't used the password creation strategy presented in the design.";

window.addEventListener('click', (event) => {
    if (event.target.value ) {
        var tbox = document.getElementsByName(event.target.name+"-val")[0];
        if (event.target.value.includes("variation of the strategy")) {
            setInnerHtml(".custom", q2);
            setDisplay(".custom", true);
            tbox.style.display = "block";
        } else if (event.target.value.includes("totally different strategy")) {
            setInnerHtml(".custom", q3);
            setDisplay(".custom", true);
            tbox.style.display = "block";
        } else if (event.target.value.includes("same strategy")) {
            setDisplay(".custom", false);
            tbox.style.display = "none";
        }
    }
});

var questions = await getQuestions("spasssurvey");
var val = generateQuestions(questions);
setInnerHtml("#quest", val);
setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);

async function gotospassrecall() {
    var data = getResponse(questions);
    var response = data.response;
    var next_flag = data.next_flag;

    if (next_flag) {
        setVisible("#reqfields", false);

        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        nextPage(13, "spassrecall");
    } else {
        setVisible("#reqfields", true);
    }
}
window.gotofpassrecall = gotospassrecall;