function setProgressBar(progress) {
    progress += "%";
    document.styleSheets[1].cssRules[1].style.width = progress;
    document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementsByClassName("progress-done")[0].innerHTML = progress
    })
}

async function getProgress(a) {
    const response = await window.fetch("/get_progress" + "/" + a).then(result=>result.json());
    return response;
}

export async function setProgress(req) {
    var progressObj = await getProgress(req);
    var progress = progressObj["progress"];
    setProgressBar(progress);
}