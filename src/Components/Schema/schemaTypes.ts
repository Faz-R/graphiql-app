export type SchemaItemType = {
  name: string;
  description: string;
  type: { name: string };
};

export type SchemaListType = {
  name: string;
  description: string;
  fields: SchemaItemType[] | null;
};
