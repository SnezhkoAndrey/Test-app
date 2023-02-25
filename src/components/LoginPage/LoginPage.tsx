import { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { SubmitType } from "../../types/types";
import { Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  authProccess,
  selectFailAuth,
  selectLoadingAuth,
} from "../../redux/authSlice";
import { NavigateFunction, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const authFail = useAppSelector(selectFailAuth);
  const loading = useAppSelector(selectLoadingAuth);

  const dispatch = useAppDispatch();
  const getAuthProccess = (
    submitValue: SubmitType,
    navigate: NavigateFunction
  ) => {
    dispatch(authProccess(submitValue, navigate));
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { control, handleSubmit } = useForm<SubmitType>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (submitValue: SubmitType) => {
    getAuthProccess(submitValue, navigate);
  };

  return (
    <Stack direction={"column"} alignItems={"center"} sx={{ m: 2 }}>
      <Controller
        name={"username"}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <TextField
              sx={{ m: 1, width: "25ch" }}
              label={t("login_username")}
              variant="outlined"
              onChange={onChange}
              value={value}
              color={authFail ? "error" : "primary"}
            />
          );
        }}
      />
      <Controller
        name={"password"}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel
                color={authFail ? "error" : "primary"}
                htmlFor="outlined-adornment-password"
              >
                {t("login_password")}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={onChange}
                value={value}
                color={authFail ? "error" : "primary"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={t("login_password")}
              />
            </FormControl>
          );
        }}
      />
      {authFail ? (
        <Typography variant="h6" component="div" fontSize={12} color="error">
          {t("login_error")}
        </Typography>
      ) : null}
      <LoadingButton
        loading={loading}
        variant="contained"
        sx={{ m: 1, width: "25ch" }}
        onClick={handleSubmit(onSubmit)}
      >
        {t("header_login")}
      </LoadingButton>
    </Stack>
  );
};

export default LoginPage;
