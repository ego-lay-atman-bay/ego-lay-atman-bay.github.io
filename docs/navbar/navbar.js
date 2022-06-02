function hasClass(ele,cls) {
  return ele.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));
}
function addClass(ele,cls) {
  if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp("(\\s|^)"+cls+"(\\s|$)");
    ele.className=ele.className.replace(reg," ");
  }
}

window.onload = function() {
  // if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    var elements = document.getElementsByClassName("projects");
    for(var i = 0; i < elements.length; i++) {
      var elm = elements[i];
      elm.addEventListener("touchstart", function() {
        addClass(this, "fake-active");}, false);
      elm.addEventListener("touchmove", function() {
        removeClass(this, "fake-active");}, false);
      elm.addEventListener("touchend", function() {
        removeClass(this, "fake-active");}, false);
      elm.addEventListener("touchcancel", function() {
        removeClass(this, "fake-active");}, false);
    }
  // }
}