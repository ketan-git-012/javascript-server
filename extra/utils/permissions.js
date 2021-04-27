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
  return module[permission].includes(role) || module['all'].includes(role);
  // for (const [key] of Object.entries(permissions)) {
  //   if (moduleName === key) {
  //     for (const [keys, values] of Object.entries(permissions.getUsers)) {
  //       if (keys == permission) {
  //         for (const [keys, valueR] of Object.entries(values)) {
  //           if (valueR == role) {
  //             return true;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // return false;
};
console.log(hasPermission("getUsers", "head-trainer", "read"));
