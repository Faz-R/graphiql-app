import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container } from "@mui/material";

const Error = () => {
  return (
    <>
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        <Container>
          <h2>Error page content must be here</h2>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Error;
