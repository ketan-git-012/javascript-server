const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function createDimondShape(number) {
  var numberOfRows = number - 1;
  for (var row = 1; row <= number; row++) {
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

rl.question("Print a diamond with the rows: ", (rows) => {
  if (rows > 1 && rows < 11) {
    createDimondShape(rows);
    process.exit();
  } else {
    process.stdout.write("Please enter number between 2 to 10");
    process.exit();
  }
});
