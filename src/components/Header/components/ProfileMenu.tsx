import { useAppDispatch } from "../../../hooks/dispatchSelectorHooks";
import { setAuthData } from "../../../redux/authSlice";
import { Typography, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import MenuLayout from "./MenuLayout";
import useMenu from "../../../hooks/useMenu";

const HeaderProfileMenu = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { open, handleClick, handleClose, anchorEl } = useMenu();

  const setAuth = (complete: boolean) => {
    dispatch(setAuthData(complete));
  };

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };
  return (
    <MenuLayout
      buttonElement={<AccountCircle />}
      anchorEl={anchorEl}
      open={open}
      handleClick={handleClick}
      handleClose={handleClose}
    >
      <NavLink to={"/profile"}>
        <MenuItem onClick={handleClose}>
          <Typography variant="h6" component="p">
            {t("header_profile")}
          </Typography>
        </MenuItem>
      </NavLink>
      <MenuItem onClick={handleClose}>
        <Typography onClick={logout} variant="h6" component="p">
          {t("header_logout")}
        </Typography>
      </MenuItem>
    </MenuLayout>
  );
};

export default HeaderProfileMenu;
