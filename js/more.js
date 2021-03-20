var isActive = false;
function rotateArrow() {
  if (isActive) {
    document.getElementById("img-menu-arrow").style.animationPlayState =
      "running";
    document.getElementById("img-menu-arrow").style.animationDirection =
      "backwards";
  } else {
    document.getElementById("img-menu-arrow").style.animationPlayState =
      "running";
    document.getElementById("img-menu-arrow").style.animationDirection =
      "backwards";
  }
  isActive = !isActive;
}

function more() {
  if (document.getElementById("header-menu").style.display != "block")
    document.getElementById("header-menu").style.display = "block";
  else document.getElementById("header-menu").style.display = "none";
}
