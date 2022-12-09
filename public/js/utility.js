function setProgressBar(progress) {
    progress = Math.round(progress);
    var progressText = progress + "%";
    document.styleSheets[1].cssRules[1].style.width = progressText;
    (progress>0) && (document.getElementsByClassName("progress-done")[0].innerHTML = progressText);
}

async function getProgress(a, b) {
    const response = await window.fetch("/get_progress" + "/" + a + "/" + b).then(result=>result.json());
    return response;
}

export async function setProgress(req, ext=0) {
    var progressObj = await getProgress(req, ext);
    var progress = progressObj["progress"];
    setProgressBar(progress);
}


export function generateLikert(qsid, lO) {
    var val = `<ul class="likert" id="${qsid}">`;
    val += `<li class="low"> ${lO.low} </li>`;
    for (let i = 1; i <= 7; i++) {
        val += `<div class="box"> <li><input type="radio" name="${qsid}" value="${i}" /></li></div>`;
    }
    val += `<li class="high"> ${lO.high} </li>`;
    val += "</ul>";
    return val;
}

export function generateCheckbox(qsid, cI) {
    var val = '<div class="checkbox">';
    for (let i in cI) {
        let name = qsid + "-" + i;
        val += `<label for="${name}"><input type="checkbox" class="checkbox" value="${cI[i]}"> ${cI[i]} </label><br>`;
    }
    val += "</div>";
    return val;
}

export function generateTextbox(qsid) {
    var val = '<div class="textbox">';
    val += `<input type="text" class="textbox" name="${qsid}"><br>`;
    val += "</div>";
    return val;
}

export function generateOption(qsid, cI) {
    var val = '<div class="option">';
    for (let i in cI) {
        let name = qsid + "-" + i;
        val += `<label for="${name}"><input type="radio" class="option" name="${qsid}" value="${cI[i]}"> ${cI[i]} </label><br>`;
        // val += `<input type="radio" class="option" name="${qsid}" value="${cI[i]}"> <label for="${name}"> ${cI[i]} </label><br>`;
    }
    val += "</div>";
    return val;
}

export function generateSubQuestion(subQ) {
    var val = "";
    if (subQ.title) {
        val += '<p class="sq">' + subQ.title + '</p>';
    }
    
    if (subQ.type === "likert") {
        val += generateLikert(subQ.qsid, subQ.elements);
    } else if (subQ.type === "checkbox") {
        val += generateCheckbox(subQ.qsid, subQ.elements);
    } else if (subQ.type === "option") {
        val += generateOption(subQ.qsid, subQ.elements);
    } else if (subQ.type === "textbox") {
        val += generateTextbox(subQ.qsid);
    }
    return val;
}

export function generateQuestion(quesO) {
    var val = "";
    val += '<p class="q">' + quesO.text + "</p>"
    for (let i in quesO.subquestions) {
        let qsid = quesO.qid + "-" + quesO.subquestions[i].sid;
        quesO.subquestions[i]["qsid"] = qsid;
        val += generateSubQuestion(quesO.subquestions[i]);
    }
    val += `<p id="reqfield${quesO.qid}" class="reqfield">This field is required.</p>`
    return val + "<br> <hr>";
}

export function generateQuestions(qs) {
    var val = "";
    for (let i in qs) {
        var qn = parseInt(i) + 1;
        qs[i]["qn"] = qn;
        val += generateQuestion(qs[i]);
    }
    return val;
}

export async function getQuestions(a) {
    const response = await window.fetch('/get_questions' + '/' + a);
    var data = await response.json();
    return data.questions;
}

export async function getDesign() {
    const response = await window.fetch('/get_design');
    var data = await response.json();
    var temparr = []
    for (let dn in data.design) {
        temparr.push("designs/" + data.design[dn]);
    }
    return temparr;
}