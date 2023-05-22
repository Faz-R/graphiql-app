/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps*/
import { Grid, CircularProgress } from "@mui/material";
import "./index.css";
import { gql, DefaultContext, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

interface IResponseField {
  responseText: string;
  variables: string;
  headers: string;
}

export let headersForRequest: DefaultContext = {};

function ResponseFieldWithApollo({
  responseText,
  variables,
  headers,
}: IResponseField) {
  const DATA_RESPONSE = gql`
    ${responseText}
  `;
  let varToJson: object | undefined;
  let errorMessage = "";

  useEffect(() => {
    // getResponse();
    refetch();
  }, [headers]);

  useEffect(() => {
    getResponse();
    //refetch();
  }, []);

  try {
    if (headers) headersForRequest = JSON.parse(headers);
  } catch (err) {
    errorMessage = "enter the valid headers";
  }

  try {
    if (variables) varToJson = JSON.parse(variables);
  } catch (err) {
    errorMessage = "enter the valid variables";
  }

  const [getResponse, { loading, error, data, refetch }] = useLazyQuery(
    DATA_RESPONSE,
    {
      variables: varToJson,
      errorPolicy: "all",
      //onError: (error) => alert(error),
    }
  );

  try {
    if (loading) {
      return <CircularProgress />;
    }

    if (error) {
      return <h3>Error {error.message}</h3>;
    }
  } catch (err) {
    errorMessage = "enter the valid hhhhuuuuuuu";
  }
  /* const { loading, error, data, refetch } = useQuery(DATA_RESPONSE, {
    variables: varToJson,
    errorPolicy: "all",
    //onError: (error) => alert(error),
  });
 */

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
