import { useState } from "react";
import { Grid, Container } from "@mui/material";
import RequestField from "../RequestField";
import VariablesField from "../VariablesField";

import ResponseFieldWithApollo from "../ResponseFieldWithApollo";

function GraphiQLField() {
  const [data, setData] = useState("");
  const [variables, setVariables] = useState(`{
  "page": 2,
  "filter": {
    "name": "rick"
  }
}`);
  

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <RequestField setData={setData} />
          {data ? <ResponseFieldWithApollo responseText={data} variables={variables} /> : ""}
        </Grid>
        <VariablesField setVariables={setVariables} />
      </Container>
    </>
  );
}

export default GraphiQLField;
