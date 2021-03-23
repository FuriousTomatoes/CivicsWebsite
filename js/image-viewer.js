var milliseconds = 10000;
var timeoutHandl = setInterval(displayNextImage, milliseconds);

function displayNextImage(fromButton) {
  x = x === images.length - 1 ? 0 : x + 1;

  document.getElementById("main-image").src = images[x];

  if (fromButton == true) {
    clearInterval(timeoutHandl);
    timeoutHandl = setInterval(displayNextImage, milliseconds);
  }
}

function displayPreviousImage(fromButton) {
  x = x <= 0 ? images.length - 1 : x - 1;

  document.getElementById("main-image").src = images[x];

  if (fromButton == true) {
    clearInterval(timeoutHandl);
    timeoutHandl = setInterval(displayNextImage, milliseconds);
  }
}

function startTimer() {
  timeoutHandl;
}

var images = [],
  x = -1;
images[0] = "../images/pale-eoliche.jpg";
images[1] = "../images/pale-eoliche.jpg";
images[2] = "../images/pale-eoliche.jpg";
