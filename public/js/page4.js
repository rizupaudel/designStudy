async function gotoRoot() {
    sessionStorage.setItem("page_id", 5);
    window.location = "/";
}

function secondImage(){
    var pages = document.getElementById("Pages");
    pages.src = "designs/Logos2.png";
}