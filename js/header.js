window.onscroll = function () {
  resizeHeader();
};

function resizeHeader() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-nav").style.padding = "0";
    //document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("header-nav").style.padding = "10px 0 10px 0";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}
