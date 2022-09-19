import React from "react";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Tooltip,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";


function TextFieldPassword() {

    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      
  return (
    <TextField
      className="p-1.5 w-full mb-2 rounded-md border-opacity-5 border-2"
      id="outlined-adornment-password"
      label="Contraseña"
      type={values.showPassword ? "text" : "password"}
      value={values.password}
      onChange={handleChange("password")}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
      required
      placeholder="Ingresa tu contraseña"
      autoFocus
    />
  );
}

export default TextFieldPassword;
