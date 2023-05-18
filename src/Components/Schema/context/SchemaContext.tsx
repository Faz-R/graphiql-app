import { createContext } from 'react';

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

export type SchemaItemType = {
  query: string;
  level: number;
};

export type SetSchemaType = (name: string | null, index: number) => void;

type SchemaContextType = {
  schema: SchemaItemType[];
  setSchema: SetSchemaType;
};

const SchemaContext = createContext<SchemaContextType>({
  schema: [],
  setSchema: () => [],
});

export default SchemaContext;
