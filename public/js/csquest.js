import { setProgress, getQuestions, getDesign, generateQuestions, setTime, getResponse, setVisible, nextPage, setInnerHtml, clickEventListener, loadDesignImages, setIndicator, wait } from "./utility.js";
// sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 8);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

if (sessionStorage.getItem("page_id") != 8) {
    window.location = "/";
}

clickEventListener();

var questions = await getQuestions("csquest" + "-" + sessionStorage.getItem("did"));
setVisible('.card', true);
setVisible('#loading', false);

var nPage = parseInt(sessionStorage.getItem("nPage")) || 1;
var tPage = parseInt(sessionStorage.getItem("tPage")) || 1;
var val = generateQuestions(questions[tPage]);
setInnerHtml("#quest", val);
setIndicator(nPage + tPage, Object.keys(questions).length + nPage);

var images = ["designs/image-loader.gif"];
loadDesignImages(images);
var data = await getDesign(sessionStorage.getItem("did"));
images = data.images;
loadDesignImages(images);
if (images.length > 3) {
    document.getElementsByClassName("images")[0].style.columns = 2;
}
setVisible('body', true);

async function gotomotivation() {
    let partQuestions = questions[tPage];
    var data = getResponse(partQuestions);
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);

        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}`, JSON.stringify(response));
        tPage = parseInt(tPage) + 1;
        if (tPage in questions) {
            var val = generateQuestions(questions[tPage]);
            setVisible('.questionaire', false);
            await wait(300);
            setInnerHtml("#quest", val);
            setIndicator(nPage + tPage, Object.keys(questions).length + nPage);
            
            setVisible('.questionaire', true);
            sessionStorage.setItem("tPage", tPage);
        } else {
            sessionStorage.removeItem("nPage");
            sessionStorage.removeItem("tPage");
            nextPage(9, "motivation");
        }
    } else {
        setVisible("#reqfields", true);
    }
}
window.gotomotivation = gotomotivation;


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
