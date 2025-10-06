import { NewsStatus } from "../enums/Status";
import { Dayjs } from "dayjs";

export type NewsType = {
  _id: string;
  title: string;
  thumbnailImage: string;
  shortDesc: string;
  status: NewsStatus;
};

export type NewsFormData = {
  title: string;
  content: string;
  shortDesc: string;
  thumbnailImage: string;
  coverImage: string;
  category: string;
};

export type NewsFormSubmit = {
  title: string;
  content: string;
  shortDesc: string;
  thumbnailImage: any[];
  coverImage: any[];
  category: string;
};

export type EventsFormSubmit = NewsFormSubmit & {
  date: [Dayjs, Dayjs];
  location?: string;
};
