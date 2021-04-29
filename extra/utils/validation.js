import ValidateEmail from './helpers';

const validUser = [];
const inValidUser = [];

const ValidateUsers = (users) => {
  users.forEach((user) => {
    ValidateEmail(user.reviewerEmail) ? validUser.push(user.reviewerEmail)  : inValidUser.push(user.reviewerEmail);
    ValidateEmail(user.traineeEmail) ? validUser.push(user.traineeEmail) : inValidUser.push(user.traineeEmail);
  });

  console.log("Valid Users:", validUser.length);
  for(let index=0;index<validUser.length;index++){
    console.log(validUser[index]);
  }
  console.log("Invalid Users:", inValidUser.length);
  for(let index=0;index<inValidUser.length;index++){
    console.log(inValidUser[index]);
  }
};


export default ValidateUsers;
