import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(5);

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }
var questions = [
    {
        "qid": 1,
        "text": "The password I have created is: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "Weak",
                    "high": "Strong"
                }
            }
        ],
    },
    
    {
        "qid": 2,
        "text": "The password I have created is: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "hard to remember",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "can be easily guessed by a hacker ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "can be easily guessed by my close friends or family members",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ],
        
    },
    {
        "qid": 3,
        "text": "Which of the following you have used in the password you have created. Please select all that apply.",
        "subquestions": [
            {
                "sid": 1,
                "type": "checkbox",
                "title": "",
                "elements": [ 
                    'My phone number or a part of it',
                    'My address or a part of it',
                    'My name or a part of it',
                    'Keyboard patterns',
                    'Names of family members or pets, or a part of it',
                    'Birthdays',
                    'My Identification (ID) number or a part of it',
                    'Repeated or sequential characters',
                    'Names of the favorite team in sports, player or a part of it'
                ]
            },
        ]
    },
    {
        "qid": 4,
        "text": "Please answer the following questions based on your behavior in real life: ",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "I do not change my passwords, unless I have to.",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "I use different passwords for different accounts that I have. ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 3,
                "type": "likert",
                "title": "When I create a new online account, I try to use a password that goes beyond the site’s minimum requirements. ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            },
            {
                "sid": 4,
                "type": "likert",
                "title": "I do not include special characters in my password if it’s not required. ",
                "elements": {
                    "low": " Strongly Disagree",
                    "high": "Strongly Agree"
                }
            }
        ],
        
    },
]

function generateLikert(lobj) {
    var val = '<ul class="likert" ' + "id=" + lobj.lid + '>';
    val += "<li class=l-scale>" + lobj.lowscale + "</li>";
    for (let i = 0; i < lobj.nscale; i++) {
        val += '<div class="box"> <li><input type="radio" name="' + lobj.lid +'" value="' + i +'" /></li></div>';
    }
    val += "<li class=h-scale>" + lobj.highscale + "</li>";
    if ("text" in lobj && lobj.text) {
        val += "<li>(" + lobj.text + ")" + "</li>";
    }
    val += "</ul>";
    return val;
}

function generateQuestion(qobj) {
    var val = "";
    for (let i in qobj.likerts) {
        val += generateLikert(qobj.likerts[i])
    }
    return val;
}

function generateQuestions(qs) {
    var quest = document.getElementById("quest");
    var val = "";
    for (let i in qs) {
        var qn = parseInt(i) + 1;
        val += "<h3> (" + qn + ") "+ qs[i].quest + "</h3>"
        val += generateQuestion(qs[i]);
    }
    quest.innerHTML = val;
}

async function getQuestions(a) {
    return questions;
}

let did = 1;
sessionStorage.setItem("did", did)
var questions = await getQuestions(did);
generateQuestions(questions);

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

async function submitClick() {
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
        sessionStorage.setItem("surveyresponse", JSON.stringify(ret_val));
        sessionStorage.setItem("passwords", JSON.stringify({"password1": "pass1", "password2": "pass2", "did": did}));
        var res = await saveUserResponse(sessionStorage);
        if (res.success) {
            sessionStorage.clear();
            sessionStorage.setItem("page_id", 6);
            window.location = "page6";
        }
        
    } else {
        p.style.display = "block";
    }
}
window.submitClick = submitClick;