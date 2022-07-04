// Função que gera as paletas de Cores

window.onload = () => {
  const getPalleteDiv = document.querySelector('#color-palette');
  function generatePalletes() {
    for (let index = 0; index < 4; index += 1) {
      let pallet = document.createElement('div');
      pallet.className = 'color';
      pallet.style.backgroundColor = `rgb(${Math.random() * 250},${
        Math.random() * 250
      },${Math.random() * 250})`;
      getPalleteDiv.appendChild(pallet);
    }
    getPalleteDiv.firstChild.style.backgroundColor = 'black';
  }
  generatePalletes();
};
