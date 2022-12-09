import { setProgress, getQuestions, generateQuestions } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 3);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }


// let did = 1;
// sessionStorage.setItem("did", did)
var questions = await getQuestions("fpasssurvey");
var quest = document.getElementById("quest");
var val = generateQuestions(questions);
quest.innerHTML = val;

async function saveUserResponse() {
    const res = await window.fetch('/post_survey_response', 
    {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify(sessionStorage)
    }).then(result => result.json());
    return res;
};

async function gotofpassrecall() {
    var response = {};
    var next_flag = true;
    for (let qn in questions) {
        var subquestions = questions[qn].subquestions;
        for (let sqn in subquestions) {
            var checked_flag = false;
            var qsid = questions[qn].qid + "-" + subquestions[sqn].sid;

            if (subquestions[sqn].type === "likert") {
                var el = document.getElementsByName(qsid);
                for (let i = 0; i < el.length; i++) {
                    if (el[i].checked) {
                        response[qsid] = el[i].value;
                        checked_flag = true;
                    }
                }
                var lel = document.getElementById(qsid).getElementsByClassName("low")[0];
                var hel = document.getElementById(qsid).getElementsByClassName("high")[0];
                if (!checked_flag) {
                    lel.style.color = "red";
                    hel.style.color = "red";
                    next_flag = false;
                } else {
                    lel.style.color = "black";
                    hel.style.color = "black";
                }
            } else if (subquestions[sqn].type === "checkbox") {
                var el = document.getElementsByClassName("checkbox");
                response[qsid] = [];
                for (let i = 0; i < el.length; i++) {
                    if (el[i].checked) {
                        response[qsid].push(el[i].value);
                        checked_flag = true;
                    }
                }
                var eel = document.getElementById("reqfield"+questions[qn].qid);
                if (!checked_flag) {
                    eel.style.visibility = "visible";
                    eel.style.opacity = 1;
                    next_flag = false;
                } else {
                    eel.style.visibility = "hidden";
                    eel.style.opacity = 0;
                }
            } else if (subquestions[sqn].type === "option") {
                var el = document.getElementsByName(qsid);
                for (let i = 0; i < el.length; i++) {
                    if (el[i].checked) {
                        response[qsid] = el[i].value;
                        checked_flag = true;
                    }
                }
                var eel = document.getElementById("reqfield"+questions[qn].qid);
                if (!checked_flag) {
                    eel.style.visibility = "visible";
                    eel.style.opacity = 1;
                    next_flag = false;
                } else {
                    eel.style.visibility = "hidden";
                    eel.style.opacity = 0;
                }
            } else if (subquestions[sqn].type === "textbox") {
                var el = document.getElementsByName(qsid);
                response[qsid] = el[0].value;
                if (el[0].value) {checked_flag = true};

                var eel = document.getElementById("reqfield"+questions[qn].qid);
                if (!checked_flag) {
                    eel.style.visibility = "visible";
                    eel.style.opacity = 1;
                    next_flag = false;
                } else {
                    eel.style.visibility = "hidden";
                    eel.style.opacity = 0;
                }
            }
        }
    }
    var reqError = document.getElementById("reqfields");
    if (!next_flag) {
        reqError.style.visibility = "visible";
        reqError.style.opacity = 1;
    } else {
        reqError.style.visibility = "hidden";
        reqError.style.opacity = 0;

        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        sessionStorage.setItem("page_id", 4);
        window.location = "fpassrecall";
    }
}
window.gotofpassrecall = gotofpassrecall;