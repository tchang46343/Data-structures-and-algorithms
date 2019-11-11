// What is the input to the program?
//Is a number entered by user

// What is the output of the program?
//Take user number and the preceding number after user number and sums the two number

// What is the input to each recursive call?
//user number and preceding number

// What is the output of each recursive call?
// sum of two numbers

//TC Answer
// function Fibonacci(number) {
//   if (number < 0) {
//     return console.log("Must pick a positive number");
//   } else {
//     const newNumber = number - 1;
//     const finalNumber = number + newNumber;

//     return finalNumber;
//   }
// }

// return finalNumber(6);

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
