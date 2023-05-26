import { useContext } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import SchemaContext, { type SchemaField } from '../context/SchemaContext';

const SchemaNode: React.FC<SchemaField & { level: number }> = ({
  name,
  description,
  type,
  level,
}) => {
  const { setSchema } = useContext(SchemaContext);
  return (
    <Accordion
      onClick={(e) => {
        e.stopPropagation();
        setSchema(type.name, level);
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore color='success' />}>
        <Typography variant='subtitle1' color='primary'>
          {`${name}: ${
            type.name ||
            `[${
              type.ofType?.name ?? description.startsWith('Episode')
                ? 'Episode'
                : 'Character'
            }]`
          }`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='caption' color='lime'>
          {description || 'none'}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SchemaNode;
