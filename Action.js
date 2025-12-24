let showResult = document.querySelector('#input-box');
let buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () =>{
    let value = button.innerText;
    if(value === '÷'){
      value = '/';
    }
    
    if(value === 'X'){
      expression = expression.slice(0, -1);
      showResult.value = expression;
    }else if(value === 'C'){
      expression = "";
      showResult.value = expression;
    }else if(value === '='){
      expression = eval(expression);
      showResult.value = expression;
    }else if(value === 'CE'){
      clearEntery();
    }else if(value === 'x²'){
      expression = Math.pow(expression, 2);
      showResult.value = expression;
    }else if(value === '√x'){
      expression = Math.sqrt(expression);
      showResult.value = expression;
    }else if(value === '1/x'){
      expression = 1/expression;
      showResult.value = expression;
    }else if(value === '±'){
      if(expression){
        expression = (Number(expression) * -1).toString();
        showResult.value = expression;
      }
    } else{
      expression += value;
      showResult.value = expression;
    }
  });
});

function clearEntery(){
  while(expression.length > 0){
    let lastChar = expression[expression.length -1];
    if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '%'){
      break;
    }
    expression = expression.slice(0, -1);
  }
  showResult.value = expression;
}
