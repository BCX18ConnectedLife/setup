function changeView() {
    var api = document.getElementById("api");
    var intro = document.getElementById("intro");
    var tit = document.getElementById("titleText");
    var btn = document.getElementById("viewButton");


    if (api.style.display == "none") {
        api.style.display = "block";
        intro.style.display = "none";
        tit.textContent = "Setup";
        btn.textContent = "Introduction";
    } else {
        api.style.display = "none";
        intro.style.display = "block";
        tit.textContent = "Introduction";
        btn.textContent = "Setup";
    }
}
