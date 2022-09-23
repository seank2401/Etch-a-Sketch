var divAmount = 16;

var sliderOutput = document.getElementById("demo");
var slider = document.getElementById("myRange");
var container = document.getElementById("etchContainer");

colorPicker.oninput = function () {
  boxColor = this.value;
};

slider.oninput = function () {
  sliderOutput.innerHTML = this.value + " x " + this.value;
};

slider.onchange = function () {
  divAmount = parseInt(this.value);
  addBoxes();
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
  } else {
    pickerActive = true;
    rainbowActive = false;
  }
  colorPickerAll.forEach((e) => e.classList.remove("buttonActive"));
  e.target.classList.add("buttonActive");
}

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

function clearCanvas() {
  container.innerHTML = "";
  addBoxes();
}

function paintListener(event) {
  elementTarget = event.elementTarget;
  if (elementTarget.classList.contains("box")) {
    if (rainbowActive == true)
      elementTarget.style.BackgroundColor = generateRainbow();
    else elementTarget.style.backgroundColor = boxColor;
  }
}

window.onload = () => addBoxes();
