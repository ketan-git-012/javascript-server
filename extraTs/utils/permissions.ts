import { permissions } from "../constants";
import { IPermission } from "../interfaces";

const hasPermission = (moduleName: string, role: string, permission: string) : Boolean => {
  const module: IPermission = permissions[moduleName];
  return module[permission].includes(role) || module["all"].includes(role);
};

export default hasPermission;
