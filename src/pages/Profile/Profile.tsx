import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ margin: 2 }} spacing={2}>
      <Paper>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          sx={{ margin: 3 }}
          spacing={2}
        >
          <img
            style={{ width: "150px", height: "150px", borderRadius: 5 }}
            src="https://pbs.twimg.com/profile_images/1036902004193468416/0HNlTPiD_400x400.jpg"
            alt="Profile"
          />
          <Stack direction={"column"} alignItems={"start"}>
            <Typography
              variant="h5"
              component="div"
              fontSize={{ xs: 20, sm: 25, md: 25 }}
            >
              {t("profile_name")}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={{ xs: 15, sm: 20, md: 20 }}
            >
              {t("profile_born")}
            </Typography>
            <Stack direction={"row"} spacing={1} alignItems={"start"}>
              <Typography
                variant="h6"
                component="div"
                fontSize={{ xs: 15, sm: 20, md: 20 }}
              >
                {t("profile_edu")}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                fontSize={{ xs: 15, sm: 20, md: 20 }}
                textAlign={"start"}
              >
                {t("profile_uni")}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Typography
                variant="h6"
                component="div"
                fontSize={{ xs: 15, sm: 20, md: 20 }}
              >
                {t("profile_pro")}
              </Typography>
              <Stack direction={"column"} alignItems={"start"}>
                <Typography
                  variant="h6"
                  component="div"
                  fontSize={{ xs: 15, sm: 20, md: 20 }}
                >
                  {t("profile_pro1")}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  fontSize={{ xs: 15, sm: 20, md: 20 }}
                >
                  {t("profile_pro2")}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
      <Paper>
        <Typography
          variant="h6"
          component="div"
          fontSize={{ xs: 15, sm: 20, md: 20 }}
          sx={{ margin: 2 }}
        >
          {t("profile_body")}
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Profile;
