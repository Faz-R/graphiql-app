import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  Paper,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as GraphIcon } from "../../assets/icon/graphql.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { MailOutline, Menu } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [user] = useAuthState(auth);
  const { i18n, t } = useTranslation();

  const [anchor, setAnchor] = useState(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setAnchor(false);
    };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

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
    <>
      <Drawer
        anchor={"right"}
        open={anchor}
        onClose={toggleDrawer()}
        sx={{
          gap: "2em",
        }}
      >
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

            <Button
              variant="contained"
              color="inherit"
              onClick={() => {
                navigate("/graph");
              }}
            >
              {t("mainPage")}
            </Button>
            <Button
              variant="contained"
              color="inherit"
              onClick={() => {
                logout();
              }}
            >
              {t("logout")}
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              variant="contained"
              component={Link}
              to={"/auth"}
            >
              {t("signIn")}
            </Button>
            <Button
              color="inherit"
              variant="contained"
              component={Link}
              to={"/register"}
            >
              {t("signUp")}
            </Button>
          </>
        )}
        <Button
          variant="contained"
          color="inherit"
          sx={{ ml: "20px" }}
          onClick={() => {
            changeLanguage(i18n.language === "en" ? "ru" : "en");
          }}
        >
          {i18n.language === "en" ? "ru" : "en"}
        </Button>
      </Drawer>
      <AppBar position="sticky">
        <Container>
          <Toolbar
            disableGutters
            sx={{
              height: `${scroll ? `64px` : `80px`}`,
              transition: `all 0.4s`,
            }}
          >
            <Menu onClick={() => setAnchor(true)} />
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
                    {t("mainPage")}
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => {
                      logout();
                    }}
                  >
                    {t("logout")}
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
                  {t("signIn")}
                </Button>
                <Button
                  color="inherit"
                  variant="contained"
                  component={Link}
                  to={"/register"}
                >
                  {t("signUp")}
                </Button>
              </ButtonGroup>
            )}
            <Button
              variant="contained"
              color="inherit"
              sx={{ ml: "20px" }}
              onClick={() => {
                changeLanguage(i18n.language === "en" ? "ru" : "en");
              }}
            >
              {i18n.language === "en" ? "ru" : "en"}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
