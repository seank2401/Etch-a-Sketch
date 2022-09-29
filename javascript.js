var divAmount = 16;
var elementTarget;
var rainbowActive = false;
var pickerActive = true;
var eraserActive = false;
var boxColor = "#242422";

var sliderDemo = document.getElementById("demo");
var slider = document.getElementById("myRange");
var container = document.getElementById("etchContainer");
var rainbowButton = document.getElementById("rainbowButton");
var clearButton = document.getElementById("clearButton");
var colorPicker = document.getElementById("colorPicker");
var colorPickerButton = document.getElementById("colorPickerButton");
var eraserButton = document.getElementById("eraser");

var colorPickerAll = document.querySelectorAll(".colorButtons");

colorPickerButton.classList.add("buttonActive");

colorPicker.oninput = function () {
  boxColor = this.value;
};

slider.oninput = function () {
  sliderOutput.innerHTML = this.value + " x " + this.value;
};

slider.onchange = function () {
  divAmount = parseInt(this.value);
  clearCanvas();
};

document.addEventListener("mousedown", function (e) {
  paintListener(e);
});

document.addEventListener("mouseover", function (e) {
  if (e.buttons == 1) {
    paintListener(e);
  }
});

clearButton.addEventListener("click", clearCanvas);

colorPickerAll.forEach(function (element) {
  element.addEventListener("click", handleButtonSelect);
});

function handleButtonSelect(e) {
  if (e.target.id == "rainbowButton") {
    rainbowActive = true;
    pickerActive = false;
    eraserActive = false;
  } else if (e.target.id == "colorPickerButton") {
    pickerActive = true;
    rainbowActive = false;
    eraserActive = false;
  } else if (e.target.id == "eraser") {
    eraserActive = true;
    pickerActive = false;
    rainbowActive = false;
  }
  colorPickerAll.forEach((e) => e.classList.remove("buttonActive"));
  e.target.classList.add("buttonActive");
}

function addBoxes() {
  var totalDivs = Math.pow(divAmount, 2);
  while (totalDivs > 0) {
    var box = container.appendChild(document.createElement("div"));
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

function clearCanvas() {
  container.innerHTML = "";
  addBoxes();
}

function paintListener(event) {
  elementTarget = event.target;
  if (elementTarget.classList.contains("box")) {
    if (rainbowActive == true) {
      elementTarget.style.backgroundColor = generateRainbow();
    } else if (pickerActive == true) {
      elementTarget.style.backgroundColor = boxColor;
    } else elementTarget.style.backgroundColor = "grey";
  }
}

window.onload = () => addBoxes();
