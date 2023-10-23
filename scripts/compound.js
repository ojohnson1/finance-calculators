"use strict";
console.log("script loaded!")

window.onload =init;

function init(){
    const buttonCalculate= document.getElementById("buttonCalculate")
    buttonCalculate.onclick = buttonCalculateClick;
    console.log("init done");

}



function buttonCalculateClick (){
console.log("button click");
// Get the starting values

//inputDeposit
//inputInterestRate
//inputAmountOfYears

const inputDeposit = document.getElementById('inputDeposit');
const inputInterest = document.getElementById('inputInterest');
const inputAmountOfYears = document.getElementById('inputAmountOfYears');

let deposit = Number(inputDeposit.value);
let interestRate = Number(inputInterest.value);
let totalTime = Number(inputAmountOfYears.value) ;

 //Calculate the unknown values
let futureValue=  deposit* Math.pow((1+(interestRate/100)/365),(365*totalTime))
futureValue = futureValue.toFixed (2);
let totalInterest= futureValue-deposit
totalInterest = totalInterest.toFixed (2);

//Display Output


//outputFutureValue
//outputTotalInterestEarned

const outputFutureValue =document.getElementById('outputFutureValue');
const outputTotalInterestEarned =document.getElementById('outputTotalInterestEarned');

outputFutureValue.value= futureValue;
outputTotalInterestEarned.value = totalInterest;

}