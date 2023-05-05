import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
  Link,
} from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { REGEXP_PASSWORD } from "./constant";
import { Link as RouterLink } from "react-router-dom";

interface FormProps {
  title: string;
  sendData: (email: string, password: string) => void;
  isAuth?: boolean;
}

interface FormValues {
  email: string;
  password: string;
}

const Form: FC<FormProps> = ({ title, sendData, isAuth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: "onSubmit" });

  const onSubmit = (data: FormValues) => {
    sendData(data.email, data.password);
    console.log(data);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "40px",
        padding: "40px",
        gap: "30px",
        maxWidth: "500px",
        width: "100%",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" component="h2" sx={{ mb: "20px" }}>
        {title}
      </Typography>
      <TextField
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        sx={{ width: "100%" }}
        type="email"
        defaultValue="example@mail.com"
        autoComplete="email"
        {...register("email", { required: true })}
      />
      <FormControl sx={{ width: "100%" }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          error={!!errors.password?.message}
          defaultValue="qwerty1!"
          autoComplete="password"
          {...register("password", {
            required: true,
            pattern: {
              value: REGEXP_PASSWORD,
              message:
                "Minimum 8 symbols, at least one letter, one digit, one special character",
            },
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <FormHelperText>{errors.password?.message}</FormHelperText>
      </FormControl>
      {isAuth && (
        <Typography>
          Don't have an account?{" "}
          <Link component={RouterLink} to="/register" underline="none">
            Register
          </Link>{" "}
          now.
        </Typography>
      )}
      <Button
        type="submit"
        variant="outlined"
        sx={{ mt: "20px", width: "max-content" }}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default Form;
