import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Container, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

const drawerBleeding = 0;

interface Props {
  setVariables: Dispatch<SetStateAction<string>>;
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

const DEF_VALUE = `{
  "page": 1,
  "filter": {
    "name": "morty"
  }
}`;

export default function VariablesField(props: Props) {
  const { window } = props;
  const [open, setOpen] = useState(false);
  //const [value, setValue] = useState("");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
      <Box sx={{ textAlign: "left", pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Variables</Button>
      </Box>
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
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="enter request"
                  multiline
                  minRows={9}
                  variant="outlined"
                  //defaultValue={DEF_VALUE}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    props.setVariables(event.target.value);
                  }}
                />
              </div>
            </Box>
          </Container>
        </StyledBox>
        {/* <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox> */}
      </SwipeableDrawer>
    </Root>
  );
}
