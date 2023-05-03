import { Button, Container, Grid, Link, Typography } from "@mui/material";
import "./index.css";
import logo from "../../assets/img/GraphQ-logo.png";
import PersonCard from "../../Components/PersonCard";
import AlexPhoto from "../../assets/img/Alex.jpg";
import RifatPhoto from "../../assets/img/Rifat.jpg";
import JeniaPhoto from "../../assets/img/Jenia.jpeg";

const Welcome = () => {
  return (
    <>
      <section className="top">
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={8} sx={{ mt: "auto", mb: "auto" }}>
              <Typography variant="h3" component="h1" sx={{ mb: "30px" }}>
                GraphiQL App
              </Typography>
              <Typography sx={{ maxWidth: "700px", mb: "30px" }}>
                GraphiQL is the GraphQL integrated development environment
                (IDE). It is a powerful tool you will use often while building
                bwebsites. It offers syntax highlighting, intellisense
                autocompletion, automatic documentation, and much more. Our
                team, as part of the final assignment for the React course from
                the{" "}
                {
                  <Link href="https://rs.school/index.html" underline="none">
                    RSSchool
                  </Link>
                }
                , created an application for working with graphQL requests.
              </Typography>
              <Button variant="contained">Sing Up</Button>
            </Grid>
            <Grid item xs={4}>
              <img
                src={logo}
                alt="graphQL"
                className="top__logo"
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="team">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: "center", mb: "30px" }}
          >
            Our team
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <PersonCard image={AlexPhoto} name="Kazlou Aliaksei" />
            </Grid>
            <Grid item xs={4}>
              <PersonCard image={RifatPhoto} name="Fazlyev Rifat" />
            </Grid>
            <Grid item xs={4}>
              <PersonCard image={JeniaPhoto} name="Yauheni Basalai" />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
export default Welcome;
