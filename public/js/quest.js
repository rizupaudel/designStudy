import { setProgress, getQuestions, generateQuestions, setTime, getDesign, nextPage, setVisible, getResponse, setInnerHtml } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 7);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }

window.addEventListener('DOMContentLoaded', (event) => {
    setVisible('body', true);
    setVisible('.card', true);
    setVisible('#loading', false);
});

function loadDesignImages() {
    var val = "";
    for (let i in images) {
        val += `<img class="myImg" id="${i}" src="${images[i]}">`;
    }
    setInnerHtml(".images", val);
}

const randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

var questions = await getQuestions("quest");
var questionsn = await getQuestions("csquest");

function divideQuestions(nS) {
    var dividedQuestions = {};
    for (let qn in questions) {
        var subquestions = questions[qn].subquestions;
        for (let i = 0; i < subquestions.length; i += nS) {
            let partQuestions = {};
            partQuestions["qid"] = questions[qn]["qid"];
            partQuestions["text"] = questions[qn]["text"];
            partQuestions["subquestions"] = subquestions.slice(i, i+nS);
            randomize(partQuestions["subquestions"]); 
            dividedQuestions[Math.floor(i/nS)+1] = [partQuestions];
        }
    };
    return dividedQuestions;
}

function divideQuestionsn() {
    var dividedQuestions = {};
    dividedQuestions[1] = questionsn.slice(0, 1);
    dividedQuestions[2] = questionsn.slice(1);
    return dividedQuestions;
}

function setIndicator(i, n) {
    var indicator = document.getElementById("indicator");
    val = `Page ${i} of ${n}`;
    indicator.innerHTML = val;
}

var chunkSize = 10;
var nPage = sessionStorage.getItem("nPage") || 1;
var val = generateQuestions(divideQuestions(chunkSize)[nPage]);
setInnerHtml("#quest", val);
setIndicator(nPage, Object.keys(divideQuestions(chunkSize)).length + Object.keys(divideQuestionsn()).length);

var images = ["designs/image-loader.gif"];
loadDesignImages();
var data = await getDesign(sessionStorage.getItem("did"));
images = data.images;
loadDesignImages();

async function gotocsquest() {
    let partQuestions = divideQuestions(chunkSize)[nPage];
    var data = getResponse(partQuestions);
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${nPage}`, JSON.stringify(response));
        nPage = parseInt(nPage) + 1;
        if (nPage in divideQuestions(chunkSize)) {
            var val = generateQuestions(divideQuestions(chunkSize)[nPage]);
            setInnerHtml("#quest", val);
            setIndicator(nPage, Object.keys(divideQuestions(chunkSize)).length + Object.keys(divideQuestionsn()).length);
            sessionStorage.setItem("nPage", nPage);
        } else {
            nextPage(8, "csquest");
        }
    } else {
        setVisible("#reqfields", true);
    }
}
window.gotocsquest = gotocsquest;



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img");

function imageClickHandler() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var imgs = document.getElementsByClassName("myImg");

for (var i=0; i<imgs.length; i++) {
    imgs[i].onclick = imageClickHandler;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}