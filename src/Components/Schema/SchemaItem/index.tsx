import { Box, Typography, List } from '@mui/material';
import { useQuery } from '@apollo/client';
import { SCHEMA } from '../../../apollo/schema';
import SchemaNode from '../SchemaNode';
import type { SchemaData } from '../schemaTypes';

const SchemaItem: React.FC<{ query: string; level: number }> = ({
  query,
  level,
}) => {
  const { loading, data } = useQuery(SCHEMA, {
    variables: { query },
  });

  if (loading) return null;

  const { name, description, fields } = data.__type as SchemaData;

  return (
    <Box>
      <Typography variant='button' align='center' paragraph>
        {name}
      </Typography>
      {description && <Typography variant='caption'>{description}</Typography>}
      {fields && (
        <List>
          {fields.map((field) => (
            <SchemaNode key={field.name} {...field} level={level} />
          ))}
        </List>
      )}
    </Box>
  );
};

export default SchemaItem;
