function changeRange() {
  var r = parseInt(document.getElementById("R").value);
  var g = parseInt(document.getElementById("G").value);
  var b = parseInt(document.getElementById("B").value);
  var equation = (1/(r+g+b));
  var light = (1/equation)* equation;
  
  var RGB = "rgb(" + r + ", " + g + ", " + b + ")";
  var color = "(" + Math.round((equation*r)*10) / 10 + ", " + Math.round((equation*g)* 10) / 10 + ", " + Math.round((equation*b) * 10) / 10 + ", " + Math.round(light) + ")";
  
  document.getElementById("hues-label").innerText = color;
  document.getElementById("Rlabel").innerText = r; 
  document.getElementById("Glabel").innerText = g;
  document.getElementById("Blabel").innerText = b;

  document.querySelector("#square").style.backgroundColor = RGB;
  
}
