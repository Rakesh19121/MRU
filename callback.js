function addCallback(a,b) {
  console.log("Adding callback for", a, b);
  return function(callback) {
    console.log("Executing callback with", a, b);
    callback(a + b);
  }
}
function subtractCallback(a,b) {
  console.log("Subtracting callback for", a, b);
  return function(callback) {
    console.log("Executing callback with", a, b);
    callback(a - b);
  }
}
function multiplyCallback(a,b) {
  console.log("Multiplying callback for", a, b);
  return function(callback) {
    console.log("Executing callback with", a, b);
    callback(a * b);
  }
}
function calculator(a, b, operation) {
    const result = operation(a,b);
    console.log('Result: ${result}');
}