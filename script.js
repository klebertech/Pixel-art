// Função que gera as paletas de Cores
const getPalleteDiv = document.querySelector('#color-palette');
function generatePalletes() {
  for (let index = 0; index < 4; index += 1) {
    const pallet = document.createElement('div');
    // Add a classe color aos elementos da palleta de cores
    pallet.className = 'color';
    // Gera as cores da palleta randomicamente
    pallet.style.backgroundColor = `rgb(${Math.random() * 250},${
      Math.random() * 250
    },${Math.random() * 250})`;
    // Appenda as palletas de cores ao parent
    getPalleteDiv.appendChild(pallet);
  }
  // Seta o primeiro elemento com o BG = BLACK
  getPalleteDiv.firstChild.style.backgroundColor = 'black';
  // Add a classe selected ao primeiro elemento da palleta
  getPalleteDiv.firstChild.classList.add('selected');
}

function generatePixels(lenghtPixel) {
  let lenghtPixelCalc = lenghtPixel * lenghtPixel;
  const getPixelBoard = document.getElementById('pixel-board');
  while (getPixelBoard.firstChild) {
    getPixelBoard.firstChild.remove();
  }
  for (let index = 0; index < lenghtPixelCalc; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    getPixelBoard.appendChild(pixel);
    let setWidthBoard = getPixelBoard.style.width;
    setWidthBoard = `${(lenghtPixelCalc / lenghtPixel) * 42}px`;
    getPixelBoard.style.width = setWidthBoard;
  }
}

// Função que remove a class selected e adiciona ao pallete clickada
function palletePixel() {
  getPalleteDiv.addEventListener('click', (event) => {
    const getSelecteds = document.querySelector('.selected');
    getSelecteds.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

// Função que adiciona o BG no Pixel, pegando o BG do pallete com class selected
function setPixelCollor() {
  const getPixelBoard = document.querySelector('#pixel-board');
  getPixelBoard.addEventListener('click', (e) => {
    const getSelected = document.querySelector('.selected');
    e.target.style.backgroundColor = getSelected.style.backgroundColor;
  });
}

// Função que reseta as BG dos pixels, adiciona o BG white a todos com classe .pixel
function resetColors() {
  const getBtnClear = document.getElementById('clear-board');
  getBtnClear.addEventListener('click', () => {
    const getAllPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < getAllPixels.length; index += 1) {
      getAllPixels[index].style.backgroundColor = 'white';
    }
  });
}

function inputLengthBoard() {
  const getInputPixels = document.getElementById('board-size');
  const getBtnPixels = document.getElementById('generate-board');
  getBtnPixels.addEventListener('click', () => {
    const getLengthPixels = getInputPixels.value;

    if (getLengthPixels === '') {
      alert('Board inválido!');
    } else if (getLengthPixels < 5) {
      generatePixels(5);
    } else if (getLengthPixels > 50) {
      generatePixels(50);
    } else {
      generatePixels(getLengthPixels);
    }
  });
}

window.onload = () => {
  generatePalletes();
  generatePixels(5);
  palletePixel();
  setPixelCollor();
  resetColors();
  inputLengthBoard();
};
