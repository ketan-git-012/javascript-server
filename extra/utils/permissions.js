import {permissions} from './../constants';

const hasPermission = (moduleName, role, permission) => {
  for (const [key] of Object.entries(permissions)) {
    if (moduleName === key) {
      for (const [keys, values] of Object.entries(permissions.getUsers)) {
        if (keys == permission) {
          for (const [keys, valueR] of Object.entries(values)) {
            if (valueR == role) {
              return true;
            }
          }
        }
      }
    }
  }

  return false;
};

export default hasPermission;
