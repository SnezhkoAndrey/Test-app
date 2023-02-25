import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const LanguagesButton = () => {
  const [languages, setLanguages] = useState(true);

  const { i18n } = useTranslation();

  useEffect(() => {
    const language = languages ? "en" : "uk";
    i18n.changeLanguage(language);
  }, [languages]);

  return (
    <Button
      onClick={() => {
        setLanguages((prev) => !prev);
      }}
      variant="text"
      color="inherit"
      title={languages ? "English" : "Українська"}
    >
      <LanguageIcon />
    </Button>
  );
};

export default LanguagesButton;
