import { setProgress, getQuestions, generateQuestions, setTime, nextPage, getResponse, setVisible, setInnerHtml } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 3);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 3) {
    window.location = "/";
}

var questions = await getQuestions("fpasssurvey");
var val = generateQuestions(questions);
setInnerHtml("#quest", val);
setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);

async function gotofpassrecall() {
    var data = getResponse(questions);
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);
        
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        nextPage(4, "fpassrecall");
    } else {
        setVisible("#reqfields", true);
    }
}
window.gotofpassrecall = gotofpassrecall;