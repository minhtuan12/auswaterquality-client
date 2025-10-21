export type PeopleGroupType = {
  _id: string;
  name: string;
  peoples: PeopleType[];
  status: number;
  meta?: { [key: string]: any };
};

export type PeopleType = {
  _id: string;
  name: string;
  bioLink: string;
  avatarUrl: string;
  description: string;
};
