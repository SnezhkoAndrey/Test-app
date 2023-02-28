import { useState } from "react";
import { useAppDispatch } from "../../../hooks/dispatchSelectorHooks";
import { setAuthData } from "../../../redux/authSlice";
import { Button, Menu, Typography, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import MenuLayout from "./MenuLayout";

const HeaderProfileMenu = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );

  const openProfile = Boolean(anchorElProfile);

  const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const getAuth = (complete: boolean) => {
    dispatch(setAuthData(complete));
  };

  const logout = () => {
    localStorage.clear();
    getAuth(false);
  };
  return (
    <>
      <MenuLayout
        childButton={<AccountCircle />}
        childMenuTop={
          <NavLink to={"/profile"}>
            <MenuItem onClick={handleCloseProfile}>
              <Typography variant="h6" component="div">
                {t("header_profile")}
              </Typography>
            </MenuItem>
          </NavLink>
        }
        childMenuBottom={
          <MenuItem onClick={handleCloseProfile}>
            <Typography onClick={logout} variant="h6" component="div">
              {t("header_logout")}
            </Typography>
          </MenuItem>
        }
        anchorEl={anchorElProfile}
        open={openProfile}
        handleClick={handleClickProfile}
        handleClose={handleCloseProfile}
      />
      {/* <Button
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
      </Menu> */}
    </>
  );
};

export default HeaderProfileMenu;
