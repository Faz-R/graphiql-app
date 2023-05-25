import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Container, TextField, Grid } from "@mui/material";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

const drawerBleeding = 0;

interface Props {
  setOpenParent: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setVariables: Dispatch<SetStateAction<string>>;
  setHeaders: Dispatch<SetStateAction<string>>;
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

export default function VariablesField(props: Props) {
  const { window } = props;
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    props.setOpenParent(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(45% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}>
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}>
          <Container maxWidth="lg">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 4, width: "55ch" },
              }}
              noValidate
              autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={5} mr={10}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="enter variables"
                    multiline
                    minRows={9}
                    variant="outlined"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      props.setVariables(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={5} mr={10}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="enter headers"
                    multiline
                    minRows={9}
                    variant="outlined"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      props.setHeaders(event.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
