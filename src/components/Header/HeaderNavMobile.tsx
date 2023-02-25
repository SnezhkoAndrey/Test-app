import { useState } from "react";
import { Box, Button, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderNavLinkMobile from "./HeaderNavLinkMobile";
import { useTranslation } from "react-i18next";

const HeaderNavMobile = () => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color={"inherit"}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <HeaderNavLinkMobile
          linkTo="/"
          name={t("header_home")}
          handleClose={handleClose}
        />
        <HeaderNavLinkMobile
          linkTo="/news"
          name={t("header_news")}
          handleClose={handleClose}
        />
      </Menu>
    </Box>
  );
};

export default HeaderNavMobile;
