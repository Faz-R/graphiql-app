import { Grid } from "@mui/material";
import "./index.css";

interface IResponseField {
  data: string;
}

function ResponseField({data}: IResponseField ) {
  return (
    <Grid item xs={5} mr={10} >
       {data ? <pre className="pre">{JSON.stringify(data, null, 2)}</pre> : ''}
    </Grid>
  )
}

export default ResponseField