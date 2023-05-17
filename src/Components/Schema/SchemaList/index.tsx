import { useState } from 'react';
import { Stack, Divider } from '@mui/material';
import SchemaItem from '../SchemaItem';

const SchemaList = () => {
  const [listQueryNames, setListQueryNames] = useState<string[]>(['Query']);

  const addQueryName = (name: string, level: number) => {
    let newList: string[];
    if (level === listQueryNames.length - 1) {
      newList = [...listQueryNames, name];
    } else {
      newList = listQueryNames.slice(0, level + 1);
      newList.push(name);
    }
    setListQueryNames(newList);
  };

  return (
    <Stack
      direction='row'
      spacing={1}
      divider={<Divider orientation='vertical' />}
    >
      {listQueryNames.map((queryName, level) => (
        <SchemaItem
          key={queryName}
          queryName={queryName}
          addQueryName={addQueryName}
          level={level}
        />
      ))}
    </Stack>
  );
};

export default SchemaList;
