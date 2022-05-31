$(function(){
  $("#navbar").load("/navbar/navbar.html"); 
});

function topnavOpen() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
  }
}

// document.addEventListener('mousemove', e => {
//   console.log(document.elementsFromPoint(e.clientX, e.clientY) )
// }, {passive: true})