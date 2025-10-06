import { UserListsParams } from "../types";
import { privateInstance } from "./api";

const ROLE_BASE_URL = "/api/role-managements";

export const RoleServices = {
  getLists: async (params?: UserListsParams) => {
    return await privateInstance.get(`${ROLE_BASE_URL}/`, { params });
  },
  create: async (body?: { name: string; permissions: string }) => {
    return await privateInstance.post(`${ROLE_BASE_URL}/create`, body);
  },
  edit: async (id: string, body?: { name: string; permissions: string }) => {
    return await privateInstance.put(`${ROLE_BASE_URL}/${id}/edit`, body);
  },
  delete: async (id: string) => {
    return await privateInstance.delete(`${ROLE_BASE_URL}/${id}/delete`);
  },
};
