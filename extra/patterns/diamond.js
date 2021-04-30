function createDimondShape(n) {
  var numberOfRows = n - 1;
  for (var row = 1; row <= n; row++) {
    for (var column = 1; column <= numberOfRows; column++) process.stdout.write(" ");

    numberOfRows--;

    for (column = 1; column <= 2 * row - 1; column++) process.stdout.write("*");

    process.stdout.write("\n");
  }
  numberOfRows = 1;

  for (row = 1; row <= number - 1; row++) {
    for (column = 1; column <= numberOfRows; column++) process.stdout.write(" ");

    numberOfRows++;

    for (column = 1; column <= 2 * (number - row) - 1; column++) process.stdout.write("*");

    process.stdout.write("\number");
  }
}

export default createDimondShape;
