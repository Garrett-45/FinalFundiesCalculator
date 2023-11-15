// Element Queries

const displayEl = document.querySelector(".rowDisplay")
const btnOneEl = document.querySelector("#oneButton")
const btnTwoEl = document.querySelector("#twoButton")
const btnThreeEl = document.querySelector("#threeButton")
const btnFourEl = document.querySelector("#fourButton")
const btnFiveEl = document.querySelector("#fiveButton")
const btnSixEl = document.querySelector("#sixButton")
const btnSevenEl = document.querySelector("#sevenButton")
const btnEightEl = document.querySelector("#eightButton")
const btnNineEl = document.querySelector("#nineButton")
const btnZeroEl = document.querySelector("#zeroButton")

const btnClearEl = document.querySelector("#clearButton")
const btnBackEl = document.querySelector("#backButton")
const btnEqualsEl = document.querySelector("#equalSign")
const btnDecimalEl = document.querySelector("#decimalButton")

const btnAddEl = document.querySelector("#additionButton")
const btnSubtractEl = document.querySelector("#subtractButton")
const btnMultiplyEl = document.querySelector("#multiplyButton")
const btnDivideEl = document.querySelector("#divideButton")

const btnNumberEl = document.querySelectorAll(".numberButton")




// Global Memory

let resultMemory = 'Dummy Numbers'
let currentMemory = ''
let currentNumber = ''
let currentOperator = ''
let currentMemoryArray = []



// Button Event Listeners



btnOneEl.addEventListener("click", inputNumber)
btnTwoEl.addEventListener("click", inputNumber)
btnThreeEl.addEventListener("click", inputNumber)
btnFourEl.addEventListener("click", inputNumber)
btnFiveEl.addEventListener("click", inputNumber)
btnSixEl.addEventListener("click", inputNumber)
btnSevenEl.addEventListener("click", inputNumber)
btnEightEl.addEventListener("click", inputNumber)
btnNineEl.addEventListener("click", inputNumber)
btnZeroEl.addEventListener("click", inputNumber)

btnAddEl.addEventListener("click", inputPlusOperator)
btnSubtractEl.addEventListener("click", inputSubtractOperator)
btnMultiplyEl.addEventListener("click", inputMultiplyOperator)
btnDivideEl.addEventListener("click", inputDivideOperator)

btnEqualsEl.addEventListener("click", Operate)
btnClearEl.addEventListener("click", Clear)
btnBackEl.addEventListener("click", Backspace)
btnDecimalEl.addEventListener("click", addDecimal)

// Functions for buttons

function inputNumber(element) {
    if (currentNumber.length < 10){
        if (currentOperator !== ''){
            currentMemoryArray.push(currentOperator)           
            currentOperator = ''
            currentNumber += this.textContent
        } else if (currentOperator === '') {
            currentNumber += this.textContent
        }
    }
    displayEl.textContent = displayCurrentEquation()
}

function inputPlusOperator() {
    currentOperator = '+'

    if (currentNumber !== '') {
        currentMemoryArray.push(currentNumber)
        currentNumber = ''
    }
    displayEl.textContent = displayCurrentEquation()

}

function inputSubtractOperator() {
    currentOperator = '-'

    if (currentNumber !== '') {
        currentMemoryArray.push(currentNumber)
        currentNumber = ''
    } 
    displayEl.textContent = displayCurrentEquation()
}

function inputMultiplyOperator() {
    currentOperator = '*'

    if (currentNumber !== '') {
        currentMemoryArray.push(currentNumber)
        currentNumber = ''
    } 
    displayEl.textContent = displayCurrentEquation()
}

function inputDivideOperator() {
    currentOperator = '/'

    if (currentNumber !== '') {
        currentMemoryArray.push(currentNumber)
        currentNumber = ''
    } 
    displayEl.textContent = displayCurrentEquation()
}

function addDecimal() {
    let decimalTest = currentNumber.split("")
    if (decimalTest.includes(".") === false) {
        currentNumber += "."
    }
    displayEl.textContent = displayCurrentEquation()
}

//Behind the scenes functions including mathematical functions

function displayCurrentEquation() {
    let currentEquationString = currentMemoryArray.join(" ")
    return currentEquationString + ' ' + currentNumber + ' ' + currentOperator + ' '
}


function addition(a, b) {
    let sum = Number(a) + Number(b)
    return sum
}

function subtraction(a, b) {
    let difference = Number(a) - Number(b)
    return difference
}

function multiplication(a, b) {
    let product = Number(a) * Number(b)
    return product
}

function division(a, b) {
    let quotient = Number(a) / Number(b)
    return quotient
}


function Clear() {
    displayEl.textContent = ''
    currentNumber = ''
    currentOperator = ''
    currentMemoryArray = []
}

