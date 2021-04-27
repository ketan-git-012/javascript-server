const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: [],
  },
};

const hasPermission = (moduleName, role, permission) => {
  for (const [key] of Object.entries(permissions)) {
    if (moduleName === key) {
      for (const [keys, values] of Object.entries(permissions.getUsers)) {
        if (keys == permission) {
          for (const [keys, valueP] of Object.entries(values)) {
            if (valueP == role) {
              return true;
            }
          }
        }
      }
    }
  }

  return false;
};
console.log(hasPermission("getUsers", "trainee", "read"));
