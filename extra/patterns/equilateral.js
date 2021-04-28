const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayPyramid(n) {
  for (var row = 0; row < n; row++) {
    var str = "";
    for (var column = 1; column < n - row; column++) {
      str = str + " ";
    }
    for (var k = 1; k <= 2 * row + 1; k++) {
      str = str + "*";
    }
    console.log(str);
  }
}

for (row = 2; row < process.argv.length; row++) {
  if (process.argv[row] > 1 && process.argv[row] < 11) {
    displayPyramid(process.argv[row]);
  } else {
    process.stdout.write("Enter number between 2 to 10");
  }
}


rl.question('Print a triangle with rows: ', (rows)=>{
  if (rows > 1 && rows < 11) {
    displayPyramid(rows);
    process.exit();
  } else {
    process.stdout.write("Please enter number between 2 to 10");
    process.exit();
  }
})
