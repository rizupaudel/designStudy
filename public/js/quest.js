import { setProgress, generateQuestions } from "./utility.js";
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }

var questions = [
    {
        "qid": 1,
        "text": "On each row, select a circle closer to the attribute you think applies to the design on left.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "not understandable",
                    "high": "understandable"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "difficult to learn",
                    "high": "easy to learn"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": " complicated",
                    "high": "easy"
                }
            },
            {
                "sid": 4,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "clear",
                    "high": "confusing"
                }
            },
            {
                "sid": 5,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "inferior",
                    "high": "valuable"
                }
            },
            {
                "sid": 6,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "boring",
                    "high": "exciting"
                }
            },
            {
                "sid": 7,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "not interesting",
                    "high": "interesting"
                }
            },
            {
                "sid": 8,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "demotivating ",
                    "high": "motivating"
                }
            },
            {
                "sid": 9,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "dull",
                    "high": "creative"
                }
            },
            {
                "sid": 10,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "conventional ",
                    "high": "inventive"
                }
            },
            {
                "sid": 11,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "usual",
                    "high": "leading edge"
                }
            },
            {
                "sid": 12,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "conservative",
                    "high": "innovative"
                }
            },
            {
                "sid": 13,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "ugly",
                    "high": "beautiful"
                }
            },
            {
                "sid": 14,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "lacking style",
                    "high": "stylish"
                }
            },
            {
                "sid": 15,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "unappealing",
                    "high": "appealing"
                }
            },
            {
                "sid": 16,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "unpleasant",
                    "high": "pleasant"
                }
            },
            {
                "sid": 17,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "useless",
                    "high": "useful"
                }
            },
            {
                "sid": 18,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "not helpful",
                    "high": "helpful"
                }
            },
            {
                "sid": 19,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "not beneficial",
                    "high": "beneficial"
                }
            },
            {
                "sid": 20,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "poorly grouped",
                    "high": "well grouped"
                }
            },
            {
                "sid": 21,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "unstructured",
                    "high": "structured"
                }
            },
            {
                "sid": 22,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "disordered",
                    "high": "ordered"
                }
            },
            {
                "sid": 23,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "disorganized",
                    "high": "organized"
                }
            },
            {
                "sid": 24,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "engaging",
                    "high": "not engaging"
                }
            },
            {
                "sid": 25,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "uninformative",
                    "high": "informative"
                }
            }
        ],
        
    }
];

function loadDesignImages() {
    var images = ["designs/Logos1.png", "designs/Logos2.png", "designs/Logos1.png"];
    var imageContainer = document.getElementById("leftdesign");
    var val = "";
    for (let i in images) {
        val += `<li><img src="${images[i]}" ></li>`;
    }
    // console.log(val);
    imageContainer.innerHTML = val;
}

loadDesignImages();


function divideQuestions(nS) {
    var dividedQuestions = {};
    for (let qn in questions) {
        var subquestions = questions[qn].subquestions;
        for (let i = 0; i < subquestions.length; i += nS) {
            let partQuestions = {};
            partQuestions["qid"] = questions[qn]["qid"];
            partQuestions["text"] = questions[qn]["text"];
            partQuestions["subquestions"] = subquestions.slice(i, i+nS);
            dividedQuestions[Math.floor(i/nS)+1] = [partQuestions];
        }
    };
    return dividedQuestions;
}

function setIndicator(i, n) {
    var indicator = document.getElementById("indicator");
    val = `Page ${i} of ${n}`;
    indicator.innerHTML = val;
}
var chunkSize = 9;
var nPage = sessionStorage.getItem("nPage") || 1;
var quest = document.getElementById("quest");
// console.log(divideQuestions(9));
var val = generateQuestions(divideQuestions(chunkSize)[nPage]);
quest.innerHTML = val;
setIndicator(nPage, Object.keys(divideQuestions(chunkSize)).length);

async function gotocsquest() {
    var response = {};
    var next_flag = true;
    let partQuestions = divideQuestions(chunkSize)[nPage];
    for (let qn in partQuestions) {
        var subquestions = partQuestions[qn].subquestions;
        for (let sqn in subquestions) {
            var checked_flag = false;
            var qsid = partQuestions[qn].qid + "-" + subquestions[sqn].sid;
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
            }
        }
    }
    var reqError = document.getElementById("reqfields");

    if (!next_flag) {
        reqError.style.display = "block";
    } else {
        reqError.style.display = "none";
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${nPage}`, JSON.stringify(response));
        nPage = parseInt(nPage) + 1;
        if (nPage in divideQuestions(chunkSize)) {
            var val = generateQuestions(divideQuestions(chunkSize)[nPage]);
            quest.innerHTML = val;
            setIndicator(nPage, Object.keys(divideQuestions(chunkSize)).length);
            sessionStorage.setItem("nPage", nPage);
            next_flag = true;
        } else {
            sessionStorage.removeItem("nPage");
            sessionStorage.setItem("page_id", 8);
            window.location = "csquest";
        }
    }

    // var response = {};
    // var next_flag = true;
    // for (let qn in questions) {
    //     var subquestions = questions[qn].subquestions;
    //     for (let sqn in subquestions) {
    //         var checked_flag = false;
    //         var qsid = questions[qn].qid + "-" + subquestions[sqn].sid;
    //         if (subquestions[sqn].type === "likert") {
    //             var el = document.getElementsByName(qsid);
    //             for (let i = 0; i < el.length; i++) {
    //                 if (el[i].checked) {
    //                     response[qsid] = el[i].value;
    //                     checked_flag = true;
    //                 }
    //             }
    //             var lel = document.getElementById(qsid).getElementsByClassName("low")[0];
    //             var hel = document.getElementById(qsid).getElementsByClassName("high")[0];
    //             if (!checked_flag) {
    //                 lel.style.color = "red";
    //                 hel.style.color = "red";
    //                 next_flag = false;
    //             } else {
    //                 lel.style.color = "black";
    //                 hel.style.color = "black";
    //             }
    //         } else if (subquestions[sqn].type === "checkbox") {
    //             var el = document.getElementsByClassName("checkbox");
    //             response[qsid] = [];
    //             for (let i = 0; i < el.length; i++) {
    //                 if (el[i].checked) {
    //                     response[qsid].push(el[i].value);
    //                     checked_flag = true;
    //                 }
    //             }
    //         }
    //     }
    // }
    // var reqError = document.getElementById("reqfields");
    // if (!next_flag) {
    //     reqError.style.display = "block";
    // } else {
    //     reqError.style.display = "none";
    //     sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
    //     sessionStorage.setItem("page_id", 8);
    //     window.location = "csquest";
    // }
}
window.gotocsquest = gotocsquest;