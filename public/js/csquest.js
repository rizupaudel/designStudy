import { setProgress, getQuestions, getDesign, generateQuestions, setTime, getResponse, setVisible, nextPage, setInnerHtml } from "./utility.js";
sessionStorage.setItem("page_id", sessionStorage.getItem("page_id") || 8);
window.setProgress = setProgress;
window.setTime = setTime;
setProgress(sessionStorage.getItem("page_id"));

// if (sessionStorage.getItem("page_id") != 5) {
//     window.location = "/";
// }


window.addEventListener('click', (event) => {
    if (event.target.value ) {
        var tbox = document.getElementsByName(event.target.name+"-val");
        if (event.target.value.includes("please specify:")) {
            tbox[0].disabled = event.target.checked ? false : true;
            tbox[0].value = event.target.checked ? tbox[0].value : "";
        } else {
            if (tbox.length>0)
                tbox[0].value = "";
                tbox[0].disabled = true;

        }
    }
});

function loadDesignImages() {
    var val = "";
    for (let i in images) {
        val += `<img class="myImg" id="${i}" src="${images[i]}">`;
    }
    setInnerHtml(".images", val);
}

var questions = await getQuestions("csquest");
setVisible('.card', true);
setVisible('#loading', false);

function divideQuestions() {
    var dividedQuestions = {};
    dividedQuestions[1] = questions.slice(0, 2);
    dividedQuestions[2] = questions.slice(2);
    return dividedQuestions;
}

function setIndicator(i, n) {
    var indicator = document.getElementById("indicator");
    val = `Page ${i} of ${n}`;
    indicator.innerHTML = val;
}

var nPage = parseInt(sessionStorage.getItem("nPage")) || 1;
var tPage = parseInt(sessionStorage.getItem("tPage")) || 1;
var val = generateQuestions(divideQuestions()[tPage]);
setInnerHtml("#quest", val);
setIndicator(nPage + tPage, Object.keys(divideQuestions()).length + nPage);

var images = ["designs/image-loader.gif"];
loadDesignImages();
var data = await getDesign(sessionStorage.getItem("did"));
images = data.images;
loadDesignImages();
setVisible('body', true);

async function gotomotivation() {
    let partQuestions = divideQuestions()[tPage];
    var data = getResponse(partQuestions);
    var response = data.response;

    if (data.next_flag) {
        setVisible("#reqfields", false);

        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}`, JSON.stringify(response));
        tPage = parseInt(tPage) + 1;
        if (tPage in divideQuestions()) {
            var val = generateQuestions(divideQuestions()[tPage]);
            setInnerHtml("#quest", val);
            setIndicator(nPage + tPage, Object.keys(divideQuestions()).length + nPage);
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
