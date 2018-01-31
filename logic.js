function changeView() {
    var api = document.getElementById("api");
    var intro = document.getElementById("intro");
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

function openPopup() {
    var test = document.getElementById("dialogAgri");
    var area = document.getElementById("area1");
    if(test.style.display === "none"){
        test.style.display = "block";
        area.style.fill = "red";

    }else {
        test.style.display = "none";
    }

}


