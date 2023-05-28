import { useState } from "react";
import { Grid, Container, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RequestField from "../RequestField";
import VariablesField from "../VariablesField";
import { DEF_VALUE_REQUEST } from "./constants";
import { ErrorFallbackComponent } from "../ErrorFallbackComponent";
import { ErrorBoundary } from "react-error-boundary";
import ResponseFieldWithApollo from "../ResponseFieldWithApollo";
import { ErrorModalWindow } from "../ErrorModalWindow";

interface IRequest {
  request: string;
  variables: object | undefined;
  headers: string;
}

function GraphiQLField() {
  const [data, setData] = useState(DEF_VALUE_REQUEST);
  const [headers, setHeaders] = useState("");
  const [key, setKey] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [request, setRequest] = useState<IRequest>({
    request: "",
    variables: undefined,
    headers: "",
  });
  const [variables, setVariables] = useState(``);
  const [open, setOpen] = useState(false);
  let varToJson: object | undefined;

  const completeRequest = () => {
    setKey(!key);

    try {
      setErrorMessage("");
      if (variables.trim()) varToJson = JSON.parse(variables);
    } catch (err) {
      setErrorMessage("enter the valid variables");
    }

    setRequest({ request: data, variables: varToJson, headers });
  };

  return (
    <>
      {errorMessage ? <ErrorModalWindow error={errorMessage} key={+key} /> : ""}
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
            <ErrorBoundary
              FallbackComponent={ErrorFallbackComponent}
              onReset={() =>
                setRequest({
                  request: "",
                  variables: undefined,
                  headers: "",
                })
              }>
              <ResponseFieldWithApollo
                responseText={request.request}
                variables={request.variables}
                headers={request.headers}
                req={key}
              />
            </ErrorBoundary>
          ) : (
            ""
          )}
        </Grid>
        <VariablesField
          setVariables={setVariables}
          open={open}
          setOpenParent={setOpen}
          setHeaders={setHeaders}
        />
      </Container>
    </>
  );
}

export default GraphiQLField;
