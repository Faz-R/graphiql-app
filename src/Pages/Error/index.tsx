import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main
        style={{
          flex: "1 0 auto",
          background: "url(/src/assets/img/graph-wash.png) repeat 50%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "30vh",
          }}
        >
          <Typography
            variant="h1"
            color="#e10098"
            sx={{
              textTransform: "capitalize",
              fontWeight: "700",
            }}
          >
            {t("oops")}!
          </Typography>
          <Typography variant="h4" component="p" sx={{ fontWeight: "300" }}>
            {t("errorTitle")}
          </Typography>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Error;
