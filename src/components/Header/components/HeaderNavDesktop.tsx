import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import HeaderNavLink from "./HeaderNavLink";

const HeaderNavDesktop = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={4}
      sx={{ flexGrow: 1 }}
    >
      <HeaderNavLink linkTo="/" name={t("header_home")} />
      <HeaderNavLink linkTo="/news" name={t("header_news")} />
    </Stack>
  );
};

export default HeaderNavDesktop;
