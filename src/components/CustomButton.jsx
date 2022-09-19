import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
function CustomButton({ name }) {

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[800]),
    backgroundColor: green[800],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));
  
  /*      
  return (
    <ColorButton>{name}</ColorButton>
  )
  */
  return (
    <button className="bg-green-800 px-3 py-1 text-white rounded-md hover:bg-green-700">
      Entrar
    </button>
  );
}

export default CustomButton;
