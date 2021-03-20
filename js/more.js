function more() {
  if (document.getElementById("header-menu").style.display != "block")
    document.getElementById("header-menu").style.display = "block";
  else document.getElementById("header-menu").style.display = "none";
  rotateArrow();
}

var isActive = false;
function rotateArrow() {
  if (isActive)
    document.getElementById("img-menu-arrow").style.animation =
      "spin1 2s infinite 2s ease";
  else
    document.getElementById("img-menu-arrow").style.transform =
      "spin2 2s infinite 2s ease";

  isActive = !isActive;
}
