let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let dotButton = document.getElementById('dot'); // Agregamos esta línea

let string = '';
let arr = Array.from(buttons);

function updateDotButton() {
  if (string.includes('.')) {
    dotButton.disabled = true;
  } else {
    dotButton.disabled = false;
  }
}

arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == 'AC') {
      string = '';
      input.value = string;
    } else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == '.') {
      if (!string.endsWith('.')) {
        string += e.target.innerHTML;
        input.value = string;
      }
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
    
    updateDotButton(); // Llamamos a la función para actualizar el estado del botón de punto
  });
});

dotButton.addEventListener('click', () => {
  if (!string.includes('.')) {
    string += '.';
    input.value = string;
  }
  
  updateDotButton();
});
