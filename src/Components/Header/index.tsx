import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  SvgIcon,
  Toolbar,
} from "@mui/material";
import { ReactComponent as GraphIcon } from "../../assets/icon/graphql.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: `${scroll ? `64px` : `80px`}`,
            transition: `all 0.4s`,
          }}
        >
          <Link to="/" style={{ marginRight: "auto", flex: "0 0 auto" }}>
            <SvgIcon
              component={GraphIcon}
              inheritViewBox
              sx={{
                width: "30px",
                height: "30px",
                mr: "auto",
                flex: "0 0 auto",
              }}
            />
          </Link>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            color="inherit"
          >
            <Button color="inherit">Sign In</Button>
            <Button color="inherit">Sign Up</Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
