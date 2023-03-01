import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LoginPage from "../../LoginPage";
import MenuLayout from "./MenuLayout";
import useMenu from "../../../hooks/useMenu";

const HeaderLoginMenu = () => {
  const { t } = useTranslation();

  const { open, anchorEl, handleClick, handleClose } = useMenu();

  return (
    <MenuLayout
      buttonElement={
        <Typography variant="h6" component="p" sx={{ fontSize: 17 }}>
          {t("header_login")}
        </Typography>
      }
      anchorEl={anchorEl}
      open={open}
      handleClick={handleClick}
      handleClose={handleClose}
    >
      <LoginPage />
    </MenuLayout>
  );
};

export default HeaderLoginMenu;
