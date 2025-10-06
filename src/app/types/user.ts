export type UserRole = {
  _id: string;
  name: string;
  permissions: string[];
  createdAt: string;
  updatedAt: string;
};

export type UserType = {
  _id: string;
  username: string;
  status: number;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};

export type UserListsParams = {
  q?: string;
};

export type UserCreateBody = {
  username: string;
  password: string;
  role: string;
};

export type UserFormSubmit = {
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
};
