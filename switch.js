let operation = prompt("Enter an operation (+, -, *, /):");
let result;
switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        alert("Invalid operation");
}
if (result !== undefined) {
    alert("The result is: " + result);
    console.log("The result is: " + result);
}
let a = Number(prompt("Enter a number:"));
let b = Number(prompt("Enter another number:"));    
// Ensure that the prompts for 'a' and 'b' are before the switch statement
if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers.");
}
else {
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            alert("Invalid operation");
    }
    if (result !== undefined) {
        alert("The result is: " + result);
        console.log("The result is: " + result);
    }
}