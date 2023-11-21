"use strict"



window.onload =init;


function init(){
    const buttonCalculate= document.getElementById("buttonCalculate")
    buttonCalculate.onclick = buttonCalculateClick;
// onclick attribute say "when sombody clicks this button call the function named buttonCalculateClick"
}

function buttonCalculateClick (){

// Get the starting values
  //inputMonthlyPayout
  //inputInterestRate
  //inputAmountOfYears 
  const inputMonthlyPayout=document.getElementById("inputMonthlyPayout")
  const inputInterest = document.getElementById('inputInterest');
  const inputAmountOfYears = document.getElementById('inputAmountOfYears');

//Calculate the unknown values

let monthlyPayout = Number (inputMonthlyPayout.value);
let interestRate = Number(inputInterest.value);
let totalTime = Number(inputAmountOfYears.value) ;
let periodInterestRate= interestRate/100 /12;

let presentValue= monthlyPayout*((1-(1+periodInterestRate)**(-totalTime*12))/periodInterestRate)
   presentValue=presentValue.toFixed (2);
//Display Output

//outputPresentValue
const outputPresentValue=document.getElementById('outputPresentValue')
 outputPresentValue.value = presentValue
}

