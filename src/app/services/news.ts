import { privateInstance } from "./api";

const NEWS_BASE_URL = "/api/news";

export const NewsService = {
  searchList: async (params?: object) => {
    return await privateInstance.get(`${NEWS_BASE_URL}/get-list`, { params });
  },
  getHighlightLists: async () => {
    return await privateInstance.get(`${NEWS_BASE_URL}/get-highlight-list`);
  },
  getDetail: async (slug?: string) => {
    return await privateInstance.get(`${NEWS_BASE_URL}/detail/${slug}`);
  },
};

export const AdminNewsService = {
  searchList: async (params?: object) => {
    return await privateInstance.get(`${NEWS_BASE_URL}/`, { params });
  },
  detail: async (id: string) => {
    return await privateInstance.get(`${NEWS_BASE_URL}/${id}`);
  },
  create: async (body: FormData) => {
    return await privateInstance.post(`${NEWS_BASE_URL}/`, body);
  },
  edit: async (id: string, body: FormData) => {
    return await privateInstance.put(`${NEWS_BASE_URL}/${id}`, body);
  },
  delete: async (id: string) => {
    return await privateInstance.delete(`${NEWS_BASE_URL}/${id}`);
  },
  publish: async (id: string) => {
    return await privateInstance.put(`${NEWS_BASE_URL}/publish/${id}`);
  },
  unpublish: async (id: string) => {
    return await privateInstance.put(`${NEWS_BASE_URL}/unpublish/${id}`);
  },
};
