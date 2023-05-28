/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps*/
import { Grid, CircularProgress } from "@mui/material";
import "./index.css";
import { gql, DefaultContext, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { messError } from "../../apollo/client";
import { ErrorModalWindow } from "../ErrorModalWindow";

interface IResponseField {
  responseText: string;
  variables: object| undefined;
  headers: string;
  req: boolean;
}

export let headersForRequest: DefaultContext = {};

function ResponseFieldWithApollo({
  responseText,
  variables,
  headers,
  req,
}: IResponseField) {
  const DATA_RESPONSE = gql`
    ${responseText}
  `;
  //let varToJson: object | undefined;

  useEffect(() => {
    
    refetch();
  }, [headers, variables]);

  useEffect(() => {
    getResponse();
    
  }, [req, headers]);

  const [getResponse, { loading, error, data, refetch }] = useLazyQuery(
    DATA_RESPONSE,
    {
      variables: variables,
      errorPolicy: "all",
    }
  ); 
  
  

  try {
    if (headers.trim()) headersForRequest = JSON.parse(headers);
    else headersForRequest = {};
  } catch (err) {
    const errorMessage = "enter the valid headers";
    return <ErrorModalWindow error={errorMessage} key={+req} />;
  }

 
  
  if (loading) {
    return <CircularProgress />;
  }
  if (error?.graphQLErrors) {
    const err = "Error" + error.message + "  \n" + messError.graphErr;
    return <ErrorModalWindow error={err} key={+req} />;
  }

  if (error) {
    const err = "Error" + error.message + "  \n" + messError.netErr;
    return <ErrorModalWindow error={err} key={+req} />;
  }

  return (
    <Grid item xs={5} mr={10}>
      {data ? <pre className="pre">{JSON.stringify(data, null, 2)}</pre> : ""}
    </Grid>
  );
}

export default ResponseFieldWithApollo;
