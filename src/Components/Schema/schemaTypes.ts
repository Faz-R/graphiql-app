export type SchemaItem = {
  name: string;
  description: string;
  type: { name: string | null };
};

export type SchemaList = {
  name: string;
  description: string;
  fields: SchemaItem[] | null;
};

export type SchemaItemProps = {
  level: number;
  queryName: string;
  addQueryName: (name: string, level: number) => void;
};

export type SchemaNodeProps = SchemaItem & {
  level: number;
  addQueryName: (name: string, level: number) => void;
};
