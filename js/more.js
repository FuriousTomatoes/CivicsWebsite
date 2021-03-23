var isActive = false;

function more() {
  if (document.getElementById("header-menu").style.display != "block")
    document.getElementById("header-menu").style.display = "block";
  else document.getElementById("header-menu").style.display = "none";
  isActive = !isActive;
}

function closeMore() {
  isActive = false;
  document.getElementById("header-menu").style.display = "none";
}