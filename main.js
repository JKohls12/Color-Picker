function changeRange() {
  var r = parseInt(document.getElementById("R").value);
  var g = parseInt(document.getElementById("G").value);
  var b = parseInt(document.getElementById("B").value);
  var colorpicker = document.querySelector("colorpicker");
  
  var RGB = r + ", " + g + ", " + b;
  var color = "(" + 1/r + ", " + 1/g + ", " + 1/b + ")";
  
  colorpicker = RGB;
}
