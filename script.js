// Função que gera as paletas de Cores
const getPalleteDiv = document.querySelector('#color-palette');
function generatePalletes() {
  for (let index = 0; index < 4; index += 1) {
    const pallet = document.createElement('div');
    pallet.className = 'color';
    pallet.style.backgroundColor = `rgb(${Math.random() * 250},${
      Math.random() * 250
    },${Math.random() * 250})`;
    getPalleteDiv.appendChild(pallet);
  }
  getPalleteDiv.firstChild.style.backgroundColor = 'black';
}

function generatePixels() {
  for (let index = 0; index < 25; index += 1) {
    const getPixelBoard = document.querySelector('#pixel-board');
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    getPixelBoard.appendChild(pixel);
  }
}

window.onload = function () {
  // Gera os 4 primeiros palletes de cores, gerando as cores automaticamente de
  // e altera o primeiro elemento para preto.

  generatePalletes();
  generatePixels();
};
