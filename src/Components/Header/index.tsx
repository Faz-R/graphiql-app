import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as GraphIcon } from "../../assets/icon/graphql.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { MailOutline } from "@mui/icons-material";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
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
          {user ? (
            <>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                  mr: "20px",
                }}
              >
                <MailOutline></MailOutline>
                {user.email}
              </Typography>
              <ButtonGroup
                variant="text"
                aria-label="text button group"
                color="inherit"
              >
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    navigate("/graph");
                  }}
                >
                  Main Page
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    logout();
                  }}
                >
                  Log Out
                </Button>
              </ButtonGroup>
            </>
          ) : (
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              color="inherit"
            >
              <Button
                color="inherit"
                variant="contained"
                component={Link}
                to={"/auth"}
              >
                Sign In
              </Button>
              <Button
                color="inherit"
                variant="contained"
                component={Link}
                to={"/register"}
              >
                Sign Up
              </Button>
            </ButtonGroup>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
