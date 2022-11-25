import {setProgress} from "./utility.js";
window.setProgress = setProgress;
setProgress(5);



function generateLikert(lobj) {
    var val = '<ul class="likert">';
    if ("text" in lobj) {
        val += "<li>" + lobj.text + "--" + "</li>";
    }
    val += "<li>" + lobj.lowScale + "</li>";
    for (let i = 0; i < lobj.nScale; i++) {
        val += '<div class="box"> <li><input type="radio" name="' + lobj.lqid +'" value="' + i +'" /></li></div>';
    }
    val += "<li>" + lobj.highScale + "</li>";
    val += "</ul>";
    return val
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
        val += "<h2> [Q" + i + "] "+ qs[i].quest + "</h2>"
        val += generateQuestion(qs[i]);
    }
    quest.innerHTML = val;
}

async function getQuestions() {
    const response = await window.fetch('/get_quests');
    var qData = await response.json();
    return qData.questions;
}

generateQuestions(await getQuestions());

// function printObject(obj) {
//     result = "";
//     for (k in obj) {
//         result += "<h2>" + k + ": " + obj[k] + "</h2>";
//     }
//     return result;
// }

async function submitClick() {
    var questions = {"q1": 0, "q2": 0, "q3": 0, "q4": 0, "q5": 0};
    for (var q in questions) {
        var el = document.getElementsByName(q);
        for (i = 0; i < el.length; i++) {
            if (el[i].checked) {
                questions[q] = el[i].value;
            }
        }
    }
    
    const res = await window.fetch('/post_data', 
    {
        method:'POST', 
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify(Object.values(questions))
    }).then(result=>result.json());
    // console.log(res);
    document.getElementById("result").innerHTML = "Movie Rating: " + printObject(questions) + printObject(res);
}


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

