var isActive = false;
function rotateArrow() {
  if (isActive)
    document.getElementById("img-menu-arrow").style.animationName = "rotate";
  else
    document.getElementById("img-menu-arrow").style.animationName =
      "reverseRotate";

  isActive = !isActive;
  document.getElementById("img-menu-arrow").style.animationIterationCount = 1;
}

function more() {
  if (document.getElementById("header-menu").style.display != "block")
    document.getElementById("header-menu").style.display = "block";
  else document.getElementById("header-menu").style.display = "none";
}
window.onscroll = function () {
  if (isActive) more();
  isActive = false;
};
