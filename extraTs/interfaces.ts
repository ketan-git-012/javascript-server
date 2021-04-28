interface IPermission {
  all : [string],
  read : [string],
  write : [string],
  delete : [string],
}

interface IUsers {
  traineeEmail : string,
  reviewerEmail : string,
}

export {
  IPermission,
  IUsers,
}