function Backspace() {
    if (currentNumber.length === 1) {
        currentNumber = ''
    } else if (currentOperator !== '') {
        currentOperator = ''
    } else if (currentNumber !== '') {
        currentNumber = currentNumber.slice(-1)
    } else if (currentNumber === '') {
        currentMemoryArray.pop() 
    }
    displayEl.textContent = displayCurrentEquation()
}

function Operate() {
    if (currentNumber !== '') {
    currentMemoryArray.push(currentNumber)
    currentNumber = ''
    }
    
    

        for (let indexCounter = 0; currentMemoryArray.length >= 1; indexCounter++) {
        
            if (currentMemoryArray.includes('*') || currentMemoryArray.includes('/')){
                if (currentMemoryArray.length === 1) {
                    displayEl.textContent = currentMemoryArray.join("")
                    currentMemoryArray = []
                    break
                    
                } else if (currentMemoryArray[indexCounter] === '*') {
                    let product = multiplication(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
                    currentMemoryArray.splice(indexCounter - 1, 3, product)
                    indexCounter = -1
                    
                    console.log(currentMemoryArray)
        
                } else if ((currentMemoryArray[indexCounter]) === '/' && (currentMemoryArray[indexCounter + 1]) === "0"){
                    displayEl.textContent = "You can't divide by zero, dum dum!"
                    break

                } else if (currentMemoryArray[indexCounter] === '/') {
                    
                    let quotient = division(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
                    currentMemoryArray.splice(indexCounter - 1, 3, quotient)
                    indexCounter = -1
        
                    console.log(currentMemoryArray)}
            } else if ((currentMemoryArray.includes('+') || currentMemoryArray.includes('-')) && ((currentMemoryArray.includes('*') === false && currentMemoryArray.includes('/') === false)) ){
                if (currentMemoryArray.length === 1) {
                    displayEl.textContent = currentMemoryArray.join("")
                    break
                    
                }  else if (currentMemoryArray[indexCounter] === '+') {
                    let sum = addition(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
                    currentMemoryArray.splice(indexCounter - 1, 3, sum)
                    indexCounter = -1
        
                    console.log(currentMemoryArray)
                } else if (currentMemoryArray[indexCounter] === '-') {
                    let difference = subtraction(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
                    currentMemoryArray.splice(indexCounter - 1, 3, difference)
                    indexCounter = -1
        
                    console.log(currentMemoryArray)
                } 
            } else if (currentMemoryArray.length === 1) {
                displayEl.textContent = currentMemoryArray.join("")
                currentMemoryArray = []
                break
    
}
}
}

/* scan the array for * or /

set a starting index to 0

if either is found, check which one it was.
If the multiplier is found, Take the item before that operator and after that operator
and assign them to a multiply function, return the result
replace all three of those items in the array with the result of the multiply function
reset the starting index to zero to start the process over

If the divider is found, Take the item before that operator and after that operator
and assign them to a Divide function, return the result
replace all three of those items in the array with the result of the Divide function
reset the starting index to zero to start the process over

Do the same thing with the addition and subtraction operators

When the array reaches a length of one, turn the last value in the array to a string
Display the string
*/


/*
Just in case operate function

function Operate() {
    if (currentNumber !== '') {
    currentMemoryArray.push(currentNumber)
    currentNumber = ''
    }
    
    if (currentMemoryArray.includes('*') || currentMemoryArray.includes('/')){
        
    }
    
    for (let indexCounter = 0; currentMemoryArray.length >= 1; indexCounter++) {
        
        if (currentMemoryArray.length === 1) {
            displayEl.textContent = currentMemoryArray.join("")
            break
            
        } else if (currentMemoryArray[indexCounter] === '*') {
            let product = multiplication(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
            currentMemoryArray.splice(indexCounter - 1, 3, product)
            indexCounter = -1
            
            console.log(currentMemoryArray)

        } else if (currentMemoryArray[indexCounter] === '/') {
            let quotient = division(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
            currentMemoryArray.splice(indexCounter - 1, 3, quotient)
            indexCounter = -1

            console.log(currentMemoryArray)
        } else if (currentMemoryArray[indexCounter] === '+') {
            let sum = addition(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
            currentMemoryArray.splice(indexCounter - 1, 3, sum)
            indexCounter = -1

            console.log(currentMemoryArray)
        } else if (currentMemoryArray[indexCounter] === '-') {
            let difference = subtraction(currentMemoryArray[indexCounter - 1], currentMemoryArray[indexCounter + 1] )
            currentMemoryArray.splice(indexCounter - 1, 3, difference)
            indexCounter = -1

            console.log(currentMemoryArray)
        }

    }
}

//
*/