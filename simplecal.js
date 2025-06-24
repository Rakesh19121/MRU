let a = Number(prompt("Enter a number:"));
let b = Number(prompt("Enter another number:"));
let operation = prompt("Enter an operation (+, -, *, /):");
let result;
if (operation === "+") {
    result = a + b;
} else if (operation === "-") {
    result = a - b;
} else if (operation === "*") {
    result = a * b;
} else if (operation === "/") {
    result = a / b;
} else {
    alert("Invalid operation");
}
if (result !== undefined) {
    alert("The result is: " + result);
    console.log("The result is: " + result);
}
