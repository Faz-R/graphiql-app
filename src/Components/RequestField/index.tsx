import { TextField, Grid } from "@mui/material";
import { DEF_VALUE_REQUEST } from "../GraphiQLField/constants";
import { Dispatch, SetStateAction } from "react";

interface IrequestField {
  setData: Dispatch<SetStateAction<string>>;
}

function RequestField({ setData }: IrequestField) {
  return (
    <>
      <Grid item xs={6} sx={{ height: "100%" }}>
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          multiline
          minRows={26}
          focused
          variant="filled"
          defaultValue={DEF_VALUE_REQUEST}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setData(event.target.value);
          }}
          sx={{
            "& .MuiInputBase-root": {
              padding: "20px",
              borderRadius: 0,
              borderRight: "2px solid #90caf9",
              height: "70vh",
              maxHeight: "70vh",
              overflow: "hidden",
              overflowY: "auto",
            },
            "& .MuiInputBase-root::before": {
              display: "none",
            },
            "& .MuiInputBase-root::after": {
              display: "none",
            },
          }}
        />
      </Grid>
    </>
  );
}

export default RequestField;
