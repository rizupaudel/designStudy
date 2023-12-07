import { getQuestions, setProgress, generateQuestions, setTime, nextPage, setVisible, getResponse, setInnerHtml, clickEventListener, setPageTime } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 14);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 10) {
//     window.location = "/";
// }

clickEventListener();

window.addEventListener('click', (event) => {
    if (event.target.value ) {
        var tbox6 = document.getElementsByClassName("demoq6");
        var tbox7 = document.getElementsByClassName("demoq7");
        var tbox8 = document.getElementsByClassName("demoq8");
        if (event.target.value.includes("I make my own")) {
            tbox6[0].style.display = event.target.checked ? "block" : "none";
            tbox7[0].style.display = event.target.checked ? "block" : "none";
            tbox8[0].style.display = event.target.checked ? "block" : "none";
        }

        var tbox10 = document.getElementsByClassName("demoq10");
        if (event.target.value.includes("I memorize")) {
            tbox10[0].style.display = event.target.checked ? "block" : "none";
        }

    }
});

var questions = await getQuestions("demo");
var val = generateQuestions(questions);
setInnerHtml("#quest", val);
setVisible('body', true);
setVisible('.card', true);
setVisible('#loading', false);

async function gotothanks() {
    var data = getResponse(questions, "", "demo");
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);
        
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        setPageTime(11);
        let res = await saveUserResponse();
        
        if (res.success) {
            // sessionStorage.setItem("giftcard", res.success);
            nextPage(11, "thanks");
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

    const res = await window.fetch('/post_response' + '/' + getRandomFileName(), 
    {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(sessionStorage)
    }).then(result => result.json());
    
    return res;
};

function getRandomFileName() {
    var timestamp = new Date().toISOString().replace(/[-:.]/g,"");  
    var random = ("" + Math.random()).substring(2, 8); 
    var random_number = timestamp+random;  
    return random_number;
}