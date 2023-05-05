import { Container, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "10%",
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Loader;
