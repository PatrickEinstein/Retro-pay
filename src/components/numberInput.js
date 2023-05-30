import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const NumberInput = () => {
  const [digits, setDigits] = React.useState(["", "", "", "", "", ""]);

  const handleChange = (index, value) => {
    const updatedDigits = [...digits];
    updatedDigits[index] = value;

    if (value !== "") {
      // Move focus to the next input field if available
      if (index < digits.length - 1) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        nextInput.focus();
      }
    }

    setDigits(updatedDigits);
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{
        paddingLeft: 2,
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      {digits.map((digit, index) => (
        <Grid item key={index}>
          <TextField
            id={`digit-${index}`}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            inputProps={{ min: 0, max: 9, maxLength: 1 }}
            variant="outlined"
            size="small"
            inputMode="numeric"
            style={{ width: "40px" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NumberInput;
