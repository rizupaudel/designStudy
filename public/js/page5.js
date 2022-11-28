import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(5);

if (sessionStorage.getItem("page_id") != 5) {
    window.location = "/";
}

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
    const response = await window.fetch('/get_quests' + "/" + a);
    var qData = await response.json();
    return qData.questions;
}

var questions = await getQuestions(1);
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
img.onclick = function(){
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
    console.log(ret_val);

    var p = document.getElementById("reqfields");
    p.style.display = "block";

    console.log(next_flag);
    if (next_flag) {
        sessionStorage.setItem("page_id", 6);
        // sessionStorage.clear();
        window.location = "page6";
    }

    // var questions = {"q1": 0, "q2": 0, "q3": 0, "q4": 0, "q5": 0};
    // for (var q in questions) {
    //     var el = document.getElementsByName(q);
    //     for (i = 0; i < el.length; i++) {
    //         if (el[i].checked) {
    //             questions[q] = el[i].value;
    //         }
    //     }
    // }
    
    // const res = await window.fetch('/post_data', 
    // {
    //     method:'POST', 
    //     headers: {
    //         'Content-Type':'application/json'
    //     }, 
    //     body: JSON.stringify(Object.values(questions))
    // }).then(result=>result.json());
    // // console.log(res);
    // document.getElementById("result").innerHTML = "Movie Rating: " + printObject(questions) + printObject(res);
}
window.submitClick = submitClick;