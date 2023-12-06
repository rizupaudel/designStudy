import {getQuestions, getDesign, generateQuestions, updateImage, setInnerHtml, getResponse, nextPage} from "./utility.js";

var dataA = await getDesign(1);
var imagesA = dataA.images;

var dataB = await getDesign(2);
var imagesB = dataB.images;

var dataC = await getDesign(3);
var imagesC = dataC.images;

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

    console.log(dataA);
    console.log(dataB);
    console.log(dataC);

    if (dataA.next_flag && dataB.next_flag && dataC.next_flag) {
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}_A`, JSON.stringify(dataA.response));
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}_B`, JSON.stringify(dataB.response));
        sessionStorage.setItem(`p${sessionStorage.getItem("page_id")}_response_${tPage}_C`, JSON.stringify(dataC.response));
        sessionStorage.setItem("tPage", tPage+1);

        qABC = questions[tPage+1];

        var valA = generateQuestions(qABC, "-A");
        var valB = generateQuestions(qABC, "-B");
        var valC = generateQuestions(qABC, "-C");

        setInnerHtml("#questA", valA);
        setInnerHtml("#questB", valB);
        setInnerHtml("#questC", valC);

    }
    console.log(N);
    console.log(tPage)
    console.log(tPage>=N)

    if (tPage>=N) {
        sessionStorage.removeItem("tPage");
        nextPage(9, "spasssurvey");
    } 
}

window.gotospasssurvey = gotospasssurvey;