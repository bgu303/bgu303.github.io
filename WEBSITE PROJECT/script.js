document.getElementById("firstButton").focus();

/* function clickFunction1() {
    var image = document.getElementById("rocketleagueImage");
    if (!image.src.match("rocketleague.png")) {
        image.src = "rocketleague.png";
    }
}

function clickFunction2() {
    var image = document.getElementById("rocketleagueImage");
    if (!image.src.match("rocketleague2.png")) {
        image.src = "rocketleague2.png";
    }
}

function clickFunction3() {
    var image = document.getElementById("rocketleagueImage");
    if (!image.src.match("rocketleague3.png")) {
        image.src = "rocketleague3.png";
    }
}

function clickFunction4() {
    var image = document.getElementById("rocketleagueImage");
    if (!image.src.match("rocketleague4.png")) {
        image.src = "rocketleague4.png";
    }
}

function clickFunction5() {
    var image = document.getElementById("rocketleagueImage");
    if (!image.src.match("rocketleague5.png")) {
        image.src = "rocketleague5.png";
    }
} */

function pictureOnClickFunction(imageId, pictureName) {
    var image = document.getElementById(imageId);
    if (!image.src.match(pictureName)) {
        image.src = pictureName;
    }
}

function showValidators() {
    document.getElementById("validator1").style.display = "inline";
}