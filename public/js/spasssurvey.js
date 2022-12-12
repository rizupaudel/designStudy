import { setProgress, getQuestions, generateQuestions, setTime, nextPage } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 11);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }
var questions = await getQuestions("spasssurvey");

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

async function gotospassrecall() {
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
        // var res = await saveUserResponse(sessionStorage);
        // if (res.success) {
        //     sessionStorage.setItem("page_id", 6);
        // }

        nextPage(4, "spassrecall");
    }
}
window.gotofpassrecall = gotospassrecall;




// function generateLikert(qsid, lO) {
//     var val = `<ul class="likert" id="${qsid}">`;
//     val += `<li class="low"> ${lO.low} </li>`;
//     for (let i = 1; i <= 5; i++) {
//         val += `<div class="box"> <li><input type="radio" name="${qsid}" value="${i}" /></li></div>`;
//     }
//     val += `<li class="high"> ${lO.high} </li>`;
//     val += "</ul>";
//     return val;
// }

// function generateCheckbox(qsid, cI) {
//     var val = '<div class="checkbox">';
//     for (let i in cI) {
//         let name = qsid + "-" + i;
//         val += `<input type="checkbox" class="checkbox" value="${cI[i]}"> <label for="${name}"> ${cI[i]} </label><br>`;
//     }
//     val += "</div>";
//     return val;
// }

// function generateSubQuestion(subQ) {
//     var val = "";
//     if (subQ.title) {
//         val += "<h4> - " + subQ.title + "</h4>";
//     }
    
//     if (subQ.type === "likert") {
//         val += generateLikert(subQ.qsid, subQ.elements);
//     } else if (subQ.type === "checkbox") {
//         val += generateCheckbox(subQ.qsid, subQ.elements)
//     }
//     return val;
// }

// function generateQuestion(quesO) {
//     var val = "";
//     val += "<h3> (" + quesO.qn + ") "+ quesO.text + "</h3>"
//     for (let i in quesO.subquestions) {
//         let qsid = quesO.qid + "-" + quesO.subquestions[i].sid;
//         quesO.subquestions[i]["qsid"] = qsid;
//         val += generateSubQuestion(quesO.subquestions[i]);
//     }
//     return val;
// }

// function generateQuestions(qs) {
//     var quest = document.getElementById("quest");
//     var val = "";
//     for (let i in qs) {
//         var qn = parseInt(i) + 1;
//         qs[i]["qn"] = qn;
//         val += generateQuestion(qs[i]);
//     }
//     quest.innerHTML = val;
// }

// async function getQuestions(a) {
//     return questions;
// }

// // let did = 1;
// // sessionStorage.setItem("did", did)
// // var questions = await getQuestions(did);
// generateQuestions(questions);


// async function saveUserResponse() {
//     const res = await window.fetch('/post_survey_response', 
//     {
//         method:'POST',
//         headers: {
//             'Content-Type':'application/json'
//         }, 
//         body: JSON.stringify(sessionStorage)
//     }).then(result => result.json());
//     return res;
// };

// async function gotospassrecall() {
//     var response = {};
//     var next_flag = true;
//     for (let qn in questions) {
//         var subquestions = questions[qn].subquestions;
//         for (let sqn in subquestions) {
//             var checked_flag = false;
//             var qsid = questions[qn].qid + "-" + subquestions[sqn].sid;
//             if (subquestions[sqn].type === "likert") {
//                 var el = document.getElementsByName(qsid);
//                 for (let i = 0; i < el.length; i++) {
//                     if (el[i].checked) {
//                         response[qsid] = el[i].value;
//                         checked_flag = true;
//                     }
//                 }
//                 var lel = document.getElementById(qsid).getElementsByClassName("low")[0];
//                 var hel = document.getElementById(qsid).getElementsByClassName("high")[0];
//                 if (!checked_flag) {
//                     lel.style.color = "red";
//                     hel.style.color = "red";
//                     next_flag = false;
//                 } else {
//                     lel.style.color = "black";
//                     hel.style.color = "black";
//                 }
//             } else if (subquestions[sqn].type === "checkbox") {
//                 var el = document.getElementsByClassName("checkbox");
//                 response[qsid] = [];
//                 for (let i = 0; i < el.length; i++) {
//                     if (el[i].checked) {
//                         response[qsid].push(el[i].value);
//                         checked_flag = true;
//                     }
//                 }
//             }
//         }
//     }
//     var reqError = document.getElementById("reqfields");
//     if (!next_flag) {
//         reqError.style.display = "block";
//     } else {
//         reqError.style.display = "none";
//         sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
//         // var res = await saveUserResponse(sessionStorage);
//         // if (res.success) {
//         // }
//         sessionStorage.setItem("page_id", 12);
//         window.location = "spassrecall";
//     }
// }
// window.gotospassrecall = gotospassrecall;