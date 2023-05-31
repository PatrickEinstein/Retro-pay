import React from "react";
import Dialogue from "../components/popup";
import { Stack, Typography } from "@mui/material";
import TextField from "@material-ui/core/TextField";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PersonalInfo = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        paddingLeft: 4,
        paddingRight: 4,
      }}
    >
      <Typography
        fontSize={12}
        sx={{
          fontWeight: "bold",
          whiteSpace: "nowrap",
          color: "black",
          fontSize: 18,
        }}
      >
        Personal Information
      </Typography>
      <Stack justifyContent="center">
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          Please make sure the details are correct to verify your identity
        </Typography>
      </Stack>

      <TextField
        id="outlined-basic"
        label="First name"
        variant="outlined"
        placeholder="Enter your first name"
      />
      <TextField
        id="outlined-basic"
        label="Last name"
        variant="outlined"
        placeholder="Enter your last name"
      />
    </Stack>
  );
};

export default PersonalInfo;
