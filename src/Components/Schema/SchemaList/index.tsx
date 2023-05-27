import { useContext } from "react";
import { Stack } from "@mui/material";
import SchemaContext from "../context/SchemaContext";
import SchemaItem from "../SchemaItem";

const SchemaList = () => {
  const { schema } = useContext(SchemaContext);

  return (
    <Stack direction="row" spacing={2}>
      {schema.map((item) => (
        <SchemaItem key={item.query} {...item} />
      ))}
    </Stack>
  );
};

export default SchemaList;
