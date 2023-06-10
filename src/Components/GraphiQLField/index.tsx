import { useState } from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import RequestField from "../RequestField";
import { DEFAULT_QUERY } from "./constants";
import ResponseFieldWithApollo from "../ResponseFieldWithApollo";
import { PlayArrow } from "@mui/icons-material";
import Schema from "../Schema";
import { toast, ToastContainer } from "react-toastify";
import { DefaultContext } from "@apollo/client";

interface Request {
  request: string;
  variables: object | undefined;
  headers: string;
}
export let headersForRequest: DefaultContext = {};

function GraphiQLField() {
  const [data, setData] = useState(DEFAULT_QUERY);
  const [headers, setHeaders] = useState("");
  const [variables, setVariables] = useState("");
  const [key, setKey] = useState(true);
  const [request, setRequest] = useState<Request>({
    request: "",
    variables: undefined,
    headers: "",
  });

  const notify = (error: string): void => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
      draggable: false,
    });
  };

  const completeRequest = () => {
    setKey(!key);
    let varToJson: object | undefined;
    try {
      if (variables.trim()) varToJson = JSON.parse(variables);
      if (headers.trim()) {
        headersForRequest = JSON.parse(headers);
      }
      setRequest({ request: data, variables: varToJson, headers: headers });
    } catch (error) {
      notify((error as Error).message);
    }
  };

  return (
    <>
      <ToastContainer theme="dark" limit={3} autoClose={3000} />
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        color="inherit"
        sx={{ paddingTop: "20px", mb: "20px" }}
      >
        <Button onClick={completeRequest} color="primary">
          <PlayArrow sx={{ fontSize: 30 }} />
        </Button>
        <Schema />
      </ButtonGroup>
      <Grid
        container
        sx={{ position: "relative", width: "100%" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <RequestField
          setData={setData}
          setHeaders={setHeaders}
          setVariables={setVariables}
        />

        {request.request && (
          <ResponseFieldWithApollo
            request={request.request}
            variables={request.variables}
            headers={request.headers}
          />
        )}
      </Grid>
    </>
  );
}

export default GraphiQLField;
