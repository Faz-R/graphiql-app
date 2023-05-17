import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import type { SchemaItemType } from '../schemaTypes';

const SchemaNode: React.FC<SchemaItemType> = ({ name, description, type }) => {
  return (
    <ListItem disablePadding divider>
      <ListItemButton>
        <ListItemText
          primary={
            <Typography variant='body2'>
              {`${name}: ${type.name ?? ''}`}
            </Typography>
          }
          secondary={<Typography variant='caption'>{description}</Typography>}
        ></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SchemaNode;
