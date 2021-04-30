validUser = [];
inValidUser = [];
const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
  },
  {
    traineeEmail: "trainee@gmail.com",
    reviewerEmail: "reviewer2@successive.tech",
  },
];

const ValidateEmail = (email) =>{
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(re.test(email)){
    if(email.indexOf("@successive.tech", email.length - "@successive.tech".length) !== -1){
        return true;
    }
}
return false;
}


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

ValidateUsers(users);
