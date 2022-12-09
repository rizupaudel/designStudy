const { runQuery } = require("./database");

var fpasssurveyQ = require("./data/questions/fpasssurvey");
var spasssurveyQ = require("./data/questions/spasssurvey");
var demoQ = require("./data/questions/demo");
var questQ = require("./data/questions/quest");
var csquestQ = require("./data/questions/csquest");

const { v4: uuidv4 } = require('uuid');
var fs = require('fs');
const { setMaxIdleHTTPParsers } = require("http");


var pTotal = 14;
function getProgressPercent(val, ext=0) {
    pTotal += parseInt(ext);
    return val>=14 ? 100 : val/pTotal*100;
}

// async function getQuestions(a) {
//     let questions = [];
//     let qrows = await runQuery("SELECT d.qid, d.cid, q.text FROM designmap as d inner join questions as q on d.qid=q.qid where d.did=" + a + ";");
//     qrows = qrows.rows;
//     for (i in qrows) {
//         let question = {};
//         question["quest"] = qrows[i].text;
//         question["qid"] = qrows[i].qid;
//         let lrows = await runQuery('SELECT l.lid, l.text, highscale, lowscale, nscale, c.rank from likerts as l inner join catmap as c on c.lid=l.lid where cid=' + qrows[i].cid + ";")
//         lrows = lrows.rows;
//         for (j in lrows) {
//             lrows[j].lid = qrows[i].qid + "-" + lrows[j].lid;
//         }
//         question["likerts"] = lrows;
//         questions.push(question);
//     }
//     return questions;
// }

function getQuestions(a) {
    q = a + "Q";
    return eval(q);
}

function getDesign() {
    return {"design": ["Dart1.png", "Dart2.png"]};
}

function getQuery(table, o) {
    var fields = "";
    var values = "";
    for (let field in o) {
        fields += `${field}, `;
        values += `'${o[field]}', `;
    }
    fields.slice(0, -2);
    values.slice(0, -2);
    var insertQuery =  `INSERT INTO ${table} (${fields.slice(0, -2)}) VALUES (${values.slice(0, -2)});`;
    return insertQuery;
}

// async function saveResponse(data) {
//     let passwords = JSON.parse(data.passwords);
//     var q1 = getQuery("password", passwords);
//     let resp = await runQuery(q1);
//     console.log(console.log("DB Insert: (passwords)" + resp));
//     let pid = resp.rows.insertId;
//     var surveyresponse = JSON.parse(data.surveyresponse);
//     console.log(surveyresponse);
//     for (let lqid in surveyresponse) {
//         var insertO = {}
//         var [qid, lid] = lqid.split("-");
//         insertO["qid"] = qid;
//         insertO["lid"] = lid;
//         insertO["pid"] = pid;
//         insertO["lid_value"] = surveyresponse[lqid];
//         var q = getQuery("response", insertO);
//         console.log(q);
//         let resp = await runQuery(q);
//         console.log("DB Insert: (response)" + resp);
//     }
// }

async function saveResponse(data) {
    respDir = './data/responses';
    if (!fs.existsSync(respDir)){
        fs.mkdirSync(respDir);
    }
    // var files = fs.readdirSync(respDir);
    // var mX = 0;
    // for (i in files) {
    //     let n = parseInt(files[i].split(".")[0]);
    //     if (n>mX) {mX = n}
    // }
    // mX += 1;
    fs.writeFile( respDir + '/' + uuidv4() + '.json', JSON.stringify(data), error => {
        if (error) {
            return false;
        }
    })
    return true;
}

module.exports = {getProgressPercent, getDesign, getQuestions, saveResponse}