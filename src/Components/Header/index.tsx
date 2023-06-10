import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
  SvgIcon,
  Toolbar,
  Typography,
  Link as MUILink,
} from "@mui/material";
import { ReactComponent as GraphIcon } from "../../assets/icon/graphql.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Close, MailOutline, Menu } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [user] = useAuthState(auth);
  const { i18n, t } = useTranslation();

  const [anchor, setAnchor] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
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
      setScroll(window.scrollY > 0);
    };
  }, []);

  return (
    <>
      <Drawer
        anchor="right"
        open={anchor}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "20px",
            paddingTop: "50px",
            alignItems: "center",
            gap: "0.7em",
            minWidth: "300px",
          },
        }}
      >
        <Close
          sx={{
            cursor: "pointer",
            alignSelf: "flex-start",
            position: "absolute",
            top: "15px",
            left: "15px",
          }}
          onClick={toggleDrawer}
        />
        {user ? (
          <>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <MailOutline />
              {user.email}
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <MUILink
              component={Link}
              to="/graph"
              underline="none"
              onClick={toggleDrawer}
            >
              {t("mainPage")}
            </MUILink>
            <MUILink
              underline="none"
              color="inherit"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                toggleDrawer;
                logout();
              }}
            >
              {t("logout")}
            </MUILink>
          </>
        ) : (
          <>
            <MUILink
              color="inherit"
              underline="none"
              component={Link}
              to={"/auth"}
              sx={{ cursor: "pointer" }}
              onClick={toggleDrawer}
            >
              {t("signIn")}
            </MUILink>
            <MUILink
              color="inherit"
              underline="none"
              component={Link}
              to={"/register"}
              sx={{ cursor: "pointer" }}
              onClick={toggleDrawer}
            >
              {t("signUp")}
            </MUILink>
          </>
        )}
        <Divider sx={{ width: "100%" }} />
        <MUILink
          underline="none"
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            changeLanguage(i18n.language === "en" ? "ru" : "en");
          }}
        >
          {t("translate")} {i18n.language === "en" ? "Русский" : "English"}
        </MUILink>
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
            <Menu
              onClick={() => setAnchor(true)}
              sx={{
                cursor: "pointer",
                "@media (min-width: 700px)": {
                  display: "none",
                },
              }}
            />
            <Toolbar
              disableGutters
              sx={{
                "@media (max-width: 700px)": {
                  display: "none",
                },
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
                    <MailOutline />
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
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
