import { useState } from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import RequestField from "../RequestField";
import { DEF_VALUE_REQUEST } from "./constants";
import { ErrorFallbackComponent } from "../ErrorFallbackComponent";
import { ErrorBoundary } from "react-error-boundary";
import ResponseFieldWithApollo from "../ResponseFieldWithApollo";
import { PlayArrow } from "@mui/icons-material";
import Schema from "../Schema";
import { ErrorModalWindow } from "../ErrorModalWindow";

interface IRequest {
  request: string;
  variables: object | undefined;
  headers: string;
}

function GraphiQLField() {
  const [data, setData] = useState(DEF_VALUE_REQUEST);
  const [headers, setHeaders] = useState("");
  const [variables, setVariables] = useState("");
  const [key, setKey] = useState(true);
  const [request, setRequest] = useState<IRequest>({
    request: "",
    variables: undefined,
    headers: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  let varToJson: object | undefined;

  const completeRequest = () => {
    setKey(!key);
    try {
      setErrorMessage("");
      if (variables.trim()) varToJson = JSON.parse(variables);
    } catch (err) {
      setErrorMessage("enter the valid variables");
    }
    setRequest({ request: data, variables: varToJson, headers: headers });
  };

  return (
    <>
      {errorMessage ? <ErrorModalWindow error={errorMessage} key={+key} /> : ""}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="inherit"
        sx={{ paddingTop: "20px", mb: "20px" }}>
        <Button onClick={completeRequest} color="primary">
          <PlayArrow sx={{ fontSize: 30 }} />
        </Button>
        <Schema />
      </ButtonGroup>
      <Grid
        container
        sx={{ position: "relative", width: "100%" }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        <RequestField
          setData={setData}
          setHeaders={setHeaders}
          setVariables={setVariables}
        />

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
    </>
  );
}

export default GraphiQLField;
