import { permissions } from "./../constants";

const hasPermission = (moduleName, role, permission) => {
  const module = permissions[moduleName];
  if(!module){
    return console.log("Module is not present");
  }
  return module[permission].includes(role) || module["all"].includes(role);
};

export default hasPermission;
