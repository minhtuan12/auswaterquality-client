import { UserCreateBody, UserListsParams } from "../types";
import { privateInstance } from "./api";

const USER_BASE_URL = "/api/user-managements";

export const UserServices = {
  getLists: async (params?: UserListsParams) => {
    return await privateInstance.get(`${USER_BASE_URL}/lists`, { params });
  },
  create: async (body?: UserCreateBody) => {
    return await privateInstance.post(`${USER_BASE_URL}/create`, body);
  },
  getMyProfile: async () => {
    return await privateInstance.get(`${USER_BASE_URL}/get-my-profile`);
  },
};
