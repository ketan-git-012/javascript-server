interface IPermission {
  all : [string],
  read : [string],
  write : [string],
  delete : [string],
}

interface IUser {
  traineeEmail : string,
  reviewerEmail : string,
}

export {
  IPermission,
  IUser,
}
