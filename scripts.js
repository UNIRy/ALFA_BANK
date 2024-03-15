const button = document.querySelector('#enter');

const login = document.querySelector('#login');

const password = document.querySelector('#password');

const rightLogin = "test"
const rightPassword = "1234"

function chekLogin() {
  if (login.value == rightLogin && password.value == rightPassword) {
    alert('Right!')
    document.querySelector("#bulb").style.display = "block"
  }
  else {
    alert('Wrong!')
  }
}

button.addEventListener('click' , chekLogin)
