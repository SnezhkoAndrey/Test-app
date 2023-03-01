import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ margin: 2 }} spacing={2}>
      <Paper>
        <Stack spacing={2} sx={{ margin: 2 }}>
          <Typography
            variant="h5"
            component="p"
            fontSize={{ xs: 20, sm: 25, md: 25 }}
          >
            {t("home_title")}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            fontSize={{ xs: 15, sm: 20, md: 20 }}
          >
            {t("home_body")}
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default HomePage;
