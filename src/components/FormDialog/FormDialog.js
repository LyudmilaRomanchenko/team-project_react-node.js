import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// import ButtonUnstyled from "@mui/base/ButtonUnstyled";

// import styles from "./styles";
// import TextField from "@mui/material/TextField";
import ButtonAddTransaction from "../ButtonAddTransaction";
// import Container from "../Container";
import Toggle from "../Toggle";
import ModalForm from "../ModalForm";

// const style = {
//   bgcolor: "#bca",

//   padding: "0",
//   margin: "0",
//   //   hight: "100hw",
// };

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonAddTransaction onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        {/* <Container> */}
        Добавить транзакцию
        <Toggle />
        {/* <TextField
            id="standard-basic"
            label="Комментарий"
            variant="standard"
          /> */}
        <ModalForm />
        {/* </Container> */}
      </Dialog>
    </div>
  );
}

//  {
//    /* <DialogTitle>Subscribe</DialogTitle> */
//  }
//  {
//    /* <DialogContent> */
//  }
//  {
//    /* <DialogContent sx={style}> */
//  }
//  {
//    /* <DialogContentText>
//             To subscribe to this website, please enter your email address here.
//             We will send updates occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           /> */
//  }
//  {
//    /* </DialogContent> */
//  }
//  {
//    /* <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button onClick={handleClose}>Subscribe</Button>
//           </DialogActions> */
//  }
