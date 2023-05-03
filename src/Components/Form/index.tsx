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
} from "@mui/material";
import { FC, useState } from "react";

interface FormProps {
  name: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ name, handleClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    >
      <Typography variant="h4" component="h2" sx={{ mb: "20px" }}>
        {name}
      </Typography>
      <TextField
        required
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        sx={{ width: "100%" }}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{ width: "100%" }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        {/* <FormHelperText>
        Minimum 8 symbols, at least one letter, one digit, one special
        character
      </FormHelperText> */}
      </FormControl>
      <Button
        type="submit"
        variant="outlined"
        sx={{ mt: "20px", width: "max-content" }}
        onClick={(e) => {
          e.preventDefault();
          handleClick(email, password);
        }}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default Form;
