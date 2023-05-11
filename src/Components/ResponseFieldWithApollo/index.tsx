import { Grid, CircularProgress } from "@mui/material";
import "./index.css";
import { useQuery, gql } from "@apollo/client";

interface IResponseField {
  responseText: string;
  variables: string;
}

function ResponseFieldWithApollo({ responseText,variables }: IResponseField) {
  const DATA_RESPONSE = gql`
    ${responseText}
  `;
  const VARIABLES =JSON.parse(variables);

  const { loading, error, data } = useQuery(DATA_RESPONSE, {
    variables: VARIABLES/*  { "page": 1,
  "filter": {
    "name": "morty"
  }  }*/
  });

  console.log('variables', VARIABLES)

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
