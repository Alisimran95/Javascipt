let number1 = prompt("enter first number: ");
let number2  = prompt("enter second number: ");
let operator = prompt("enter math operator: ");

function calc(number1,number2,operator) {
    switch (operator) {
            case "+":
                let sum = parseInt(number1)+parseInt(number2);
                return alert(sum);
                break;
            case "-":
                let substraction = parseInt(number1) - parseInt(number2);
                return alert(substraction);
                break;
            case "*":
                let multiple = parseInt(number1) * parseInt(number2);
                return alert(multiple);
                break;
            case "/":
                let division = parseInt(number1) / parseInt(number2);
                return alert(division);
            default:
                return alert("ERROR")
                break;
        }
}

calc(number1,number2,operator);