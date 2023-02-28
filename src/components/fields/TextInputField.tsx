import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

export interface TextInputFieldProps extends OutlinedInputProps {
  name: string;
  error: boolean;
}

const TextInputField = ({
  name,
  label,
  error,
  id,
  ...props
}: TextInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel color={error ? "error" : "primary"} htmlFor={id}>
              {label}
            </InputLabel>
            <OutlinedInput
              id={id}
              onChange={onChange}
              value={value}
              color={error ? "error" : "primary"}
              label={label}
              {...props}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default TextInputField;
