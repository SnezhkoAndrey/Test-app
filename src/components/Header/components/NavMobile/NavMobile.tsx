import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderNavLinkMobile from "./NavLinkMobile";
import { useTranslation } from "react-i18next";
import MenuLayout from "../MenuLayout";
import useMenu from "../../../../hooks/useMenu";

const HeaderNavMobile = () => {
  const { t } = useTranslation();

  const { open, anchorEl, handleClick, handleClose } = useMenu();

  return (
    <Box>
      <MenuLayout
        buttonElement={<MenuIcon />}
        anchorEl={anchorEl}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
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
      </MenuLayout>
    </Box>
  );
};

export default HeaderNavMobile;
