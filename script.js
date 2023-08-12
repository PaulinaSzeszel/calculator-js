let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''
let arr = Array.from(buttons)

function checkDot(input, button) {
  if (input.value.includes(".")) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    checkDot(input, document.getElementById("dot"));
    if (e.target.innerHTML == '=') {
      string = eval(string)
      input.value = string
    } else if (e.target.innerHTML == 'AC') {
      string = ''
      input.value = string
    } else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1)
      input.value = string
    } else {
      string += e.target.innerHTML
      input.value = string
    }
  })
})
