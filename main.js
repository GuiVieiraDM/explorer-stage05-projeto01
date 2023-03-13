const ramdomNumber = Math.round(Math.random() * 10)
const screenOne = document.querySelector('.screenOne')
const tryButton = document.querySelector('#tryButton');
const resetButton = document.querySelector('#resetButton');
const screenTwo = document.querySelector('.screenTwo')
const inputNumber = document.querySelector('#inputNumber');
let attempts = 1;
inputNumber.focus()

// Eventos
tryButton.addEventListener('click', handleTryClick)
resetButton.addEventListener('click', handleResetClick)

// Funções
function handleTryClick(event) {
  event.preventDefault()


  if (Number(inputNumber.value) == ramdomNumber) {
    toggleScreen()

    document.querySelector('#resetButton').focus()
    screenTwo.querySelector('h2').innerText = `Você acertou em ${attempts} tentativas.`
  } else if (inputNumber.value !== "") {
    attempts++
  }

  inputNumber.focus()
  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()
  attempts = 1
  location.reload()
}

function toggleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}
