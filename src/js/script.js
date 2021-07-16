let displayCode             = document.getElementById('display-code')
let displayDesk             = document.getElementById('display-desk')
let generatedPassArea       = document.querySelector('.password-legend')
let generatedPassDisplay    = document.querySelector('.password-code')
let divAlertNoPass          = document.querySelector('.alert-no-password')

// Initialize
let timer
let arrayCommonPasswords    = []
let arrayQuickPasswords     = []
let arrayPriorityPasswords  = []
let counter                 = 1
let password                = ''
displayCode.innerHTML       = ''
displayDesk.innerHTML       = ''

function showPass(pass = '', desk = '') {
  if (pass) {
    displayCode.innerHTML = pass
    displayDesk.innerHTML = desk
    return
  }
  alertNoPass()
}

function alertNoPass() {
  divAlertNoPass.innerHTML = 'Não há senhas para serem chamadas.'
}

function generatePassword(serviceType) {
  switch (serviceType) {
    case 'P':
      password = `P-${(counter++)}`
      arrayPriorityPasswords.push(password)
    break;
    case 'R':
      password = `R-${(counter++)}`
      arrayQuickPasswords.push(password)
    break;
    default:
      password = `C-${(counter++)}`
      arrayCommonPasswords.push(password)
    break;
  }
  showGeneratesPass(password)
  divAlertNoPass.innerHTML = ''
}

function showGeneratesPass(pass) {
  clearTimeout(timer)
  generatedPassArea.style.display     = "inline-block"
  generatedPassDisplay.style.display  = "inline-block"
  generatedPassDisplay.innerHTML      = pass

  timer = setTimeout(function() { 
    $( generatedPassArea ).fadeOut( "slow" )
    $( generatedPassDisplay ).fadeOut( "slow" )
  }, 5000);
}

function callPass(desk) {
  switch (desk) {
    case 1:
      if (arrayPriorityPasswords.length > 0) {
        password = arrayPriorityPasswords[0]
        arrayPriorityPasswords.shift()
      } else if (arrayQuickPasswords.length > 0) {
        password = arrayQuickPasswords[0]
        arrayQuickPasswords.shift()
      } else {
        password = arrayCommonPasswords[0]
        arrayCommonPasswords.shift()
      }
      break;
    case 2:
    case 3:
      if (arrayQuickPasswords.length > 0) {
        password = arrayQuickPasswords[0]
        arrayQuickPasswords.shift()
      } else if (arrayPriorityPasswords.length > 0) {
        password = arrayPriorityPasswords[0]
        arrayPriorityPasswords.shift()
      } else {
        password = arrayCommonPasswords[0]
        arrayCommonPasswords.shift()
      }
      break;
    default:
      if (arrayCommonPasswords.length > 0) {
        password = arrayCommonPasswords[0]
        arrayCommonPasswords.shift()
      } else if (arrayPriorityPasswords.length > 0) {
        password = arrayPriorityPasswords[0]
        arrayPriorityPasswords.shift()
      } else {
        password = arrayQuickPasswords[0]
        arrayQuickPasswords.shift()
      }
    break;
  }
  showPass(password, `Caixa: ${desk}`)
}
