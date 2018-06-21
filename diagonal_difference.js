var a = [[7, 0, 3, 11], [5, 56, 1, 2], [99, 71, 554, 12], [13, 84, 15, 35]];

function DiagonalDifference(a) {
  // Diagonali

  let diagOne = 0;
  let diagTwo = 0;

  // Loop for getting diagonals

  var col = 0;

  for (row = 0; row < a.length; row++) {
    diagOne += a[row][row];
    col = a.length - (row + 1);
    diagTwo += a[row][col];
  }

  return Math.abs(diagOne - diagTwo);
}

// Console.log of the result

console.log(DiagonalDifference(a));
