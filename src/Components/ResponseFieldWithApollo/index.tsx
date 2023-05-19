import { Grid, CircularProgress } from "@mui/material";
import "./index.css";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

interface IResponseField {
  responseText: string;
  variables: string;
  headers: string;
}

function ResponseFieldWithApollo({ responseText, variables, headers }: IResponseField) {
  const DATA_RESPONSE = gql`
    ${responseText}
  `;
  let varToJson: object | undefined;
  let errorMessage = "";

  

  useEffect(() => {
    console.log('effect',headers);
    refetch();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [headers]);

  try {
    if (variables) varToJson = JSON.parse(variables);
  } catch (err) {
    errorMessage = "enter the valid variables";
  }

  const { loading, error, data, refetch } = useQuery(DATA_RESPONSE, {
    variables: varToJson,
    errorPolicy: "all",
    //onError: (error) => console.log(error),
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
