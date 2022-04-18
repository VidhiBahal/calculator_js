let num1 = 0
let num2 = 0
let ans 
let result = document.getElementById("input-el")
let flag = false 
let operator


function assignNum(number){
    if(flag == false){
        num1 += number
    }else{
        num2 += number
    }
    result.textContent += number
    // console.log("num1: " + num1)
    // console.log("num2: " + num2)
}


function add(){
    result.textContent += "+"
    flag = true
    operator = "+"

}

function sub(){
    result.textContent += "-"
    flag = true
    operator = "-"
}

function multiply(){
    result.textContent += "*"
    flag = true
    operator = "*"
}

function divide(){
    result.textContent += "/"
    flag = true
    operator = "/"
}

function answer(){
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    ans = num1 

    switch(operator){
        case "+": ans = num1 + num2;
                break;
        case "-": ans = num1 - num2;
                break;
        case "*": ans = num1 * num2;
                break;
        case "/": ans = num1 / num2;
                break;

    }

    result.textContent = ans
}

function clearDisplay(){
    result.textContent = ""
}



