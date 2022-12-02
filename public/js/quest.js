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
        
    }]

// async function getQuestions(a) {
//     const response = await window.fetch('/get_quests' + "/" + a);
//     var qData = await response.json();
//     return qData.questions;
// }
// let did = 1;
// sessionStorage.setItem("did", did)
// var questions = await getQuestions(did);
// generateQuestions(questions);

var quest = document.getElementById("quest");
var val = generateQuestions(questions);
quest.innerHTML = val;


// ***** For image zoom open *****
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// ***** END *****

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

async function gotocsquest() {
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
            }
        }
    }
    var reqError = document.getElementById("reqfields");
    if (!next_flag) {
        reqError.style.display = "block";
    } else {
        reqError.style.display = "none";
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response`, JSON.stringify(response));
        sessionStorage.setItem("page_id", 8);
        window.location = "csquest";
    }
}
window.gotocsquest = gotocsquest;