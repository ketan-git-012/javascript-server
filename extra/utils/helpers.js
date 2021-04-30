const ValidateEmail = (email) => {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (re.test(email)) {
    if (
      email.indexOf(
        "@successive.tech",
        email.length - "@successive.tech".length
      ) !== -1
    ) {
      return true;
    }
  }
  return false;
};

export default ValidateEmail;
