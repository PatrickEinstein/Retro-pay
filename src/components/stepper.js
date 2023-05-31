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
import PersonalInfo from "../screens/personalInfo";
import SetPassword from "../screens/setPassword";
import Logo from "../assets/retro.png";
const steps = [
  <CreateAccount />,
  <VerifyMail />,
  <PersonalInfo />,
  <SetPassword />,
];

const MySteppers = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
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
        <img
          src={Logo}
          style={{
            height: 50,
            width: isNonMobileScreen?  100 : 50,
            objectFit: "contain",
          }}
        />
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
          top: 420,
          left: isNonMobileScreen? 55 : 60,
          width: isNonMobileScreen ? "80%" : "70%",
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
