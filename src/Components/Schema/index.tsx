import { useState } from 'react';
import SchemaContext, {
  type SchemaItemType,
  type SetSchemaType,
} from './context/SchemaContext';
import { Button, Drawer } from '@mui/material';
import SchemaList from './SchemaList';

const Schema = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [list, setList] = useState<SchemaItemType[]>([
    { query: 'Query', level: 1 },
  ]);

  const setSchema: SetSchemaType = (name, index) => {
    let newSchema: SchemaItemType[];

    if (!name) {
      newSchema = list.slice(0, index);
    } else if (list.some(({ level }) => level === index + 1)) {
      newSchema = list.slice(0, index);
      newSchema.push({ query: name, level: index + 1 });
    } else {
      newSchema = [...list, { query: name, level: index + 1 }];
    }
    setList(newSchema);
  };

  return (
    <SchemaContext.Provider value={{ schema: list, setSchema }}>
      <Button variant='contained' onClick={() => setIsOpen(!isOpen)}>
        Docs
      </Button>
      <Drawer anchor='right' open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <SchemaList />
      </Drawer>
    </SchemaContext.Provider>
  );
};

export default Schema;
