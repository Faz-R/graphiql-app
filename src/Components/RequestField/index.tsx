import { Grid } from "@mui/material";
import { DEF_VALUE_REQUEST } from "../GraphiQLField/constants";
import { Dispatch, SetStateAction, useState } from "react";
import VariablesField from "../VariablesField";
import { graphql } from "cm6-graphql";

import CodeMirror from "@uiw/react-codemirror";
import { schema } from "../Schema/rickAndMortySchema";
import { customTheme } from "../../customTheme";
import { EditorView } from "@codemirror/view";

interface IrequestField {
  setData: Dispatch<SetStateAction<string>>;
  setHeaders: Dispatch<SetStateAction<string>>;
  setVariables: Dispatch<SetStateAction<string>>;
}

function RequestField({ setData, setHeaders, setVariables }: IrequestField) {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState(DEF_VALUE_REQUEST);
  return (
    <>
      <Grid
        item
        md={6}
        sm={4}
        xs={4}
        sx={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRight: "2px solid #90caf9",
          "@media (max-width: 600px)": {
            borderRight: "none",
            height: "50vh",
          },
        }}
      >
        <div
          style={{
            flex: "3 1 0%",
            overflowY: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.09)",
          }}
        >
          <CodeMirror
            spellCheck={true}
            autoFocus
            value={request}
            theme={customTheme({})}
            extensions={[graphql(schema), EditorView.lineWrapping]}
            onChange={(value): void => {
              setRequest(value);
              setData(value);
            }}
          />
        </div>
        <VariablesField
          setVariables={setVariables}
          setHeaders={setHeaders}
          open={open}
          setOpenParent={setOpen}
        />
      </Grid>
    </>
  );
}

export default RequestField;
