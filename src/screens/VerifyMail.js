import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import MyButtons from "../components/button";
import NumberInput from "../components/numberInput";

const VerifyMail = () => {
  return (
    <Stack
      spacing={1}
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
        Verify your email address
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
          Please enter the six digits OTP sent to the email you provided
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          paddingButtom: 1,
          paddingTop: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          example@gmail.com
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          Wrong email ? <a href="#">Change email</a>
        </Typography>
      </Stack>

      <NumberInput />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: 420,
          left: 180,
        }}
      >
        <Typography
          sx={{
            fontSize: 10,
            textAlign: "center",
          }}
        >
          {/* <IconButton>
            <Reload />
          </IconButton> */}
          Send code in{" "}
          <span
            style={{
              color: "blue",
            }}
          >
            0:30
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default VerifyMail;
