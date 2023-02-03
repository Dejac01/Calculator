
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(display.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(display.innerHTML == 'input'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(display)
    string = string + display.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

