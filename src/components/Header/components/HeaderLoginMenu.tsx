import { useState } from "react";
import { Button, Menu, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LoginPage from "../../LoginPage";
import MenuLayout from "./MenuLayout";

const HeaderLoginMenu = () => {
  const { t } = useTranslation();

  const [anchorElLogin, setAnchorElLogin] = useState<null | HTMLElement>(null);

  const openLogin = Boolean(anchorElLogin);

  const handleClickLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLogin(event.currentTarget);
  };

  const handleCloseLogin = () => {
    setAnchorElLogin(null);
  };

  return (
    <>
      <MenuLayout
        childButton={
          <Typography variant="h6" component="div" sx={{ fontSize: 17 }}>
            {t("header_login")}
          </Typography>
        }
        childMenuTop={<LoginPage />}
        anchorEl={anchorElLogin}
        open={openLogin}
        handleClick={handleClickLogin}
        handleClose={handleCloseLogin}
      />
      {/* <Button
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
      </Menu> */}
    </>
  );
};

export default HeaderLoginMenu;
