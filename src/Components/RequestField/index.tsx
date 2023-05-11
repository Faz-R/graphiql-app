import { Button, TextField, Box, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Dispatch, useState, SetStateAction } from "react";

interface IrequestField {
  setData: Dispatch<SetStateAction<string>>;
}

function RequestField({ setData }: IrequestField) {
  const [request, setRequest] = useState("");

  const handleClick = () => {
    setData(request);
  };

  return (
    <>
      <Grid item xs={6}>
        <Button
          variant="contained"
          sx={{ p: "10px", pr: "50px", pl: "50px" }}
          aria-label="directions"
          onClick={handleClick}
          endIcon={<SendIcon />}>
          Send
        </Button>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "55ch" },
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
              value={request}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setRequest(event.target.value);
              }}
            />
          </div>
        </Box>
      </Grid>
    </>
  );
}

export default RequestField;
