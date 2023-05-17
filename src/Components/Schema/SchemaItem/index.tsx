import { Box, Typography, CircularProgress, List } from '@mui/material';

import { useQuery } from '@apollo/client';
import { SCHEMA } from '../../../apollo/schema';
import SchemaNode from '../SchemaNode';
import type { SchemaList, SchemaItemProps } from '../schemaTypes';

const SchemaItem: React.FC<SchemaItemProps> = ({
  queryName,
  level,
  addQueryName,
}) => {
  const { loading, data } = useQuery(SCHEMA, {
    variables: { name: queryName },
  });

  if (loading) return <CircularProgress />;

  const { name, description, fields } = data.__type as SchemaList;

  return (
    <Box>
      <Typography variant='button' align='center' paragraph>
        {name}
      </Typography>
      {description && <Typography variant='caption'>{description}</Typography>}
      {fields && (
        <List>
          {fields.map((field) => (
            <SchemaNode
              key={field.name}
              {...field}
              addQueryName={addQueryName}
              level={level}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default SchemaItem;
