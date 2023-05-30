import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function MyButtons({
  text,
  width,
  onClick,
  startIcon,
  endIcon,
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        backgroundColor: "blue",
        width: width,
      }}
    >
      <Typography
        style={{ textTransform: "capitalize" }}
        variant="button"
        component="span"
      >
        {text}
      </Typography>
    </Button>
  );
}
