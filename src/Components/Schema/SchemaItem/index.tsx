import { Box, Typography, CircularProgress, List } from '@mui/material';

import { useQuery } from '@apollo/client';
import { SCHEMA } from '../../../apollo/schema';
import SchemaNode from '../SchemaNode';
import type { SchemaListType } from '../schemaTypes';

const SchemaItem: React.FC<{ queryName: string; getList?: () => void }> = ({
  queryName,
  getList,
}) => {
  const { loading, data } = useQuery(SCHEMA, {
    variables: { name: queryName },
  });

  if (loading) return <CircularProgress />;

  const { name, description, fields } = data.__type as SchemaListType;

  return (
    <Box>
      <Typography variant='button' align='center' paragraph>
        {name}
      </Typography>
      {description && <Typography variant='caption'>{description}</Typography>}
      {fields && (
        <List>
          {fields.map((field) => (
            <SchemaNode key={field.name} {...field} />
          ))}
        </List>
      )}
    </Box>
  );
};

export default SchemaItem;
