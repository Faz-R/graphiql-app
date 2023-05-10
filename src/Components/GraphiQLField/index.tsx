import { useState } from "react";
import { Grid, Container } from "@mui/material";
import RequestField from "../RequestField";

import ResponseFieldWithApollo from "../ResponseFieldWithApollo";

function GraphiQLField() {
  const [data, setData] = useState("");

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <RequestField setData={setData} />
          {data ? <ResponseFieldWithApollo responseText={data} /> : ""}
        </Grid>
      </Container>
    </>
  );
}

export default GraphiQLField;
