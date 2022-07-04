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

function generatePixels() {
  for (let index = 0; index < 25; index += 1) {
    const getPixelBoard = document.querySelector('#pixel-board');
    const pixel = document.createElement('div');
    // Add a classe pixel aos pixels gerados
    pixel.className = 'pixel';
    // Add o BG branco aos pixel
    pixel.style.backgroundColor = 'white';
    getPixelBoard.appendChild(pixel);
  }
}

function selectPixel() {
  getPalleteDiv.addEventListener('click', (event) => {
    const getSelecteds = document.querySelector('.selected');
    getSelecteds.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

window.onload = function () {
  // Gera os 4 primeiros palletes de cores, gerando as cores automaticamente de
  // e altera o primeiro elemento para preto.

  generatePalletes();
  generatePixels();
  selectPixel();
};
