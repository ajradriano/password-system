let displayCode           = document.getElementById('display-code')
let displayDesk           = document.getElementById('display-desk')
let generatedPassArea     = document.querySelector('.password-legend')
let generatedPassDisplay  = document.querySelector('.password-code')
let timer

// Initialize
let arrayPasswords    = [
  "C-1",
  "C-2",
  "C-3",
  "C-4",
  "C-5",
  "C-6",
  "C-7",
  "P-8",
  "P-9",
  "R-10"
]
let counter           = 1
displayCode.innerHTML = ''
displayDesk.innerHTML = ''
console.log(arrayPasswords)

function showPass(pass = '', desk = '') {
  displayCode.innerHTML = pass
  displayDesk.innerHTML = desk
}

function clearPass() {
  displayCode.innerHTML = ''
  displayDesk.innerHTML = ''
}

function generatePassword(serviceType) {
  let password = serviceType + '-' + (counter++)
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
  console.log(arrayPasswords[1]);
  arrayPasswords.splice(1, 1)
  console.log(arrayPasswords)

}
