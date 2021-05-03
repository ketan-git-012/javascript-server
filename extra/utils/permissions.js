import { permissions } from "./../constants";

const hasPermission = (moduleName, role, permission) => {
  const module = permissions[moduleName];
  if(!module){
    return false;
  }
  return module[permission].includes(role) || module["all"].includes(role);
};

export default hasPermission;
