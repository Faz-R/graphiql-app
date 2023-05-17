import { useState } from 'react';
import { Button, Drawer, SwipeableDrawer } from '@mui/material';
import SchemaList from './SchemaList';

const Schema = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant='contained' onClick={() => setIsOpen(!isOpen)}>
        Docs
      </Button>
      <Drawer anchor='right' open={isOpen} onClose={() => setIsOpen(false)}>
        <SchemaList />
      </Drawer>
    </>
  );
};

export default Schema;
