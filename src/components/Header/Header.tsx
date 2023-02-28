import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeaderNavMobile from "./components/HeaderNavMobile";
import { setAuthData, selectAuth } from "../../redux/authSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/dispatchSelectorHooks";
import HeaderLoginMenu from "./components/HeaderLoginMenu";
import HeaderProfileMenu from "./components/HeaderProfileMenu";
import HeaderNavDesktop from "./components/HeaderNavDesktop";
import { Stack } from "@mui/system";
import LanguagesButton from "../LanguagesButton";

const Header = () => {
  const widthWindow = window.innerWidth;

  const isMobile = widthWindow < 600;

  const auth = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();
  const getAuth = (complete: boolean) => {
    dispatch(setAuthData(complete));
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") as string);
    if (auth) {
      getAuth(true);
    }
  }, []);

  return (
    <AppBar position="sticky">
      <Toolbar>
        {isMobile ? <HeaderNavMobile /> : <HeaderNavDesktop />}
        <Stack direction={"row"}>
          <LanguagesButton />
          {auth ? <HeaderProfileMenu /> : <HeaderLoginMenu />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
