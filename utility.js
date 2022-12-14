var fpasssurveyQ = require("./data/questions/fpasssurvey");
var spasssurveyQ = require("./data/questions/spasssurvey");
var demoQ = require("./data/questions/demo");
var questQ = require("./data/questions/quest");
var csquestQ = require("./data/questions/csquest");

var dF = require("./data/designs");

var fs = require('fs');
var respDir = './data/responses';

function getQuestions(a) {
    q = a + "Q";
    return eval(q);
}

function getDesign(did) {
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
    return dF.designs[did].name + "-" + wid;
}

async function saveResponse(wid, data) {
    if (!fs.existsSync(respDir)){
        fs.mkdirSync(respDir);
    }
    fs.writeFile( respDir + '/' + wid + '.json', JSON.stringify(data), error => {
        if (error) {
            return false;
        }
    });
    return generateGift(wid, data.did);
}

const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));

async function verifyWorker(wid) {
    await wait(1000);
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


module.exports = {verifyWorker, getDesign, getQuestions, saveResponse}