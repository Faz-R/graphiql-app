export type SchemaField = {
  name: string;
  description: string;
  type: { name: string | null };
};

export type SchemaData = {
  name: string;
  description: string;
  fields: SchemaField[] | null;
};
