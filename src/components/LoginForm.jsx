import React from "react";
import infoIcon from "../assets/infoIcon.svg";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
//Switch

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Tooltip,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";

//TextField
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
//Dialogo
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//componentes
import IOSSwitch from "../components/IOSSwitch";
import CustomButton from "../components/CustomButton";
import AlertDialogInfo from "../components/AlertDialogInfo";
import TextFieldPassword from "./TextFieldPassword";

function LoginForm() {
  //const options = ["one", "two", "three"];

  const options = [
    { value: "1", label: "Uno" },
    { value: "2", label: "Dos" },
    { value: "3", label: "Tres" },
  ];

  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(event.target.value);
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

  const [open, setOpen] = React.useState(false);

  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [position, setPosition] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {};

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden  ">
      <form
        className={
          "p-10 max-h-max my-auto mx-auto rounded-md shadow-xl shadow-gray-600  ring-gray-500 lg:max-w-md  bg-slate-50"
        }
      >
        <div className="grid grid-flow-col mb-3 p-5">
          <div className="p-5">
            <img src="https://etica.resguarda.com/collahuasi/img/logo.png" />
          </div>
          <div>
            <p className="text-xs font-bold  text-center uppercase decoration-wavy">
              Matriz de Riesgos
            </p>
            <p className="text-xs text-center uppercase decoration-wavy">
              Ellipse 9 Dev
            </p>
          </div>
        </div>

        <div className="w-72 flex  m-auto">
          <FormControl sx={{ minWidth: 288 }} size="small">
            <TextField
              className="p-1.5 w-full mb-2 rounded-md border-opacity-5 border-2"
              id="input-with-icon-textfield"
              label="Usuario"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
              placeholder="Ingresa tu usuario"
              autoFocus
              onChange={(e) => console.log(e.target.value)}
            />
          </FormControl>
        </div>

        <div className="pt-5 w-72 flex  m-auto">
          <FormControl sx={{ minWidth: 288 }} size="small">
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
           
            />
          </FormControl>
        </div>
        <div className="pt-5 w-72  m-auto">
          <FormControl sx={{ minWidth: 288 }} size="small">
            <InputLabel id="demo-select-small">Posicion</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Posicion"
              onChange={handleChangeAge}
              displayEmpty
              required
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="p-2  m-auto">
          <div className="my-1.5 align-text-bottom flex justify-start ">
            <IOSSwitch labelSwitch="Recordar" />
          </div>
        </div>
        <div className=" text-slate-800 grid grid-cols-2 ">
          <div className="">
            <Tooltip title="Informacion">
              <IconButton aria-label="Info" onClick={handleClickOpen}>
                <InfoIcon color="info" />
              </IconButton>
            </Tooltip>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" onClose={handleClose}>
                {"Información"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography>
                    Matriz de riesgos, Copyright . Summa consulting.
                  </Typography>
                  <Typography>Version Aplicativo WEB 4.3.9</Typography>
                  <Typography>Fecha de compilación: 2022-08-05</Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="flex  justify-end">
            <button className="bg-green-700 px-3 py-1 text-white rounded-md hover:bg-green-600 shadow-slate-500" >
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
