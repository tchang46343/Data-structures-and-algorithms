// What is the input to the program?
//The nth Triangular number

// What is the output of the program?
//Number of Triangle dots in that sequence

// What is the input to each recursive call?
//nth

// What is the output of each recursive call?
//dot in the sequences

function nthTriangles(count) {
  if (count < 1) {
    return console.log("The Number of Triangles is:" + count);
  } else {
    return n + nthTriangles(n - 1);
  }
}

nthTriangles(6);
