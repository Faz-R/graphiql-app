import {
  Button,
  Container,
  Grid,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import "./index.css";
import logo from "../../assets/img/GraphQ-logo.png";
import PersonCard from "../../Components/PersonCard";
import AlexPhoto from "../../assets/img/Alex.jpg";
import RifatPhoto from "../../assets/img/Rifat.jpg";
import JeniaPhoto from "../../assets/img/Jenia.jpeg";
import { auth } from "../../firebase";
import { Link as ReactLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../Components/Loader";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const [user, loading, error] = useAuthState(auth);
  const { t } = useTranslation();

  return loading ? (
    <Loader />
  ) : (
    <>
      <section className="top">
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={8} sx={{ mt: "auto", mb: "auto" }}>
              <Typography variant="h3" component="h1" sx={{ mb: "30px" }}>
                GraphiQL App
              </Typography>
              <Typography sx={{ maxWidth: "700px", mb: "30px" }}>
                {t("graphFirstPart")}{" "}
                {
                  <Link href="https://rs.school/index.html" underline="none">
                    RSSchool
                  </Link>
                }
                , {t("graphSecondPart")}
              </Typography>
              {user ? (
                <Button variant="contained" component={ReactLink} to="/graph">
                  {t("start")}
                </Button>
              ) : (
                <Button variant="contained" component={ReactLink} to="/auth">
                  {t("signIn")}
                </Button>
              )}
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
      <Paper
        className="team"
        component="section"
        sx={{ height: "80vh" }}
        elevation={8}
      >
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
            sx={{ textAlign: "center", mb: "40px" }}
          >
            {t("team")}
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <PersonCard image={AlexPhoto} name={`${t("Alex")}`} />
            </Grid>
            <Grid item xs={4}>
              <PersonCard image={RifatPhoto} name={`${t("Rifat")}`} />
            </Grid>
            <Grid item xs={4}>
              <PersonCard image={JeniaPhoto} name={`${t("Yaheni")}`} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};
export default Welcome;
