function changeRange() {
  var r = parseInt(document.getElementById("R").value);
  var g = parseInt(document.getElementById("G").value);
  var b = parseInt(document.getElementById("B").value);
  var square = document.getElementByClassName("square");
  
  var RGB = "rgb(" + r + ", " + g + ", " + b + ")";
  var color = "(" + 1/r + ", " + 1/g + ", " + 1/b + ")";
  
  document.getElementById("hues-label").innerText = color
  document.getElementById("R").innerText = r
  document.getElementById("G").innerText = g
  document.getElementById("B").innerText = b
  square = RGB;
}
