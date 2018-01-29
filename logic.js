function changeView() {
    var api = document.getElementById("api");
    var intro = document.getElementById("intro");
    var btn = document.getElementById("btnChangeView");
    var tit = document.getElementById("titleText");

    if (api.style.display === "none") {
        api.style.display = "block";
        intro.style.display = "none";
        tit.textContent = "Setup";
    } else {
        api.style.display = "none";
        intro.style.display = "block";
        tit.textContent = "Introduction";
    }

}
