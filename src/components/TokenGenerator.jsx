import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function TokenGenerator({ setTokenData }) {
  const [formData, setFormData] = useState({
    noOfBlueTokens: "",
    noOfRedTokens: "",
    blueTokenPerRow: "",
    redTokenPerRow: "",
    blueTokenPrefix: "",
    redTokenPrefix: "",
  });

  const textFieldStylesBlue = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "var(--primary-color-blue)",
        borderWidth: "2px",
      },
    },
  };

  const textFieldStylesRed = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "var(--primary-color-red)",
        borderWidth: "2px",
      },
    },
  };

  const textFieldStylesButton = {
    "&.MuiButton-outlined": {
      borderColor: "var(--primary-color-purple)",
      borderWidth: "2px",
      color: "var(--primary-color-purple)",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateTokens = (e) => {
    e.preventDefault();

    // Update tokenData
    setTokenData(formData);
    //
  };

  return (
    <div className="tokenGeneratorContainer">
      <div className="formContainer">
        <div
          className="custom-paper"
          sx={{
            padding: 3,
            maxWidth: 800,
            margin: "auto",
          }}
        >
          <Typography
            sx={{ marginBottom: 4 }}
            variant="h5"
            align="center"
            gutterBottom
          >
            Token Generator Application
          </Typography>

          <form onSubmit={generateTokens}>
            <Box className="tokensForm" display="flex" gap={2}>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  sx={textFieldStylesBlue}
                  label="Number of blue tokens"
                  name="noOfBlueTokens"
                  onChange={handleChange}
                />

                <TextField
                  sx={textFieldStylesBlue}
                  label="Blue token prefix"
                  name="blueTokenPrefix"
                  onChange={handleChange}
                />

                <TextField
                  sx={textFieldStylesBlue}
                  label="Blue token per row"
                  name="blueTokenPerRow"
                  onChange={handleChange}
                />
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  sx={textFieldStylesRed}
                  label="Number of red tokens"
                  name="noOfRedTokens"
                  onChange={handleChange}
                />

                <TextField
                  sx={textFieldStylesRed}
                  label="Red token prefix"
                  name="redTokenPrefix"
                  onChange={handleChange}
                />

                <TextField
                  sx={textFieldStylesRed}
                  label="Red token per row"
                  name="redTokenPerRow"
                  onChange={handleChange}
                />
              </Box>
            </Box>

            <div className="mt-4 flex justify-between">
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  minWidth: "95px",
                  ...textFieldStylesButton,
                }}
              >
                Generate
              </Button>
              <Button
                onClick={() => setTokenData([])}
                type="reset"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  minWidth: "95px",
                  ...textFieldStylesButton,
                }}
              >
                Clear
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TokenGenerator;
