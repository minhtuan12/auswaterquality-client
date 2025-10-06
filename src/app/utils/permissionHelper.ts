import { Permissions } from "../enums/Permission";

export const PermissionHelper = {
  hasPermission: (permission: Permissions, permissions: string[]) => {
    return permissions.includes(permission);
  },
};
