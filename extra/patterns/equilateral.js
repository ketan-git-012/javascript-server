const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayPyramid(n) {
  for (var i = 0; i < n; i++) {
    var str = "";
    for (var j = 1; j < n - i; j++) {
      str = str + " ";
    }
    for (var k = 1; k <= 2 * i + 1; k++) {
      str = str + "*";
    }
    console.log(str);
  }
}

for (i = 2; i < process.argv.length; i++) {
  if (process.argv[i] > 1 && process.argv[i] < 11) {
    displayPyramid(process.argv[i]);
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
