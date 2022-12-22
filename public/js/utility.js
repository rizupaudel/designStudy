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
        // let name = qsid + "-" + i;
        val += `<label for="${qsid}"><input type="checkbox" class="checkbox" name="${qsid}" value="${cI[i]}"> ${cI[i]} </label>`;
        if (cI[i].includes("please specify:")) {
            val += `<input type="text" class="optionval" name="${qsid}-val" disabled>`;
        }
        val += "<br>";
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

export function generateTextarea(qsid) {
    var val = '<div class="textareaC">';
    val += `<textarea class="textarea" name="${qsid}" rows="10" cols="70"></textarea><br>`;
    val += "</div>";
    return val;
}

export function generateOption(qsid, cI, custom=false) {
    var val = '<div class="option">';
    for (let i in cI) {
        // let name = qsid + "-" + i;
        val += `<label for="${qsid}"><input type="radio" class="option" name="${qsid}" value="${cI[i]}"> ${cI[i]} </label>`;
        if (cI[i].includes("please specify:")) {
            val += `<input type="text" class="optionval" name="${qsid}-val" disabled>`;
        }
        val += "<br>";
    }
    if (custom) {
        val += `<p class="custom"></p><textarea class="textarea" name="${qsid}-val" rows="3" cols="80"></textarea>`;
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
        val += generateOption(subQ.qsid, subQ.elements, subQ.custom);
    } else if (subQ.type === "textbox") {
        val += generateTextbox(subQ.qsid);
    } else if (subQ.type === "textarea") {
        val += generateTextarea(subQ.qsid);
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
    return val + "<hr>";
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
    var data = await window.fetch('/get_questions' + '/' + a).then(result => result.json());
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

export const setVisible = (elementOrSelector, visible) => {
    (typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector): elementOrSelector).style.visibility = visible ? 'visible' : 'hidden';
    (typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector): elementOrSelector).style.opacity = visible ? 1 : 0;
}

export const setDisplay = (elementOrSelector, visible) => {
    (typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector): elementOrSelector).style.display = visible ? 'block' : 'none';
}

export const setInnerHtml = (elementOrSelector, val) => {
    (typeof elementOrSelector === 'string' 
    ? document.querySelector(elementOrSelector)
    : elementOrSelector).innerHTML = val;
}

export const setColor = (elementOrSelector, val) => {
    (typeof elementOrSelector === 'string' 
    ? document.querySelector(elementOrSelector)
    : elementOrSelector).style.color = val;
}

export const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));


export function setTime() {
    sessionStorage.setItem("ptime", new Date());
}

export function setPageTime(page_id) {
    var ptime = Date.parse(sessionStorage.getItem("ptime")) || new Date();
    var ctime = new Date();
    sessionStorage.setItem(`${page_id-1}_time`, Math.round(ctime-ptime)/1000);
}

export function nextPage(page_id, page_name) {
    setPageTime(page_id)
    sessionStorage.setItem("page_id", page_id);
    window.location.replace(page_name);
}

export function getResponse(questions) {
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
                        var vall = "";
                        if (el[i].value.includes("please specify:")) {
                            vall = document.getElementsByName(qsid + "-val")[0].value;
                        } else {
                            vall = el[i].value;
                        }
                        if (vall) {
                            response[qsid].push(vall);
                            checked_flag = true;
                        }
                    }
                }
                var eel = document.getElementById("reqfield"+questions[qn].qid);
                if (!checked_flag) {
                    eel.style.visibility = "visible";
                    eel.style.opacity = 1;
                    next_flag = false;
                } else {
                    eel.style.visibility = "hidden";
                    eel.style.opacity = 0;
                }
            } else if (subquestions[sqn].type === "option") {
                var el = document.getElementsByName(qsid);
                for (let i = 0; i < el.length; i++) {
                    if (el[i].checked) {
                        var vall = "";
                        if (el[i].value.includes("please specify:")) {
                            // vall += el[i].value.includes("different") ? "different - " : "variation - ";
                            vall += document.getElementsByName(qsid + "-val")[0].value;
                        } else {
                            vall = el[i].value;
                        }
                        if (vall) {
                            response[qsid] = vall;
                            checked_flag = true;
                        }
                    }
                }
                var eel = document.getElementById("reqfield"+questions[qn].qid);
                if (!checked_flag) {
                    eel.style.visibility = "visible";
                    eel.style.opacity = 1;
                    next_flag = false;
                } else {
                    eel.style.visibility = "hidden";
                    eel.style.opacity = 0;
                }
            } else if (subquestions[sqn].type === "textbox") {
                var el = document.getElementsByName(qsid);
                response[qsid] = el[0].value;
                if (el[0].value) {checked_flag = true};

                var eel = document.getElementById("reqfield"+questions[qn].qid);
                if (!checked_flag) {
                    eel.style.visibility = "visible";
                    eel.style.opacity = 1;
                    next_flag = false;
                } else {
                    eel.style.visibility = "hidden";
                    eel.style.opacity = 0;
                }
            } else if (subquestions[sqn].type === "textarea") {
                var el = document.getElementsByName(qsid);
                response[qsid] = el[0].value;
                if (el[0].value) {checked_flag = true};

                var eel = document.getElementById("reqfield"+questions[qn].qid);
                if (!checked_flag) {
                    eel.style.visibility = "visible";
                    eel.style.opacity = 1;
                    next_flag = false;
                } else {
                    eel.style.visibility = "hidden";
                    eel.style.opacity = 0;
                }
            }
        }
    }
    return {"response": response, "next_flag": next_flag}
}

export function updateImage(images, flag="") {
    var indicator = document.getElementById("indicator");
    var count = 1;
    var pages = document.getElementById("pages");
    var imgsrc = pages.getAttribute("src");
    if (imgsrc && imgsrc !== "") {
        let i = images.indexOf(imgsrc);
        if (flag === "next") {
            if (i >= 0 && i+1 < images.length) {
                pages.src = images[i+1];
                count = i + 2;
            } else {
                count = i + 1;
            }
        } else if (flag === "prev") {
            if (i-1 >= 0) {
                pages.src = images[i-1];
                count = i;
            }
        } else {
            pages.src = images[0];
        }
    }
    // disable next button
    document.getElementsByClassName("nButton")[0].style.pointerEvents = (count === images.length) ? "none": "auto";
    document.getElementById("n").src = (count === images.length) ? "": "designs/next.png";

    // disable previous button
    document.getElementsByClassName("pButton")[0].style.pointerEvents = (count === 1) ? "none": "auto";
    document.getElementById("p").src = (count === 1) ? "": "designs/prev.png";
    
    indicator.innerHTML = `${count} of ${images.length}`;
}

export function clickEventListener() {
    window.addEventListener('click', (event) => {
        if (event.target.value ) {
            var tbox = document.getElementsByName(event.target.name+"-val");
            if (event.target.value.includes("please specify:")) {
                tbox[0].disabled = event.target.checked ? false : true;
                tbox[0].value = event.target.checked ? tbox[0].value : "";
            } else {
                if (tbox.length>0 && event.target.className==="option") {
                    tbox[0].value = "";
                    tbox[0].disabled = true;
                }
            }
        }
    });
    return true;
}

export function loadDesignImages(images) {
    var val = "";
    for (let i in images) {
        val += `<img class="myImg" id="${i}" src="${images[i]}">`;
    }
    setInnerHtml(".images", val);
}

export function setIndicator(i, n) {
    var indicator = document.getElementById("indicator");
    var val = `Page ${i} of ${n}`;
    indicator.innerHTML = val;
}