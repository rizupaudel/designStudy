import { setProgress, getQuestions, generateQuestions } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 8);
window.setProgress = setProgress;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }

var questions = await getQuestions("csquest");

function loadDesignImages() {
    var images = ["designs/Logos1.png", "designs/Logos2.png"];
    var imageContainer = document.getElementById("leftdesign");
    var val = "";
    for (let i in images) {
        val += `<img src="${images[i]}" >`;
    }
    // console.log(val);
    imageContainer.innerHTML = val;
}

loadDesignImages();

function divideQuestions() {
    var dividedQuestions = {};
    dividedQuestions[1] = questions.slice(0, 1);
    dividedQuestions[2] = questions.slice(1);
    return dividedQuestions;
}

function setIndicator(i, n) {
    var indicator = document.getElementById("indicator");
    val = `Page ${i} of ${n}`;
    indicator.innerHTML = val;
}

var nPage = sessionStorage.getItem("nPage") || 1;
var quest = document.getElementById("quest");
var val = generateQuestions(divideQuestions()[nPage]);
quest.innerHTML = val;
setIndicator(nPage, Object.keys(divideQuestions()).length);

async function gotospass() {
    var response = {};
    var next_flag = true;
    let partQuestions = divideQuestions()[nPage];
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
                var eel = document.getElementById("reqfield"+partQuestions[qn].qid);
                if (!checked_flag) {
                    eel.style.display = "block";
                    next_flag = false;
                } else {
                    eel.style.display = "none";
                }
            } else if (subquestions[sqn].type === "option") {
                var el = document.getElementsByName(qsid);
                for (let i = 0; i < el.length; i++) {
                    if (el[i].checked) {
                        response[qsid] = el[i].value;
                        checked_flag = true;
                    }
                }
                var eel = document.getElementById("reqfield"+partQuestions[qn].qid);
                if (!checked_flag) {
                    eel.style.display = "block";
                    next_flag = false;
                } else {
                    eel.style.display = "none";
                }
            } else if (subquestions[sqn].type === "textbox") {
                var el = document.getElementsByName(qsid);
                response[qsid] = el[0].value;
                if (el[0].value) {checked_flag = true};

                var eel = document.getElementById("reqfield"+partQuestions[qn].qid);
                if (!checked_flag) {
                    eel.style.display = "block";
                    next_flag = false;
                } else {
                    eel.style.display = "none";
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
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${nPage}`, JSON.stringify(response));
        nPage = parseInt(nPage) + 1;
        if (nPage in divideQuestions()) {
            var val = generateQuestions(divideQuestions()[nPage]);
            quest.innerHTML = val;
            setIndicator(nPage, Object.keys(divideQuestions()).length);
            sessionStorage.setItem("nPage", nPage);
            next_flag = true;
        } else {
            sessionStorage.removeItem("nPage");
            sessionStorage.setItem("page_id", 9);
            window.location = "spass";
        }
    }
}
window.gotospass = gotospass;