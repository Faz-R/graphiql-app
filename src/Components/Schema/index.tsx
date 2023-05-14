import { useState } from 'react';
import { Button, Drawer, Stack, Divider } from '@mui/material';
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
        <Stack
          direction='row'
          spacing={2}
          divider={<Divider orientation='vertical' />}
        >
          <SchemaList name='Query' />
        </Stack>
      </Drawer>
    </>
  );
};

export default Schema;
