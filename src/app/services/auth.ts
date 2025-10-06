import { SignInFormField } from "../types";
import { publicInstance } from "./api";

const AUTH_BASE_URL = "/api/auth";

export const AuthServices = {
  signIn: async (body: SignInFormField) => {
    return await publicInstance.post(`${AUTH_BASE_URL}/login`, body);
  },
};
