// Using var
var number1 = 10; // Declaration and initialization
var number2 = 5;  // Declaration and initialization
var sum = number1 + number2; // Addition
console.log("Using var: Sum =", sum);

// Using let
let num1 = 20;    // Declaration and initialization
let num2 = 4;     // Declaration and initialization
let product = num1 * num2; // Multiplication
console.log("Using let: Product =", product);

// Using const
const base = 7;  // Declaration and initialization (cannot be reassigned)
const height = 3;
const area = 0.5 * base * height; // Calculation for area of a triangle
console.log("Using const: Area of triangle =", area);

// Reassigning values to demonstrate the behavior of let and var
number1 = 15;  // var allows reassignment
num1 = 25;     // let allows reassignment

console.log("Reassigned var: New number1 =", number1);
console.log("Reassigned let: New num1 =", num1);

// Attempting reassignment with const will throw an error
try {
    base = 10; // This will cause an error
} catch (error) {
    console.log("Error when reassigning const 'base':", error.message);
}
