document.getElementById("toggleNav").addEventListener("click", function() {
  
  var nav = document.getElementById("navbar");
  var button = document.getElementById("toggleNav");
  
  if(nav.offsetWidth > 0) {
    nav.style.width = 0;
    button.innerText = ">"
    button.style.left = 0;
  } else {
    nav.style.width = "auto";
    button.innerText = "X"
    button.style.left = "14.5vw";
  }
  
})
