function buttonHide() {
    document.getElementById("fishPictures").style.display = "none";
    document.getElementById("haukiPicture").style.display = "none";
    document.getElementById("ahvenPicture").style.display = "none";
    document.getElementById("sarkiPicture").style.display = "none";
    document.getElementById("button").disabled = false;
    

}

function getRandomBetweenNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getFishWeight(min, max) {
    return Math.random() * (max - min) + min;
}

function smallFishes() {

    document.getElementById("fishPictures").style.display = "block";
    document.getElementById("button").disabled = true;

    var percentageForEachFish = getRandomBetweenNumbers(1, 11);
    
    if (percentageForEachFish <= 1) {
        var smallHaukiWeight = getFishWeight(400, 1001);
        document.getElementById("smallFish").innerHTML = "YOU CAUGHT SMALL PIKE, WEIGHT IS: " + smallHaukiWeight.toFixed(2) + " GRAMS";
        document.getElementById("haukiPicture").style.display = "block";

    } else if (percentageForEachFish > 1 && percentageForEachFish <= 4) {
        var smallAhvenWeight = getFishWeight(50, 400);
        document.getElementById("smallFish").innerHTML = "YOU CAUGHT A SMALL PERCH, WEIGHT IS: " + smallAhvenWeight.toFixed(2) + " GRAMS";
        document.getElementById("ahvenPicture").style.display = "block";

    } else if (percentageForEachFish > 4 && percentageForEachFish <= 10) {
        var smallSarkiWeight = getFishWeight(85, 401);
        document.getElementById("smallFish").innerHTML = "YOU CAUGHT A COMMON ROACH, WEIGHT IS: " + smallSarkiWeight.toFixed(2) + " GRAMS";
        document.getElementById("sarkiPicture").style.display = "block";
    }
    
}

var smallFishCount = 0;
var bigFishCount = 0;

function fishingAction() {

    var smallFish = getRandomBetweenNumbers(1, 15);
    var bigFish = getRandomBetweenNumbers(1, 301);
    
    if (smallFish === 1) {
        smallFishCount++;
        smallFishes();
        document.getElementById("smallFishCount").innerHTML = smallFishCount;
    }

    if (bigFish === 1) {
        bigFishCount++;
    }
}








