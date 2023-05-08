import { Button, TextField, Box, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Dispatch, SetStateAction, useState } from "react";

interface IrequestField {
  setData: Dispatch<SetStateAction<string>>;
}

function RequestField({ setData }: IrequestField) {
  const [request, setRequest] = useState("");
  const url = "https://rickandmortyapi.com/graphql";

  const resp = async (data = '') => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: data }),
    });

    return await response.json();
  };

  const giveAnswer = () => {
    resp(request).then((r: string) => setData(r));
  };

  return (
    <>
      <Grid item xs={6}>
        <Button
          variant="contained"
          sx={{ p: "10px", pr: "50px", pl: "50px" }}
          aria-label="directions"
          onClick={giveAnswer}
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
