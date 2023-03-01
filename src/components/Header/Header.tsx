import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeaderNavMobile from "./components/NavMobile/NavMobile";
import { setAuthData, selectAuth } from "../../redux/authSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/dispatchSelectorHooks";
import HeaderLoginMenu from "./components/LoginMenu";
import HeaderProfileMenu from "./components/ProfileMenu";
import HeaderNavDesktop from "./components/NavDesktop/NavDesktop";
import { Stack } from "@mui/system";
import LanguagesButton from "../LanguagesButton";
import { useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const auth = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();
  const setAuth = (complete: boolean) => {
    dispatch(setAuthData(complete));
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") as string);
    if (auth) {
      setAuth(true);
    }
  }, []);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ maxWidth: "1150px", margin: "0 auto" }}
        >
          {isMobile ? <HeaderNavDesktop /> : <HeaderNavMobile />}
          <Stack direction={"row"}>
            <LanguagesButton />
            {auth ? <HeaderProfileMenu /> : <HeaderLoginMenu />}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
