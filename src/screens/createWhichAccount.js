import React from "react";
import Dialogue from "../components/popup";
import { Stack, Typography } from "@mui/material";
import MyButtons from "../components/button";
import { useMediaQuery } from "@material-ui/core";


export const TopNav = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
      }}
    >
      <Typography>Logo</Typography>
      {/* <MyButtons text="back" startIcon={<ArrowBackIosIcon />} /> */}
    </Stack>
  );
};

const CreateWhichAccount = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");

  const Heading = () => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          overflow: isNonMobileScreen ? "hidden" : "hidden",
          paddingTop: 5,
        }}
      >
        <Typography
          fontSize={12}
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          Which account will you like to Create
        </Typography>
      </Stack>
    );
  };

  const Body = () => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          overflow: "hidden",
          paddingBottom: isNonMobileScreen ? 10 : 5,
          paddingLeft: isNonMobileScreen ? 25 : 10,
          paddingRight: isNonMobileScreen ? 25 : 10,
        }}
      >
        <Stack spacing={2}>
          <MyButtons text="User Account" width={300} />
          <MyButtons text="Voucher Merchant" width={300} />
        </Stack>
      </Stack>
    );
  };

  return <Dialogue body={Body()} topnav={TopNav()} />;
};

export default CreateWhichAccount;
