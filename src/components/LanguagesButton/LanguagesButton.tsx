import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const LanguagesButton = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <Select
          value={language}
          onChange={handleChange}
          sx={{
            color: "#fff",
            ".MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"uk"}>Українська</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguagesButton;
