const button = document.querySelector('#enter');

const login = document.querySelector('#login');

const password = document.querySelector('#password');

const rightLogin = "ALFA BANK"
const rightPassword = "123"

function chekLogin() {
  if (login.value == rightLogin && password.value == rightPassword) {
    alert('Добро пожаловать директор АЛЬФА БАНКА!')
    document.querySelector("#bulb").style.display = "block"
  }
  else {
    alert('Неправильно!')
  }
}

button.addEventListener('click' , chekLogin)