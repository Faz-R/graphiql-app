import { Box, Paper, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { SCHEMA } from "../../../apollo/schema";
import SchemaNode from "../SchemaNode";
import Loader from "../../Loader";
import type { SchemaData } from "../context/SchemaContext";

interface ShemaItemProps {
  query: string;
  level: number;
}

const SchemaItem: React.FC<{ query: string; level: number }> = ({
  query,
  level,
}: ShemaItemProps) => {
  const { loading, data } = useQuery(SCHEMA, {
    variables: { query },
  });

  if (loading)
    return (
      <Box
        sx={{
          maxWidth: 300,
          minWidth: 150,
        }}
      >
        <Loader />
      </Box>
    );

  const { name, description, fields } = data.__type as SchemaData;

  return (
    <Box
      sx={{
        maxWidth: 300,
        minWidth: 150,
      }}
    >
      <Typography variant="h6" align="center" paragraph color="primary">
        {name}
      </Typography>
      {description && (
        <Paper elevation={1} sx={{ padding: "20px" }}>
          <Typography
            variant="subtitle1"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: "600" }}
          >
            Type Details
          </Typography>
          <Typography paragraph color="inherit">
            {description}
          </Typography>
        </Paper>
      )}
      {fields &&
        fields.map((field) => (
          <SchemaNode key={field.name} {...field} level={level} />
        ))}
    </Box>
  );
};

export default SchemaItem;
