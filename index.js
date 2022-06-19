function changePositions() {
    document.getElementById("square").style.left = Math.random() * 1000 + "px";
    document.getElementById("square").style.top = Math.random() * 400 + "px";
}

function changeToCircle() {
    if ((Math.floor(Math.random() * 2)) == 1) {
        document.getElementById("square").style.borderRadius = "50%"
    }
    else {
        document.getElementById("square").style.borderRadius = "0%"
    }
}

function changeColors() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("square").style.backgroundColor = "#" + randomColor;
}

function displayDiv() {
    document.getElementById("square").style.display = "block";

    initTime = new Date().getTime();

    changePositions();

    changeToCircle();

    changeColors();
}

var initTime = new Date().getTime();

var randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.getElementById("square").style.backgroundColor = "#" + randomColor;
document.getElementById("square").style.left = Math.random() * 1000 + "px";
document.getElementById("square").style.top = Math.random() * 400 + "px";

document.getElementById("square").onclick = function () {
    timeWhilePress = new Date().getTime();
    document.getElementById("square").style.display = "none";
    timeOfPress = (Math.abs(timeWhilePress - initTime)) / 1000;
    document.getElementById("paragraph").innerHTML = "Time Taken: " + timeOfPress + " seconds";
    setTimeout(displayDiv, (Math.random() * 2000));
}