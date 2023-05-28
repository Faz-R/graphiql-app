import { TextField, Grid } from "@mui/material";
import { DEF_VALUE_REQUEST } from "../GraphiQLField/constants";
import { Dispatch, SetStateAction, useState } from "react";
import VariablesField from "../VariablesField";

interface IrequestField {
  setData: Dispatch<SetStateAction<string>>;
  setHeaders: Dispatch<SetStateAction<string>>;
  setVariables: Dispatch<SetStateAction<string>>;
}

function RequestField({ setData, setHeaders, setVariables }: IrequestField) {
  const [open, setOpen] = useState(false);
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
        <div style={{ flex: "3 1 0%", overflowY: "auto" }}>
          <TextField
            id="outlined-multiline-flexible"
            fullWidth
            multiline
            focused
            variant="filled"
            defaultValue={DEF_VALUE_REQUEST}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setData(event.target.value);
            }}
            sx={{
              height: "100%",
              "& .MuiInputBase-root": {
                padding: "20px",
                borderRadius: 0,
                height: "100%",
                overflowY: "auto",
                display: "flex",
                alignItems: "flex-start",
              },
              "& .MuiInputBase-root::before": {
                display: "none",
              },
              "& .MuiInputBase-root::after": {
                display: "none",
              },
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
