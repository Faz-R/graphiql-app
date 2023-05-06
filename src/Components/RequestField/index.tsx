import { IconButton, TextField, Box } from "@mui/material";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useState } from "react";

function RequestField() {
  const [request, setRequest] = useState("");
  const url = "https://rickandmortyapi.com/graphql";
  const [data, setData] = useState("");

  const resp = async (data = "") => {
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
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={giveAnswer}>
            <DirectionsIcon />
          </IconButton>
        </div>
      </Box>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default RequestField;
