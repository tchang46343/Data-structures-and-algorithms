// What is the input to the program?
//The input is 3 or whatever number the user enters
// What is the output of the program?
//3: Another sheep jumps over the fence
//2:Another sheep jumps over the fence
//1.Another sheep jumps over the fence
//All the sheep jumped over the fence
// What is the input to each recursive call?
//Initial starting value then decreasing by one
// What is the output of each recursive call?
//The output should be -1 than the orginally starting value

function countSheep(number) {
  if (number === 0) {
    console.log = "All Sheeps jumped over the fence";
  } else {
    console.log("Anthor sheep jumps over the fence");
    var newNumber = number - 1;
    countSheep(newNumber);
  }
}
console.log("The recursive function returned:" + countSheep(newNumber));
