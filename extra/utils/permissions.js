import { permissions } from "./../constants";

const hasPermission = (moduleName, role, permission) => {
  const module = permissions[moduleName];
  return module[permission].includes(role) || module["all"].includes(role);
};

export default hasPermission;
