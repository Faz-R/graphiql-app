import { Grid, CircularProgress } from "@mui/material";
import "./index.css";
import { useQuery, gql } from "@apollo/client";

interface IResponseField {
  responseText: string;
  variables: string;
}

function ResponseFieldWithApollo({ responseText, variables }: IResponseField) {
  const DATA_RESPONSE = gql`
    ${responseText}
  `;
  let varToJson: object | undefined;
  let errorMessage = "";

  try {
    if (variables) varToJson = JSON.parse(variables);
  } catch (err) {
    errorMessage = "enter the valid variables";
  }

  const { loading, error, data } = useQuery(DATA_RESPONSE, {
    variables: varToJson,
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <h3>Error {error.message}</h3>;
  }

  return (
    <Grid item xs={5} mr={10}>
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : data ? (
        <pre className="pre">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        ""
      )}
    </Grid>
  );
}

export default ResponseFieldWithApollo;
