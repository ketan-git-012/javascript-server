const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: [],
  },
};

const hasPermission = (moduleName, role, permission) => {
  const module = permissions[moduleName];
  if (!module) {
    return false;
  }
  if (!module[permission]) {
    return false;
  } else {
    return module[permission].includes(role) || module["all"].includes(role);
  }
};
console.log(hasPermission("getUsers", "head-trainer", "reads"));
