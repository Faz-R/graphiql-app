import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  CircularProgress,
} from '@mui/material';

import { SCHEMA } from '../../../apollo/schema';
import { useQuery } from '@apollo/client';

type SchemaType = {
  name: string;
  description: string;
  type: { name: string };
};

const SchemaList: React.FC<{ name: string }> = ({ name }) => {
  const { loading, data } = useQuery(SCHEMA, {
    variables: { name },
  });

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant='button' align='center' paragraph>
        {data.__type.name}
      </Typography>
      <List>
        {data.__type.fields.map(({ name, description, type }: SchemaType) => (
          <ListItem key={name} disablePadding divider>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant='body2'>
                    {`${name}: ${type.name ?? ''}`}
                  </Typography>
                }
                secondary={
                  <Typography variant='caption'>{description}</Typography>
                }
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SchemaList;
