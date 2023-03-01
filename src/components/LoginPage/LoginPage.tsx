import { Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitType } from "../../types/types";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/dispatchSelectorHooks";
import {
  authProccess,
  selectFailAuth,
  selectLoadingAuth,
} from "../../redux/authSlice";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PasswordField from "../fields/PasswordField";
import TextInputField from "../fields/TextInputField";

const LoginPage = () => {
  const { t } = useTranslation();

  const authFail = useAppSelector(selectFailAuth);
  const loading = useAppSelector(selectLoadingAuth);

  const dispatch = useAppDispatch();
  const setAuthProccess = (
    submitValue: SubmitType,
    onAuthSuccess: () => void
  ) => {
    dispatch(authProccess(submitValue, onAuthSuccess));
  };

  const navigate = useNavigate();

  const onAuthSuccess = () => {
    navigate("/profile");
  };

  const methods = useForm<SubmitType>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (submitValue: SubmitType) => {
    setAuthProccess(submitValue, onAuthSuccess);
  };

  return (
    <Stack direction={"column"} alignItems={"center"} sx={{ m: 2 }}>
      <FormProvider {...methods}>
        <TextInputField
          name="username"
          error={authFail}
          label={t("login_username")}
          key="username"
          id="username"
        />
        <PasswordField
          name="password"
          error={authFail}
          label={t("login_password")}
          key="password"
          id="password"
        />
        {authFail ? (
          <Typography variant="h6" component="p" fontSize={12} color="error">
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
      </FormProvider>
    </Stack>
  );
};

export default LoginPage;
