import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import MyButtons from "./button";
import Dialogue from "./popup";
import { Stack, Typography } from "@mui/material";
import CreateAccount from "../screens/createAccount";
import { Box } from "@mui/material";
import { useMediaQuery } from "@material-ui/core";
import VerifyMail from "../screens/VerifyMail";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const steps = [<CreateAccount />, <VerifyMail />, 3, 4];

const MySteppers = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");

  const nextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep((now) => now + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep((now) => now - 1);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 2,
        }}
      >
        <Typography>Logo</Typography>

        <MyButtons
          text="Back"
          startIcon={<ArrowBackIosIcon />}
          onClick={prevStep}
          disabled={activeStep === 0}
        />
      </Stack>
      <Stack
        justifyContent="center"
        sx={{
          height: "auto",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((_, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        {steps[activeStep]} {/* Render the component based on activeStep */}
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          top: 370,
          left: 40,
          width: "80%",
        }}
      >
        <MyButtons
          text="Continue"
          onClick={nextStep}
          disabled={activeStep === steps.length - 1}
        />
      </Stack>
    </>
  );
};

const Steppers = () => {
  return <Dialogue body={<MySteppers />} />;
};

export default Steppers;
