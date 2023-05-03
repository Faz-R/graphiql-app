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
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
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
          {isAuth ? (
            <Button
              color="inherit"
              onClick={() => {
                dispatch(removeUser());
              }}
            >
              Log Out
            </Button>
          ) : (
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              color="inherit"
            >
              <Button color="inherit" component={Link} to={"/auth"}>
                Sign In
              </Button>
              <Button color="inherit" component={Link} to={"/registration"}>
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
