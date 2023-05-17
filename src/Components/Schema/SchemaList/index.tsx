import { useState } from 'react';
import { Stack, Divider } from '@mui/material';
import SchemaItem from '../SchemaItem';
// import type { SchemaListType } from '../schemaTypes';

const SchemaList = () => {
  const [listNames, setListNames] = useState<string[]>([]);

  // const handleClick = (name: string, index: number)=>{
  //     setList(prevList=> [...prevList, ])
  // }

  return (
    <Stack
      direction='row'
      spacing={2}
      divider={<Divider orientation='vertical' />}
    >
      <SchemaItem queryName='Query' />
      {listNames.length > 0 &&
        listNames.map((itemName) => (
          <SchemaItem key={itemName} queryName={itemName} />
        ))}
    </Stack>
  );
};

export default SchemaList;
