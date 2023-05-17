import { ListItemButton, ListItemText, Typography } from '@mui/material';
import type { SchemaNodeProps } from '../schemaTypes';

const SchemaNode: React.FC<SchemaNodeProps> = ({
  name,
  description,
  type,
  addQueryName,
  level,
}) => {
  return (
    <ListItemButton
      divider
      onClick={() => type.name && addQueryName(type.name, level)}
    >
      <ListItemText
        primary={
          <Typography variant='body2'>
            {`${name}: ${type.name ?? '[ ]'}`}
          </Typography>
        }
        secondary={<Typography variant='caption'>{description}</Typography>}
      ></ListItemText>
    </ListItemButton>
  );
};

export default SchemaNode;
