let colorInput = document.querySelector('#color');
let RGBInput = document.querySelector('#RGB');

colorInput.addEventListener('input', () => {
  let color = colorInput.value;
  RGBInput.value = color;
  //document.body.style.backgroundColor = color;
});
