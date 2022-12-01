import { setProgress, generateQuestions } from "./utility.js";
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }

var questions = [
    {
        "qid": 1,
        "text": "The way the design portrays what could happen because of the password strength:",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "makes me informed",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "makes me worried",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "makes me worried",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "encourages me to create a strong password",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "makes me feel emotionally connected to the presented scenario",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
            {
                "sid": 2,
                "type": "likert",
                "title": "makes me feel personally connected to the presented scenario",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            }
        ]
    },
    {
        "qid": 2,
        "text": "Here, what connection do you see between the dartboard and hacking a user’s password?",
        "subquestions": [
            {
                "sid": 1,
                "type": "textbox",
                "title": "",
            },
        ]
    },
    {
        "qid": 3,
        "text": "It is easy for me to follow the story depicted across multiple pages in the design.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
        ]
    },
    {
        "qid": 4,
        "text": "In the presented design, the portrayal of hacker stimulates me to create a strong password.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
        ]
    },
    {
        "qid": 5,
        "text": "In the presented design, the portrayal of victim encourages me to create a strong password.",
        "subquestions": [
            {
                "sid": 1,
                "type": "likert",
                "title": "",
                "elements": {
                    "low": "strongly disagree",
                    "high": "strongly agree"
                }
            },
        ]
    },
    {
        "qid": 6,
        "text": "Where do you want to see these kind of designs",
        "subquestions": [
            {
                "sid": 1,
                "type": "checkbox",
                "title": "",
                "elements": [
                    "Social Media",
                    "Email",
                    "Financial Websites",
                    "Entertainment and Gaming",
                    "E-commerce Websites",
                    "Online Video Streaming Websites",
                ]
            },
        ]
    }
]

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

async function gotospass() {
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
        sessionStorage.setItem("page_id", 9);
        window.location = "spass";
        // }
        
    } else {
        p.style.display = "block";
    }
}
window.gotospass = gotospass;