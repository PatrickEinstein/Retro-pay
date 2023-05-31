import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@material-ui/core";
import { TopNav } from "../screens/createWhichAccount";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialogue({ title, body }) {
  const [open, setOpen] = React.useState(true);
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      sx={{
        opacity: 0.8,
        height: "auto",
        marginBottom: "auto",
      }}
      transitionDuration={3000}
    >
      <DialogContent
        sx={{
          height: 500,
          overflow: "hidden",
          width: "auto%",
          marginBottom: "auto",
        }}
      >
        <DialogContentText id="alert-dialog-slide-description">
          {body}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
