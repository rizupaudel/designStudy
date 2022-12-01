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
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "not interesting",
                    "high": "interesting"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "demotivating ",
                    "high": "motivating"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "dull",
                    "high": "creative"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "conventional ",
                    "high": "inventive"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "usual",
                    "high": "leading edge"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "conservative",
                    "high": "innovative"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "ugly",
                    "high": "beautiful"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "lacking style",
                    "high": "stylish"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "unappealing",
                    "high": "appealing"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "unpleasant",
                    "high": "pleasant"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "useless",
                    "high": "useful"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "not helpful",
                    "high": "helpful"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "not beneficial",
                    "high": "beneficial"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "poorly grouped",
                    "high": "well grouped"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "unstructured",
                    "high": "structured"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "disordered",
                    "high": "ordered"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "disorganized",
                    "high": "organized"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "engaging",
                    "high": "not engaging"
                }
            },
            {
                "sid": 3,
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

// function printObject(obj) {
//     result = "";
//     for (k in obj) {
//         result += "<h2>" + k + ": " + obj[k] + "</h2>";
//     }
//     return result;
// }


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
    var ret_val = {};
    var next_flag = true;
    for (let qn in questions) {
        for (let ln in questions[qn].likerts) {
            var checked_flag = false;
            var lid = questions[qn].likerts[ln].lid;
            var el = document.getElementsByName(lid);
            for (let i = 0; i < el.length; i++) {
                if (el[i].checked) {
                    ret_val[lid] = el[i].value;
                    checked_flag = true;
                }
            }
            var lel = document.getElementById(lid).getElementsByClassName("l-scale")[0];
            var hel = document.getElementById(lid).getElementsByClassName("h-scale")[0];
            if (!checked_flag) {
                lel.style.color = "red";
                hel.style.color = "red";
                next_flag = false;
            } else {
                lel.style.color = "black";
                hel.style.color = "black";
            }
        }
    }
    var p = document.getElementById("reqfields");
    if (next_flag) {
        p.style.display = "none";
        // sessionStorage.setItem("surveyresponse", JSON.stringify(ret_val));
        // sessionStorage.setItem("passwords", JSON.stringify({"password1": "pass1", "password2": "pass2", "did": did}));
        // var res = await saveUserResponse(sessionStorage);
        // if (res.success) {
        // sessionStorage.clear();
        sessionStorage.setItem("page_id", 8);
        window.location = "csquest";
        // }
        
    } else {
        p.style.display = "block";
    }
}
window.gotocsquest = gotocsquest;