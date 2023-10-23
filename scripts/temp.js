"use strict"




"use strict"

window.onload =init;


function init(){
    const buttonCalculate= document.getElementById("buttonCalculate")
    buttonCalculate.onclick = buttonCalculateClick;

    const buttonCalculate2= document.getElementById("buttonCalculate2")
    buttonCalculate2.onclick = buttonCalculate2Click;


}


function buttonCalculateClick (){
 // Get the starting values
  //inputFahrenheit
  //outputCelsius
  //inputCelsius
  //outputFahrenheit

  const inputFahrenheit =document.getElementById('inputFahrenheit');
   

  let tempInFahrenheit = Number(inputFahrenheit.value);

 //Calculate the unknown values

 
 let newDegreeCelsius= 5/9 * (tempInFahrenheit-32)

 newDegreeCelsius=Math.round(newDegreeCelsius);
       
//Display Output

//outputfahrenheit
//output Celsius
const outputCelsius=document.getElementById('outputCelsius');
outputCelsius.value= newDegreeCelsius;

}



function buttonCalculate2Click (){
 // Get the starting values

 const inputCelsius =document.getElementById('inputCelsius');
 
 let tempInCelsius= Number(inputCelsius.value);

//Calculate the unknown values

let newDegreeFahrenheit= Math.round((9/5 * tempInCelsius) +32)
  
//Display Output
const outputFahrenheit =document.getElementById('outputFahrenheit');

outputFahrenheit.value= newDegreeFahrenheit;

}