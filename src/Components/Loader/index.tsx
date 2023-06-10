import { Container, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        mt: "20%",
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Loader;
