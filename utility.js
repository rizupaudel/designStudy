var fpasssurveyQ = require("./data/questions/fpasssurvey");
var spasssurveyQ = require("./data/questions/spasssurvey");
var demoQ = require("./data/questions/demo");
var questQ = require("./data/questions/quest");
var csquestQ = require("./data/questions/csquest");

var dF = require("./data/designs");

var fs = require('fs');
var respDir = './data/responses/';

// function isIn(qids) {
//     return function (question) {
//         if (qids.includes(question.qid))
//             return true;
//         return false;
//     }
// }
const randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

function getQuestion(questions, qid) {
    for (let i=0; i<questions.length; i++) {
        if (questions[i]["qid"] === qid) {
            if (qid === 1) {
                randomize(questions[i].subquestions);
            }
            return questions[i];
        }
    }
}

async function getQuestions(a) {
    var arr = a.split("-");
    q = arr[0] + "Q";
    if (arr.length>1) {
        if (arr[1] && arr[1]!=="null") {
            var questions = eval(q).questions;
            var ret_questions = {};
            var qids = dF.designs[arr[1]][arr[0]];

            for (let i=0; i<qids.length; i++) {
                var temp = [];
                for (let j=0; j<qids[i].length; j++) {
                    temp.push(getQuestion(questions, qids[i][j]));
                }
                ret_questions[i+1] = temp;
            }
            return {"questions": ret_questions};
        }
    }
    return eval(q);
}

async function getDesign(did) {
    // await wait(1000);
    designs = dF.designs;
    if (did === "null" || did === "") {
        return {"did": did, "images": ["image-loader.gif"]};
    } else if (did === "plc") {
        var i = Math.floor(Math.random() * Object.keys(designs).length+1);
        return {"did": i, "images": designs[i].images};
    }
    return {"did": did, "images": designs[did].images};
}

function generateGift(wid, did) {
    if (did && did !=="null") {
        return dF.designs[did].name + "-" + wid;
    } else {
        return "random" + "-" + wid;
    }
}

async function saveResponse(wid, data) {
    if (!fs.existsSync(respDir)){
        fs.mkdirSync(respDir);
    }
    var gcode = generateGift(wid, data.did);
    data["giftcode"] = gcode;
    fs.writeFile( respDir + '/' + wid + '.json', JSON.stringify(data), error => {
        if (error) {
            return false;
        }
    });
    return gcode;
}

async function getResponse() {
    var files = fs.readdirSync(respDir);
    var retObj = {};
    for (let fn in files) {
        var tempObj = {};
        try {
            var data = fs.readFileSync(respDir + files[fn])
            tempObj = JSON.parse(data);
        }
        catch (err) {
            tempObj(err)
        }
        retObj[files[fn].split(".")[0]] = tempObj;
    }
    return retObj;
}

const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));

async function verifyWorker(wid) {
    // await wait(1000);
    var files = fs.readdirSync(respDir)
    for (let i in files) {
        if (wid === files[i].split('.')[0]) {
            return {"valid": false, "errorMsg": "Worker ID already exists."};
        }
    }

    fs.writeFile( respDir + '/' + wid + '.json', "", error => {
        if (error) {
            return {"valid": false, "errorMsg": "Something went wrong."};
        }
    });
    return {"valid": true};
}


module.exports = {verifyWorker, getDesign, getQuestions, saveResponse, getResponse}