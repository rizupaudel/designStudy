var index = require("./index");
var spasssurvey = require("./spasssurvey");
var demo = require("./demo");
var csquest = require("./csquest");

var fs = require('fs');

var files = fs.readdirSync("./");

for (i in files) {
    if (!files[i].includes("make") && files[i].endsWith("js")) {
        fs.writeFile(files[i]+'on', JSON.stringify(eval(files[i].split(".")[0]).questions), (error) => {
            if (error) throw error;
        });
    }
}
