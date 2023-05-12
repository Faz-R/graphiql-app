import { useState, useEffect, useCallback, memo } from 'react';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { SCHEMA } from '../../apollo/schema';

const Schema = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useQuery(SCHEMA);
  console.log(data);

  return (
    <>
      {isOpen && (
        <Box>
          <Typography variant='h5'>{data.schema.list.name}</Typography>
          <List>
            {data.schema.list.fields.map(
              ({
                name,
                description,
              }: {
                name: string;
                description: string;
              }) => (
                <>
                  <ListItem key={name}>
                    <ListItemButton>
                      <ListItemText
                        primary={<Typography variant='h5'>{name}</Typography>}
                        secondary={
                          <Typography variant='body1'>{description}</Typography>
                        }
                      ></ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <Divider component='li' />
                </>
              )
            )}
          </List>
        </Box>
      )}
      <Button variant='contained' onClick={() => setIsOpen(!isOpen)}>
        Docs
      </Button>
    </>
  );
};

export default Schema;
