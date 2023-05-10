import { Grid, CircularProgress } from "@mui/material";
import "./index.css";
import { useQuery, gql } from "@apollo/client";

interface IResponseField {
  responseText: string;
}

function ResponseFieldWithApollo({ responseText }: IResponseField) {
  const DATA_RESPONSE = gql`
    ${responseText}
  `;

  const { loading, error, data } = useQuery(DATA_RESPONSE);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <h3>Error {error.message}</h3>;
  }  

  return (
    <Grid item xs={5} mr={10}>
      {data ? <pre className="pre">{JSON.stringify(data, null, 2)}</pre> : ""}
    </Grid>
  );
}

export default ResponseFieldWithApollo;
