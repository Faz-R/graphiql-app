import { useState } from "react";
import { Grid, Container, Button, Box, Fab, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RequestField from "../RequestField";
import VariablesField from "../VariablesField";
import { DEF_VALUE_REQUEST } from "./constants";
import { ErrorFallbackComponent } from "../ErrorFallbackComponent";
import { ErrorBoundary } from "react-error-boundary";
import ResponseFieldWithApollo from "../ResponseFieldWithApollo";
import { PlayArrow, PlayCircle, PlayCircleFilled } from "@mui/icons-material";
import Schema from "../Schema";

interface IRequest {
  request: string;
  variables: string;
  headers: string;
}

function GraphiQLField() {
  const [data, setData] = useState(DEF_VALUE_REQUEST);
  const [headers, setHeaders] = useState("");
  const [key, setKey] = useState(true);
  const [request, setRequest] = useState<IRequest>({
    request: "",
    variables: "",
    headers: "",
  });
  const [variables, setVariables] = useState(``);
  const [open, setOpen] = useState(false);

  const completeRequest = () => {
    setKey(!key);
    setRequest({ request: data, variables, headers });
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="inherit"
        sx={{ paddingTop: "20px", mb: "20px" }}
      >
        <Button onClick={completeRequest} color="primary">
          <PlayArrow sx={{ fontSize: 30 }} />
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          variables
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          headers
        </Button>
        <Schema />
      </ButtonGroup>
      <Grid container sx={{ position: "relative", width: "100%" }}>
        <RequestField setData={setData} />

        {request.request ? (
          <ErrorBoundary
            FallbackComponent={ErrorFallbackComponent}
            onReset={() =>
              setRequest({
                request: "",
                variables: "",
                headers: "",
              })
            }
          >
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
    </>
  );
}

export default GraphiQLField;
