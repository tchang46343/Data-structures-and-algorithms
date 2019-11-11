// What is the input to the program?
//The input is base number and exponential number

// What is the output of the program?
//The output is the base number will be expontentially increase by another number

// What is the input to each recursive call?
//The input is the base number exponential increased to the second number

// What is the output of each recursive call?
//The base number exponential increase by the second number

function powerCalculator(BaseNumber, ExpNumber) {
  if (ExpNumber <= 0) {
    console.log("Exponent must be greater than or equal to 0");
  } else {
    return BaseNumber ** ExpNumber;
  }
}
console.log(powerCalculator(10, 2));
