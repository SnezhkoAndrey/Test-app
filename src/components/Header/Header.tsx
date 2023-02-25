import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HeaderNavLink from "./HeaderNavLink";
import LoginPage from "../LoginPage";
import HeaderNavMobile from "./HeaderNavMobile";
import { getAuthData, selectAuth } from "../../redux/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Box, MenuItem } from "@mui/material";
import LanguagesButton from "../LanguagesButton";
import { useTranslation } from "react-i18next";

const Header = () => {
  const widthWindow = window.innerWidth;

  const { t } = useTranslation();

  const auth = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();
  const getAuth = (complete: boolean) => {
    dispatch(getAuthData(complete));
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") as string);
    if (auth) {
      getAuth(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    getAuth(false);
  };

  const [anchorElLogin, setAnchorElLogin] = useState<null | HTMLElement>(null);
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );

  const openLogin = Boolean(anchorElLogin);
  const openProfile = Boolean(anchorElProfile);

  const handleClickLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLogin(event.currentTarget);
  };
  const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseLogin = () => {
    setAnchorElLogin(null);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {widthWindow < 600 ? (
          <HeaderNavMobile />
        ) : (
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={4}
            sx={{ flexGrow: 1 }}
          >
            <HeaderNavLink linkTo="/" name={t("header_home")} />
            <HeaderNavLink linkTo="/news" name={t("header_news")} />
          </Stack>
        )}
        {auth ? (
          <Box>
            <Button
              id="basic-buttonProfile"
              aria-controls={openProfile ? "basic-menuProfile" : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? "true" : undefined}
              onClick={handleClickProfile}
              color={"inherit"}
            >
              <AccountCircle />
            </Button>
            <Menu
              id="basic-menuProfile"
              anchorEl={anchorElProfile}
              open={openProfile}
              onClose={handleCloseProfile}
              MenuListProps={{
                "aria-labelledby": "basic-buttonProfile",
              }}
            >
              <NavLink to={"/profile"}>
                <MenuItem onClick={handleCloseProfile}>
                  <Typography variant="h6" component="div">
                    {t("header_profile")}
                  </Typography>
                </MenuItem>
              </NavLink>
              <MenuItem onClick={handleCloseProfile}>
                <Typography onClick={logout} variant="h6" component="div">
                  {t("header_logout")}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box>
            <Button
              id="basic-buttonLogin"
              aria-controls={openLogin ? "basic-menuLogin" : undefined}
              aria-haspopup="true"
              aria-expanded={openLogin ? "true" : undefined}
              onClick={handleClickLogin}
              color={"inherit"}
            >
              <Typography variant="h6" component="div" sx={{ fontSize: 17 }}>
                {t("header_login")}
              </Typography>
            </Button>
            <Menu
              id="basic-menuLogin"
              anchorEl={anchorElLogin}
              open={openLogin}
              onClose={handleCloseLogin}
              MenuListProps={{
                "aria-labelledby": "basic-buttonLogin",
              }}
            >
              <LoginPage />
            </Menu>
          </Box>
        )}
        <LanguagesButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
