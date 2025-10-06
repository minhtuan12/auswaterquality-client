import { privateInstance, publicInstance } from "./api";

const NEWS_BASE_URL = "/api";

export const MainService = {
  contactUs: async (body?: {
    name: string;
    email: string;
    message?: string;
  }) => {
    return await publicInstance.post(`${NEWS_BASE_URL}/contact-us`, body);
  },
  configurationDetail: async () => {
    return await privateInstance.get(`${NEWS_BASE_URL}/configuration`);
  },
  configurationUpdate: async (values: any) => {
    return await privateInstance.post(
      `${NEWS_BASE_URL}/configuration/edit`,
      values
    );
  },
};
