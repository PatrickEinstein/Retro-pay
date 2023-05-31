import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@material-ui/core/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SetPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  //state if password 8 characters
  const [eightCharacterPassword, seteightCharacterPassword] =
    React.useState(false);

  // state if password has uppercase
  const [upperCase, setUpperCase] = React.useState(false);

  // state if password has number
  const [number, setNumber] = React.useState(false);

  // state if password special characters
  const [specialXter, setSpecialXter] = React.useState(false);

  const onChange2 = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onChange = (e) => {
    setPassword(e.target.value);

    //checks if the password is more than 7 characters
    if (password.length > 7) {
      seteightCharacterPassword(true);
    } else {
      seteightCharacterPassword(false);
    }

    // checks if the password contains capital letter
    const checkForCapitalLetter = (str) => {
      const regex = /[A-Z]/; // Regex to match any capital letter

      return regex.test(str); // Returns true if the string contains a capital letter, false otherwise
    };
    console.log(checkForCapitalLetter(password));
    if (checkForCapitalLetter(password) === true) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }

    // checks if the password contains numbers
    const hasNumber = (str) => {
      return /\d/.test(str);
    };
    if (hasNumber(password)) {
      setNumber(true);
    } else {
      setNumber(false);
    }

    //checks if the password contains special characters
    const hasSpecialCharacters = (str) => {
      return /[!@#$%^&*(),.?":{}|<>]/.test(str);
    };
    if (hasSpecialCharacters(password)) {
      setSpecialXter(true);
    } else {
      setSpecialXter(false);
    }
  };

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
        Set Password
      </Typography>
      <Stack justifyContent="center">
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          Protect your wallet against intruders
        </Typography>
      </Stack>

      <FormControl sx={{ width: "auto", marginTop: 10 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <IconButton aria-label="toggle password visibility" edge="start">
                <LockIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Stack direction="row" spacing={2}>
        <Box
          style={{
            width: "auto",
            backgroundColor: eightCharacterPassword ? "powderblue" : "red",
            height: "auto",
            borderRadius: 8,
          }}
        >
          <Stack direction="row" justifyContent="space-around">
            {eightCharacterPassword ? <CheckCircleIcon /> : <CloseIcon />}
            <Typography
              sx={{
                color: eightCharacterPassword ? "black" : "white",
                paddingTop: 1,
                fontSize: 8,
                paddingLeft: 2,
                paddingRight: 2,
                fontSize: 8,
              }}
            >
              {" "}
              8 characters
            </Typography>
          </Stack>
        </Box>
        <Box
          style={{
            width: "auto",
            backgroundColor: upperCase ? "powderblue" : "red",
            height: "auto",
            borderRadius: 8,
          }}
        >
          <Stack direction="row">
            {upperCase ? <CheckCircleIcon /> : <CloseIcon />}
            <Typography
              sx={{
                color: upperCase ? "black" : "white",
                paddingTop: 1,
                fontSize: 8,
                paddingLeft: 2,
                paddingRight: 2,
                fontSize: 8,
              }}
            >
              {" "}
              upperCase
            </Typography>
          </Stack>
        </Box>
        <Box
          style={{
            width: "auto",
            backgroundColor: number ? "powderblue" : "red",
            height: "auto",
            borderRadius: 8,
          }}
        >
          <Stack direction="row">
            {number ? <CheckCircleIcon /> : <CloseIcon />}
            <Typography
              sx={{
                color: number ? "black" : "white",
                paddingTop: 1,
                fontSize: 8,
                paddingLeft: 2,
                paddingRight: 2,
                fontSize: 8,
              }}
            >
              {" "}
              number
            </Typography>
          </Stack>
        </Box>
        <Box
          style={{
            width: "auto",
            backgroundColor: specialXter ? "powderblue" : "red",
            height: "auto",
            borderRadius: 8,
          }}
        >
          <Stack direction="row">
            {specialXter ? <CheckCircleIcon /> : <CloseIcon />}
            <Typography
              sx={{
                paddingTop: 1,
                paddingLeft: 2,
                paddingRight: 2,
                fontSize: 8,
                color: specialXter ? "black" : "white",
              }}
            >
              {" "}
              alphanumeric
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <FormControl sx={{ width: "auto", marginTop: 10 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password2">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword2 ? "text" : "password"}
          onChange={onChange2}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword2}
                edge="end"
              >
                {showPassword2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <IconButton aria-label="toggle password visibility" edge="start">
                <LockIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Stack>
  );
};

export default SetPassword;
