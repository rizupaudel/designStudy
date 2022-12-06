import { setProgress, generateQuestions } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 13);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }
var questions = [
    {
        "qid": 1,
        "text": "Please enter your participant ID that was provided by the researcher:",
        "subquestions": [
            {
                "sid": 1,
                "type": "textbox",
                "title": ""
            }
        ],
    },
    
    {
        "qid": 2,
        "text": "What is your gender?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Woman', 'Man', 'Transgender/Trans woman', 'Transgender/Trans man', 'Non-Binary', 'Other, please specify:', 'I prefer not to answer']
            }
        ]  
    },
    {
        "qid": 3,
        "text": "What is your age range?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": [
                    '18-24 years old', '25-29 years old', '30-34 years old', '35-39 years old', '40-44 years old', '45-49 years old', '50-54 years old', '55-59 years old', '60-64 years old', 'Above 65 years old', 
                    'I prefer not to answer'
                ]
            }
        ]
    },
    {
        "qid": 4,
        "text": "What is your race?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": [ 'White', 'Hispanic or Latino', 'Black or African American', 'Native American or American Indian', 'Asian', 'Pacific Islander', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
        
    },
    {
        "qid": 5,
        "text": "What is your highest achieved education level?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Less than High School', 'High School Graduate', 'Two-year College Degree', 'Four-year College Degree', 'Graduate degree (MS/Doctorate)', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
    },
    {
        "qid": 6,
        "text": "What is the primary field of your education?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Computer Science/Engineering, and Information Technology (IT)', 'Other areas of Engineering', 'Agriculture', 'Architecture, Design, and Arts', 'Economics, Humanities and Social Sciences', 'Medicine, Nursing, and Health Sciences', 'Education', 'Law, and Public Administration', 'Mathematics, and Natural Sciences (Physics, Chemistry, Biology)', 'Journalism, Media and Communication', 'Business', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
    },
    {
        "qid": 7,
        "text": "Which of the following best describes your primary occupation?",
        "subquestions": [
            {
                "sid": 1,
                "type": "option",
                "title": "",
                "elements": ['Student', 'Government', 'Educational institution', 'Business or industry', 'Non-profit organization', 'Other, please specify:', 'I prefer not to answer']
            }
        ]
    }
];


async function getQuestions(a) {
    return questions;
}

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

async function gotothanks() {
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
            } else if (subquestions[sqn].type === "option") {
                var el = document.getElementsByName(qsid);
                for (let i = 0; i < el.length; i++) {
                    if (el[i].checked) {
                        response[qsid] = el[i].value;
                    }
                }
            } else if (subquestions[sqn].type === "textbox") {
                var el = document.getElementsByName(qsid);
                response[qsid] = el[0].value;
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
        sessionStorage.setItem("page_id", 14);
        window.location = "thanks";
    }
}
window.gotothanks = gotothanks;