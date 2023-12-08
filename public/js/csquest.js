import {getQuestions, getDesign, generateQuestions, setProgress, updateImage, setInnerHtml, getResponse, nextPage} from "./utility.js";

setProgress(sessionStorage.getItem("page_id") | 8);

// if (sessionStorage.getItem("page_id") != 8) {
//     window.location = "/";
// }

var dataAD = await getDesign(1);
var imagesA = dataAD.images;


var dataBD = await getDesign(2);
var imagesB = dataBD.images;
console.log(dataBD);

var dataCD = await getDesign(3);
var imagesC = dataCD.images;

loadImage();

function loadImage(flag="") {
    updateImage(imagesA, flag, "A");
    updateImage(imagesB, flag, "B");
    updateImage(imagesC, flag, "C");
}

var questions = await getQuestions("csquest" + "-1");
var N = Object.keys(questions).length;

window.loadImage = loadImage;

var tPage = parseInt(sessionStorage.getItem("tPage")) || 1;
var qABC = questions[tPage];

var valA = generateQuestions(qABC, "-A");
var valB = generateQuestions(qABC, "-B");
var valC = generateQuestions(qABC, "-C");

setInnerHtml("#questA", valA);
setInnerHtml("#questB", valB);
setInnerHtml("#questC", valC);

function gotospasssurvey() {
    tPage = parseInt(sessionStorage.getItem("tPage")) || 1;
    qABC = questions[tPage];
    
    var dataA = getResponse(qABC, "-A");
    var dataB = getResponse(qABC, "-B");
    var dataC = getResponse(qABC, "-C");

    if (dataA.next_flag && dataB.next_flag && dataC.next_flag) {
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}_A_${dataAD.name}`, JSON.stringify(dataA.response));
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}_B_${dataBD.name}`, JSON.stringify(dataB.response));
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}_C_${dataCD.name}`, JSON.stringify(dataC.response));
        sessionStorage.setItem("tPage", tPage+1);

        qABC = questions[tPage+1];

        var valA = generateQuestions(qABC, "-A");
        var valB = generateQuestions(qABC, "-B");
        var valC = generateQuestions(qABC, "-C");

        setInnerHtml("#questA", valA);
        setInnerHtml("#questB", valB);
        setInnerHtml("#questC", valC);


        if (tPage>=N) {
            sessionStorage.removeItem("tPage");
            nextPage(9, "spasssurvey");
        }
    } 
}

window.gotospasssurvey = gotospasssurvey;