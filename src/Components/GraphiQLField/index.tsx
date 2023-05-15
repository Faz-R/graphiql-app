import { useState } from "react";
import { Grid, Container, Button, Box } from "@mui/material";
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
  const [data, setData] = useState(DEF_VALUE_REQUEST);
  const [request, setRequest] = useState<IRequest>({
    request: "",
    variables: "",
  });
  const [variables, setVariables] = useState(``);
  const [open, setOpen] = useState(false);

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
        <Box sx={{ textAlign: "left", pt: 1 }}>
          <Button
            onClick={() => {
              setOpen(true);
            }}>
            Variables
          </Button>
        </Box>
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
        <VariablesField
          setVariables={setVariables}
          open={open}
          setOpenParent={setOpen}
        />
      </Container>
    </>
  );
}

export default GraphiQLField;
