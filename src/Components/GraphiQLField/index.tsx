import { useState } from "react";
import { Grid, Container, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RequestField from "../RequestField";
import VariablesField from "../VariablesField";
import { DEF_VALUE_REQUEST } from "./constants";

import ResponseFieldWithApollo from "../ResponseFieldWithApollo";

interface IRequest {
  request: string;
  variables: string;
}

function GraphiQLField() {
  const [data, setData] = useState( DEF_VALUE_REQUEST );
  const [request, setRequest] = useState<IRequest>({
    request: "",
    variables: "",
  });
  const [variables, setVariables] = useState(``);

  const completeRequest = () => {
    setRequest({ request: data, variables });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Button
          variant="contained"
          sx={{ m: "8px", p: "10px", pr: "50px", pl: "50px" }}
          aria-label="directions"
          onClick={completeRequest}
          endIcon={<SendIcon />}>
          Send
        </Button>
        <Grid container spacing={2}>
          <RequestField setData={setData} />
          {request.request ? (
            <ResponseFieldWithApollo
              responseText={request.request}
              variables={request.variables}
            />
          ) : (
            ""
          )}
        </Grid>
        <VariablesField setVariables={setVariables} />
      </Container>
    </>
  );
}

export default GraphiQLField;
