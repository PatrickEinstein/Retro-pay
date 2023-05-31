import React from "react";
import Dialogue from "../components/popup";
import { Stack, Typography } from "@mui/material";
import MyButtons from "../components/button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import { pink } from "@mui/material/colors";
import { useMediaQuery } from "@material-ui/core";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CreateAccount = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");
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
        Create account
      </Typography>
      <Stack justifyContent="center">
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          {" "}
          let's get to know you
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          {" "}
          To get started, we need a few details to create your account and
          ensure security
        </Typography>
      </Stack>

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="patoctave99@gmail.com"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <Stack spacing={isNonMobileScreen ? 12 : 8}>
        <Stack
          direction="row"
          sx={{
            paddingButtom: 1,
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
            />
          </FormGroup>
          <Typography
            sx={{
              paddingTop: 2,
              fontSize: isNonMobileScreen ? 12 : 8,
            }}
          >
            I agree to Retropay's
            <span style={{ color: "blue" }}>Term & conditions </span> and{" "}
            <span style={{ color: "blue" }}> privacy policy</span>
          </Typography>
        </Stack>
        {/* <MyButtons text="continue" /> */}
        <Typography
          sx={{
            fontSize: 12,
            textAlign: "center",
          }}
        >
          Already have an account ? click <a href="#">here</a>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CreateAccount;
