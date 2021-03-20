var status = dark;
function themeChange() {
  if (document.getElementById("csscolors").classList[0] == "dark") {
    document.getElementById("csscolors").href = "../css/light-theme.css";
    document.getElementById("csscolors").className = "light";
    status = "light";
  } else {
    document.getElementById("csscolors").href = "../css/dark-theme.css";
    document.getElementById("csscolors").className = "dark";
    status = "dark";
  }
}
