function changeRange() {
  var r = parseInt(document.getElementById("R").value);
  var g = parseInt(document.getElementById("G").value);
  var b = parseInt(document.getElementById("B").value);
  var equation = (1/(r+g+b));
  
  var RGB = "rgb(" + r + ", " + g + ", " + b + ")";
  var color = "(" + Math.round((equation*r)*10) / 10 + ", " + Math.round((equation*g)* 10) / 10 + ", " + Math.round((equation*b) * 10) / 10 + ")";
  
  document.getElementById("hues-label").innerText = color
  document.getElementById("R").innerText = r
  document.getElementById("G").innerText = g
  document.getElementById("B").innerText = b

}
