import { useState, useEffect, useCallback, memo } from 'react';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { SCHEMA } from '../../apollo/schema';

type SchemaType = {
  name: string;
  description: string;
  type: { name: string };
};

const Schema: React.FC<{ name: string }> = ({ name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useQuery(SCHEMA, {
    variables: { name },
  });
  console.log(data);

  return (
    <>
      <Button variant='contained' onClick={() => setIsOpen(!isOpen)}>
        Docs
      </Button>
      {isOpen && (
        <Box>
          <Typography variant='h5'>{data.__type.name}</Typography>
          <List>
            {data.__type.fields.map(
              ({ name, description, type }: SchemaType) => (
                <ListItem key={name}>
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <Typography variant='h5'>
                          {`${name}: ${type.name ?? ''}`}
                        </Typography>
                      }
                      secondary={
                        <Typography variant='subtitle1'>
                          {description}
                        </Typography>
                      }
                    ></ListItemText>
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      )}
    </>
  );
};

export default Schema;
