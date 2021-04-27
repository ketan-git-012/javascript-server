import ValidateEmail from './helpers';

const validUser = [];
const inValidUser = [];

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


export default ValidateUsers;
