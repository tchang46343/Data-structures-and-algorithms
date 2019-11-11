// What is the input to the program?
//Is a number entered by user

// What is the output of the program?
//Take user number and all number perceding will be multiplied by number in deceding order

// What is the input to each recursive call?
//user number

// What is the output of each recursive call?
// multiply of number going down

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(num));
