window.onscroll = function () {
  resizeHeader();
};

function resizeHeader() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-nav").style.padding = "0";
    document.getElementById("header-nav").ele.padding = "0";
    document.getElementById("header-menu").style.top = "64px";
  } else {
    document.getElementById("header-nav").style.padding = "10px 0";
    document.getElementById("header-menu").style.top = "84px";
  }
}
