async function gotoPage2() {
    if (comparePassword()) {
        sessionStorage.setItem("page_id", 2);
        window.location = "page2";
    } else {
        var p = document.getElementById("passmatch");
        p.style.display="block";

    }
}

function comparePassword() {
    var x = document.getElementById("pass");
    var y = document.getElementById("repass");
    if (x.value === y.value) {
        return 1;
    } else {
        return 0;
    }
}

function showPassword() {
    var x = document.getElementById("pass");
    var y = document.getElementById("repass");
    if (x.type === "password" || y.type==="password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }