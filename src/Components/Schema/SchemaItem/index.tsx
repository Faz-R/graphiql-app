import { Box, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { SCHEMA } from '../../../apollo/schema';
import SchemaNode from '../SchemaNode';
import Loader from '../../Loader';
import type { SchemaData } from '../context/SchemaContext';

const SchemaItem: React.FC<{ query: string; level: number }> = ({
  query,
  level,
}) => {
  const { loading, data } = useQuery(SCHEMA, {
    variables: { query },
  });

  if (loading) return <Loader />;

  const { name, description, fields } = data.__type as SchemaData;

  return (
    <Box
      sx={{
        maxWidth: 300,
        minWidth: 150,
      }}
    >
      <Typography variant='button' align='center' paragraph color='primary'>
        {name}
      </Typography>
      {description && (
        <Typography variant='body1' color='secondary'>
          {description}
        </Typography>
      )}
      {fields &&
        fields.map((field) => (
          <SchemaNode key={field.name} {...field} level={level} />
        ))}
    </Box>
  );
};

export default SchemaItem;
