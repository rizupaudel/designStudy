import { setProgress, getQuestions, generateQuestions, setTime, nextPage, getResponse, setInnerHtml, setVisible, setDisplay } from "./utility.js";

window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

var questions = await getQuestions("spasssurvey");
var val = generateQuestions(questions);
setInnerHtml("#quest", val);
setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);

async function gotodemo() {
    var data = getResponse(questions);
    var response = data.response;
    var next_flag = data.next_flag;

    if (next_flag) {
        setVisible("#reqfields", false);

        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        nextPage(10, "demo");
    } else {
        setVisible("#reqfields", true);
    }
}
window.gotodemo = gotodemo;