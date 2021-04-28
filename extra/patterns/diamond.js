const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function createDimondShape(n) {
  var s = n - 1;
  for (var i = 1; i <= n; i++) {
    for (var c = 1; c <= s; c++) process.stdout.write(" ");

    s--;

    for (c = 1; c <= 2 * i - 1; c++) process.stdout.write("*");

    process.stdout.write("\n");
  }
  s = 1;

  for (i = 1; i <= n - 1; i++) {
    for (c = 1; c <= s; c++) process.stdout.write(" ");

    s++;

    for (c = 1; c <= 2 * (n - i) - 1; c++) process.stdout.write("*");

    process.stdout.write("\n");
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
