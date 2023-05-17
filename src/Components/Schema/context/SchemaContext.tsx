import { createContext } from 'react';

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
