const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayPyramid(noOfRows) {
  for (var row = 0; row < noOfRows; row++) {
    var star = "";
    for (var column = 1; column < noOfRows - row; column++) {
      star = star + " ";
    }
    for (var vertical = 1; vertical <= 2 * row + 1; vertical++) {
      star = star + "*";
    }
    console.log(star);
  }
};

rl.question("Print a triangle with rows: ", (rows) => {
  if (rows > 1 && rows < 11) {
    displayPyramid(rows);
    process.exit();
  } else {
    process.stdout.write("Please enter number between 2 to 10");
    process.exit();
  }
});
