import { NewsStatus } from "../enums/Status";

export const getNewsStatus = {
  [NewsStatus.DRAFT]: {
    name: "Draft",
    color: "gray",
  },
  [NewsStatus.PENDING]: {
    name: "Pending",
    color: "orange",
  },
  [NewsStatus.PUBLIC]: {
    name: "Public",
    color: "green",
  },
};
