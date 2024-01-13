
const listOfBtns = document.getElementsByClassName('js-btn');
let computationString = '';

for (let i = 0; i < listOfBtns.length; i++) {
  listOfBtns[i].addEventListener('click', function() {
    enterTask(listOfBtns[i].innerText);
  })
}

function enterTask(value) {
  computationString += value;
  document.getElementById('js-display').innerHTML = computationString;                    
}

const resultBtn = document.getElementById('js-result');
resultBtn.addEventListener('click', calculateResult);

function calculateResult() {
  let result = eval(computationString);  

  if (result !== undefined) {
    computationString = result;                                   
  } else {
    result = 0;
  }

  document.getElementById('js-display').innerHTML = result;       
}

const clearBtn = document.getElementById('js-clear');
clearBtn.addEventListener('click', clearTask);

function clearTask() {
  computationString = '';
  result = 0;                  
  document.getElementById('js-display').innerHTML = result;                              
}

