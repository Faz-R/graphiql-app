import { TextField, Box, Grid } from "@mui/material";
import { DEF_VALUE_REQUEST } from "../GraphiQLField/constants";
import { Dispatch, SetStateAction } from "react";

interface IrequestField {
  setData: Dispatch<SetStateAction<string>>;
}

function RequestField({ setData }: IrequestField) {
  return (
    <>
      <Grid item xs={6}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="enter request"
              multiline
              minRows={10}
              variant="outlined"
              defaultValue={DEF_VALUE_REQUEST}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setData(event.target.value);
              }}
            />
          </div>
        </Box>
      </Grid>
    </>
  );
}

export default RequestField;
