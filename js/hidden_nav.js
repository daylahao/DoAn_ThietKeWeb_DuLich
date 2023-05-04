
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.transform = "translateY(0)";;
  } else {
    document.getElementById("navbar").style.transform = "translateY(-200px)";
  }
  prevScrollpos = currentScrollPos;
}
