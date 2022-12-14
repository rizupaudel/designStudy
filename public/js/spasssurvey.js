import { setProgress, getQuestions, generateQuestions, setTime, nextPage, getResponse, setInnerHtml, setVisible } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 12);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 12) {
    window.location = "/";
}

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