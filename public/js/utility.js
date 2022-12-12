function setProgressBar(progress) {
    progress = Math.round(progress);
    var progressText = progress + "%";
    document.styleSheets[1].cssRules[1].style.width = progressText;
    (progress>0) && (document.getElementsByClassName("progress-done")[0].innerHTML = progressText);
}

export async function setProgress(val, ext=0) {
    let pTotal = 14;
    pTotal += parseInt(ext);
    let progress = val>=14 ? 100 : val/pTotal*100;
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

export async function getDesign(did="plc") {
    const response = await window.fetch('/get_design' + '/' + did);
    var data = await response.json();
    var temparr = []
    for (let dn in data.images) {
        temparr.push("designs/" + data.images[dn]);
    }
    data.images = temparr
    return data;
}

export const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.visibility = visible ? 'visible' : 'hidden';

export const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));


export function setTime() {
    sessionStorage.setItem("ptime", new Date());
}

export function nextPage(page_id, page_name) {
    var ptime = Date.parse(sessionStorage.getItem("ptime")) || new Date();
    var ctime = new Date();
    sessionStorage.setItem(`${page_id-1}_time`, Math.round(ctime-ptime)/1000);
    sessionStorage.setItem("page_id", page_id);
    window.location = page_name;
}