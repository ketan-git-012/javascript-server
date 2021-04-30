import { createDimondShape, displayPyramid } from "./patterns";
import { hasPermission, ValidateUsers } from "./utils";
import { users } from "./constants";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name: Boolean = true;

//Diamond Shape
rl.question("Print a diamond with the rows: ", (rows) => {
  if (rows > 1 && rows < 11) {
    createDimondShape(rows);
    process.exit();
  } else {
    process.stdout.write("Please enter number between 2 to 10");
    process.exit();
  }
});

//Equilateral

rl.question("Print a triangle with rows: ", (rows) => {
  if (rows > 1 && rows < 11) {
    displayPyramid(rows);
    process.exit();
  } else {
    process.stdout.write("Please enter number between 2 to 10");
    process.exit();
  }
});

name = hasPermission("getUsers", "head-trainer", "read");
console.log(name);

ValidateUsers(users);
