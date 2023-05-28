import { GitHub } from "@mui/icons-material";
import {
  Container,
  Grid,
  Link,
  Paper,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "../../assets/icon/rs_school.svg";

const Footer = () => {
  return (
    <Paper
      component="footer"
      color="primary"
      sx={{
        padding: "10px",
        flex: "0 0 auto",
        borderRadius: 0,
        width: "100%",
        boxShadow:
          "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))`,
        "@media (max-width: 500px)": {
          padding: "20px",
        },
      }}
      variant="elevation"
    >
      <Container>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            "@media (max-width: 500px)": {
              flexDirection: "column",
            },
          }}
          disableGutters
        >
          <Grid container columns={{ xs: 4, sm: 4, md: 12 }} spacing={2}>
            <Grid
              item
              xs={4}
              sm={2}
              md={4}
              sx={{
                "@media (max-width: 600px)": {
                  textAlign: "center",
                },
              }}
            >
              <Typography color="#fff">
                <GitHub
                  color="inherit"
                  fontSize="small"
                  sx={{ verticalAlign: "top" }}
                ></GitHub>
                {` `}
                <Link
                  href="https://github.com/Faz-R"
                  color="#fff"
                  underline="none"
                >
                  Fazar
                </Link>
                {` & `}
                <Link
                  href="https://github.com/DrabantBY"
                  color="#fff"
                  underline="none"
                >
                  DrabantBY
                </Link>
                {` & `}
                <Link
                  href="https://github.com/sneguroma"
                  color="#fff"
                  underline="none"
                >
                  SneguRoma
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sm={1}
              md={4}
              sx={{
                textAlign: "center",
                "@media (max-width: 600px)": {
                  textAlign: "center",
                },
              }}
            >
              <Typography color="#fff">2023</Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sm={1}
              md={4}
              sx={{
                textAlign: "end",
                "@media (max-width: 600px)": {
                  textAlign: "center",
                },
              }}
            >
              <Link
                href="https://rs.school/react/"
                color="#fff"
                underline="none"
              >
                <SvgIcon
                  component={Logo}
                  inheritViewBox
                  sx={{ width: "60px", mr: "auto" }}
                />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </Paper>
  );
};

export default Footer;
