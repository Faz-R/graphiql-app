import { useContext } from "react";
import { Stack } from "@mui/material";
import SchemaContext from "../context/SchemaContext";
import SchemaItem from "../SchemaItem";
import { Close } from "@mui/icons-material";

const SchemaList = () => {
  const { schema } = useContext(SchemaContext);

  return (
    <>
      <Close sx={{ cursor: "pointer" }} />
      <Stack direction="row" spacing={2}>
        {schema.map((item) => (
          <SchemaItem key={item.query} {...item} />
        ))}
      </Stack>
    </>
  );
};

export default SchemaList;
