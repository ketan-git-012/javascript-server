validUser = [];
inValidUser = [];
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

const ValidateEmail = (email) =>
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  )
    ? true
    : false;

const ValidateUsers = (users) => {
  users.forEach((user) => {
    ValidateEmail(user.reviewerEmail) ? validUser.push(user.reviewerEmail)  : inValidUser.push(user.reviewerEmail);
    ValidateEmail(user.traineeEmail) ? validUser.push(user.traineeEmail) : inValidUser.push(user.traineeEmail);
  });

  console.log("Valid Users:", validUser.length);
  for(let i=0;i<validUser.length;i++){
    console.log(validUser[i]);
  }
  console.log("Invalid Users:", inValidUser.length);
  for(let i=0;i<inValidUser.length;i++){
    console.log(inValidUser[i]);
  }
};

ValidateUsers(users);
