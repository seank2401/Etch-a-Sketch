var divAmount = 16;

var sliderOutput = document.getElementById("demo");
var slider = document.getElementById("myRange");
var container = document.getElementById("etchContainer");

slider.oninput = function () {
  sliderOutput.innerHTML = this.value + " x " + this.value;
};

slider.onchange = function () {
  divAmount = parseInt(this.value);
  addBoxes();
};

function addBoxes() {
  var totalDivs = Math.pow(divAmount, 2);
  while (totalDivs > 0) {
    var box = container.appendChild(document.createElement("div"));
    console.log(600 / divAmount);
    box.style.width = 100 / divAmount + "%";
    box.style.height = 100 / divAmount + "%";
    box.className = "box";
    totalDivs--;
  }
}

function generateRainbow() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

