import { getQuestions, setProgress, generateQuestions, setTime, nextPage, setVisible, getResponse, setInnerHtml, clickEventListener, setPageTime } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 14);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }

clickEventListener();

var questions = await getQuestions("demo");
var val = generateQuestions(questions);
setInnerHtml("#quest", val);
setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);

async function gotothanks() {
    var data = getResponse(questions);
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);
        
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        setPageTime(15);
        let res = await saveUserResponse();
        
        if (res.success) {
            sessionStorage.setItem("giftcard", res.success);
            nextPage(15, "thanks");
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
    let wid = sessionStorage.getItem("wid") || "random";
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