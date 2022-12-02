import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

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
];

// let did = 1;
// sessionStorage.setItem("did", did)
// var questions = await getQuestions(did);
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
            // var lid = questions[qn].likerts[ln].lid;
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
        // var res = await saveUserResponse(sessionStorage);
        // if (res.success) {
        //     sessionStorage.setItem("page_id", 6);
        // }
        sessionStorage.setItem("page_id", 4);
        window.location = "fpassrecall";
    }
}
window.gotofpassrecall = gotofpassrecall;