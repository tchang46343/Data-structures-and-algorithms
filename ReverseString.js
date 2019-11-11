// What is the input to the program?
//A variable contain a array of words or numbers

// What is the output of the program?
//To return the orginal array in the reverse the order inputs

// What is the input to each recursive call?
//An array of number or words
// What is the output of each recursive call?
// An array of number in reverse order

function reverseString(str) {
  if (str === "") return " ";
  else return reverseString(str.substr(1)) + st.charAt(0);
}

reverseString("hello");
