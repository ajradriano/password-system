let displayCode           = document.getElementById('display-code')
let displayDesk           = document.getElementById('display-desk')
let generatedPassArea     = document.querySelector('.password-legend')
let generatedPassDisplay  = document.querySelector('.password-code')
let timer

// Initialize
let arrayPasswords    = []
let counter           = 1
displayCode.innerHTML = ''
displayDesk.innerHTML = ''
console.log(arrayPasswords)

function showPass(pass = '', desk = '') {
  displayCode.innerHTML = pass
  displayDesk.innerHTML = `Caixa ${desk}`
}

function clearPass() {
  displayCode.innerHTML = ''
  displayDesk.innerHTML = ''
}

function generatePassword(serviceType) {
  let password = `${serviceType} - ${(counter++)}`
  arrayPasswords.push(password)
  showGeneratesPass(password)
  console.log(arrayPasswords)
}

function showGeneratesPass(pass) {
  clearTimeout(timer)
  generatedPassArea.style.display = "inline-block"
  generatedPassDisplay.style.display = "inline-block"
  generatedPassDisplay.innerHTML = pass
  timer = setTimeout(function() { 
    $( generatedPassArea ).fadeOut( "slow" )
    $( generatedPassDisplay ).fadeOut( "slow" )
  }, 5000);
}

function callPass(desk) {
  console.log(arrayPasswords[0])
  arrayPasswords.shift()
  showPass(arrayPasswords[0], desk)
  console.log(arrayPasswords)

}
