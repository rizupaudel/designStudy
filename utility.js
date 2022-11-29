const { runQuery } = require("./database");

function getProgressPercent(val) {
    return val/5*100;
}

async function getQuestions(a) {
    let questions = [];
    let qrows = await runQuery("SELECT d.qid, d.cid, q.text FROM designmap as d inner join questions as q on d.qid=q.qid where d.did=" + a + ";");
    qrows = qrows.rows;
    for (i in qrows) {
        let question = {};
        question["quest"] = qrows[i].text;
        question["qid"] = qrows[i].qid;
        let lrows = await runQuery('SELECT l.lid, l.text, highscale, lowscale, nscale, c.rank from likerts as l inner join catmap as c on c.lid=l.lid where cid=' + qrows[i].cid + ";")
        lrows = lrows.rows;
        for (j in lrows) {
            lrows[j].lid = qrows[i].qid + "-" + lrows[j].lid;
        }
        question["likerts"] = lrows;
        questions.push(question);
    }
    return questions;
}

function getQuery(table, o) {
    var fields = "";
    var values = "";
    for (field in o) {
        fields += `${field}, `;
        values += `'${o[field]}', `;
    }
    fields.slice(0, -2);
    values.slice(0, -2);
    var insertQuery =  `INSERT INTO ${table} (${fields.slice(0, -2)}) VALUES (${values.slice(0, -2)});`;
    return insertQuery;
}

async function saveResponse(data) {
    let passwords = JSON.parse(data.passwords);
    var q1 = getQuery("password", passwords);
    let resp = await runQuery(q1);
    console.log(console.log("DB Insert: (passwords)" + resp));
    let pid = resp.rows.insertId;
    var surveyresponse = JSON.parse(data.surveyresponse);
    console.log(surveyresponse);
    for (let lqid in surveyresponse) {
        var insertO = {}
        var [qid, lid] = lqid.split("-");
        insertO["qid"] = qid;
        insertO["lid"] = lid;
        insertO["pid"] = pid;
        insertO["lid_value"] = surveyresponse[lqid];
        var q = getQuery("response", insertO);
        console.log(q);
        let resp = await runQuery(q);
        console.log("DB Insert: (response)" + resp);
    }
    // var q2 = getQuery("response", surveyresponse);
    // console.log(q2)
    // var resp = await runQuery(q2);
    // console.log(resp);
}

// app.post('/post_data', (req, res) => {
//   db.query("INSERT INTO `design_study`.`survey1` (`q1`, `q2`, `q3`, `q4`, `q5`) VALUES (?)", [req.body], (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   })
// });

module.exports = {getProgressPercent, getQuestions, saveResponse}