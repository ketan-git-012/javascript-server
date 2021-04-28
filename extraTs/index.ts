import { createDimondShape, displayPyramid } from "./patterns";
import { hasPermission, ValidateUsers } from './utils';

const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
  },
  {
    traineeEmail: "trainee@successive",
    reviewerEmail: "reviewer2@successive.tech",
  },
];


//Diamond Shape
for (let i = 2; i < process.argv.length; i++) {
  if (Number(process.argv[i]) > 1 && Number(process.argv[i]) < 11) {
    createDimondShape(process.argv[i]);
  } else {
    process.stdout.write("Enter number between 2 to 10");
  }
}

//Equilateral
for (let i = 2; i < process.argv.length; i++) {
  if (Number(process.argv[i]) > 1 && Number(process.argv[i]) < 11) {
    displayPyramid(process.argv[i]);
  } else {
    process.stdout.write("Enter number between 2 to 10");
  }
}
console.log("Permission access: ",hasPermission("getUsers", "head-trainer", "read"));

ValidateUsers(users);


