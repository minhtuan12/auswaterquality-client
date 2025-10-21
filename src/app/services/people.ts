import { privateInstance } from "./api";

const PEOPLE_BASE_URL = "/api/people";
const PEOPLE_BASE_ADMIN_URL = "/api/people-managements";
const PEOPLE_GROUP_BASE_ADMIN_URL = "/api/people-group-managements";

export const PeopleService = {
  getData: async (params?: object) => {
    return await privateInstance.get(`${PEOPLE_BASE_URL}/`, { params });
  },
};

export const AdminPeopleService = {
  searchList: async (params?: object) => {
    return await privateInstance.get(`${PEOPLE_BASE_ADMIN_URL}/`, { params });
  },
  create: async (body: any) => {
    return await privateInstance.post(`${PEOPLE_BASE_ADMIN_URL}/create`, body);
  },
  edit: async (id: string, body: any) => {
    return await privateInstance.put(
      `${PEOPLE_BASE_ADMIN_URL}/${id}/edit`,
      body
    );
  },
  delete: async (id: string) => {
    return await privateInstance.delete(
      `${PEOPLE_BASE_ADMIN_URL}/${id}/delete`
    );
  },
};

export const AdminPeopleGroupService = {
  searchList: async (params?: object) => {
    return await privateInstance.get(`${PEOPLE_GROUP_BASE_ADMIN_URL}/`, {
      params,
    });
  },
  create: async (body: any) => {
    return await privateInstance.post(
      `${PEOPLE_GROUP_BASE_ADMIN_URL}/create`,
      body
    );
  },
  edit: async (id: string, body: any) => {
    return await privateInstance.put(
      `${PEOPLE_GROUP_BASE_ADMIN_URL}/${id}/edit`,
      body
    );
  },
  delete: async (id: string) => {
    return await privateInstance.delete(
      `${PEOPLE_GROUP_BASE_ADMIN_URL}/${id}/delete`
    );
  },
};
