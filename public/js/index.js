import { setProgress, getQuestions, generateQuestions, setTime, nextPage, getResponse, setVisible, setInnerHtml, clickEventListener } from "./utility.js";
sessionStorage.clear();

window.setProgress = setProgress;
window.setTime = setTime;
sessionStorage.setItem("page_id", 0);
setProgress(0);

clickEventListener();


var questions = await getQuestions("fpasssurvey");
var val = generateQuestions(questions);
setInnerHtml("#quest", val);
setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);

async function gotopagegif() {
    var data = getResponse(questions);
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);
        
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        nextPage(1, "pagegif");
    } else {
        setVisible("#reqfields", true);
    }
}
window.gotopagegif = gotopagegif;