import { Button, Container, Grid, Typography } from "@mui/material";
import './index.css';
import logo from '../../assets/GraphQ-logo.png';

const Welcome = () => {

  return (
    <>
    <section className="top">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={8} sx={{mt: 'auto', mb: 'auto'}}>
            <Typography variant="h3" component="h1" sx={{mb: "30px"}}>GraphiQL App</Typography>
            <Typography sx={{maxWidth: '700px', mb: "30px"}}>GraphiQL is the GraphQL integrated development environment (IDE). It is a powerful tool you will use often while building bwebsites.    It         offers syntax highlighting, intellisense autocompletion, automatic documentation, and much more. Our team, as part of the final assignment    for the     React     course from the RSSchool, created an application for working with graphQL requests.
            </Typography>
            <Button variant="contained">Sing Up</Button>
          </Grid>
          <Grid item xs={4}>
            <img src={logo} alt="graphQL" className="top__logo" loading="lazy"/>
          </Grid>
        </Grid>
      </Container>
    </section>
    </>
  );
};
export default Welcome;
