import { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import SchemaList from './SchemaList';

const Schema = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant='contained' onClick={() => setIsOpen(!isOpen)}>
        Docs
      </Button>
      <Drawer
        anchor='right'
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        variant='persistent'
      >
        <SchemaList />
      </Drawer>
    </>
  );
};

export default Schema;
