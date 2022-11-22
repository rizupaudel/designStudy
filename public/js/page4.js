async function gotoRoot() {
    sessionStorage.setItem("page_id", 4);
    window.location = "/";
}

function secondImage(){
    var pages = document.getElementById("Pages");
    pages.src = "designs/Logos2.png";
}