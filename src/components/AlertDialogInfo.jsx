import React from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
function AlertDialogInfo({openDialog}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Dialog
    open={openDialog}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title" onClose={handleClose}>
      {"Información"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <p>Matriz de riesgos, Copyright . Summa consulting.</p>
        <p>Version Aplicativo WEB 4.3.9</p>
        <p>Fecha de compilación: 2022-08-05</p>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Ok</Button>
    </DialogActions>
  </Dialog>
  )
}

export default AlertDialogInfo