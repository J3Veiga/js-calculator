
const entrada1 = document.getElementById ('entrada-1');

const entrada2 = document.getElementById ('entrada-2');

const clear = document.getElementById ('btn-clear');

const soma = document.getElementById ('btn-soma');
  
const sub = document.getElementById ('btn-subtracao');

const mult = document.getElementById('btn-multiplicacao');
  
const div = document.getElementById('btn-divisao');
  
const result = document.getElementById('resultado');




clear.addEventListener('click', () =>{
    entrada1.value = null;
    entrada2.value = null;
    result.innerText = null;
})

soma.addEventListener ('click', () => {
  
  const valor1 = Number(entrada1.value);
  const valor2 = Number(entrada2.value);
  const soma = valor1 + valor2;
  const isNaN = Number.isNaN(soma);
  //debugger;

  if (isNaN) {
    
    result.innerText = `${entrada1.value}`;



  } else {
    result.innerText = `O Numero ${valor1} + ${valor2} resultado:   ${soma}`;
  }
  
  //console.log(result);  

  
})
sub.addEventListener ('click', () => {
  
  const valor1 = Number(entrada1.value);
  const valor2 = Number(entrada2.value);
  //console.log(result);
  resultado = valor1 - valor2; 
  
    result.innerText = `O Numero ${valor1} - ${valor2} resultado:   ${resultado}`;
  
});

mult.addEventListener ('click', () => {
  
  const valor1 = Number(entrada1.value);
  const valor2 = Number(entrada2.value);
  //console.log(result);

  resultado = valor1 * valor2; 
 
  
    result.innerText = `O Numero ${valor1} x ${valor2} resultado:   ${resultado}`;
  
});
div.addEventListener ('click', () => {
  
  const valor1 = Number(entrada1.value);
  const valor2 = Number(entrada2.value);
  //console.log(result);

  resultado = valor1 / valor2; 
 
  
    result.innerText = `O Numero ${valor1} / ${valor2} resultado :   ${resultado}`;
  
});