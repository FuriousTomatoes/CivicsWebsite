var milliseconds = 10000;
var timeoutHandl = setInterval(displayNextImage, milliseconds);

function displayNextImage(fromButton) {
  x = x === images.length - 1 ? 0 : x + 1;

  document.getElementById("img").src = images[x];

  if (fromButton == true) {
    clearInterval(timeoutHandl);
    timeoutHandl = setInterval(displayNextImage, milliseconds);
  }
}

function displayPreviousImage(fromButton) {
  x = x <= 0 ? images.length - 1 : x - 1;

  document.getElementById("img").src = images[x];

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
images[0] = "../images/Pala-eolica.png";
images[1] = "../images/Pala-eolica-2.png";
images[2] = "../images/Pala-eolica-3.png";
