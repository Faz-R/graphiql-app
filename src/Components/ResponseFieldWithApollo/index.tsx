import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import CodeMirror from "@uiw/react-codemirror";
import { customTheme } from "../../customTheme";
import { json } from "@codemirror/lang-json";
import { ToastContainer, toast } from "react-toastify";
import { graphqlRequest } from "../../utils/graphqlRequest";
import { EditorView } from "@codemirror/view";

interface IResponseField {
  responseText: string;
  variables: object | undefined;
  headers: string;
}

function ResponseFieldWithApollo({
  responseText,
  variables,
  headers,
}: IResponseField) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const notify = (error: string): void => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
      draggable: false,
    });
  };

  useEffect(() => {
    setLoading(true);
    graphqlRequest(responseText, variables)
      .then((data) => {
        setResponse(data.data);
      })
      .catch((error) => {
        if (error.networkError) {
          setResponse(error.networkError.result.errors[0]);
          notify(error.networkError.result.errors[0].message);
        } else {
          setResponse(error);
          notify((error as Error).message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [responseText, variables, headers]);

  if (loading) {
    return (
      <Grid item md={6} sm={4} xs={4}>
        <Loader />
      </Grid>
    );
  }

  return (
    <>
      <ToastContainer theme="dark" limit={3} autoClose={3000} />
      {response && (
        <Grid
          item
          md={6}
          sm={4}
          xs={4}
          sx={{
            m: 0,
            maxHeight: "70vh",
            overflow: "hidden",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            backgroundColor: "#272727",
            position: "relative",
            "@media (max-width: 600px)": {
              maxHeight: "50vh",
              height: "50vh",
              mt: "15px",
              mb: "30px",
            },
          }}
        >
          <CodeMirror
            spellCheck={true}
            autoFocus
            value={JSON.stringify(response, null, 2)}
            theme={customTheme({})}
            readOnly
            extensions={[json(), EditorView.lineWrapping]}
            maxWidth="100%"
            style={{ flexShrink: 1 }}
          />
        </Grid>
      )}
    </>
  );
}

export default ResponseFieldWithApollo;
