// let arr=[1,3,5,7,9,5,3,2]
// var numm=document.getElementById(num1)
// var numm2=document.getElementById(num2)
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
function myfun(num1,num2){

    let sum=num1+num2
    console.log(sum)
}
