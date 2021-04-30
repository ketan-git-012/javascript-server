import { IUser } from "./interfaces";

const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: [],
  },
};


const users: IUser[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
  },
  {
    traineeEmail: "trainee@successive",
    reviewerEmail: "reviewer2@successive.tech",
  },
];

export {
  permissions,
  users
}
