import { useContext } from 'react';
import { ListItemButton, ListItemText, Typography } from '@mui/material';
import SchemaContext from '../context/SchemaContext';
import type { SchemaField } from '../schemaTypes';

const SchemaNode: React.FC<SchemaField & { level: number }> = ({
  name,
  description,
  type,
  level,
}) => {
  const { setSchema } = useContext(SchemaContext);
  return (
    <ListItemButton divider onClick={() => setSchema(type.name, level)}>
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
