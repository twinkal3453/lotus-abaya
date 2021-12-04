import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./step.css";

const steps = ["Address", "Payment"];

const StepLogin = () => {
  const [activeStep, setActiveStep] = useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="stepper__sec">
      <div className="container">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div className="stepper__main__es">
            {activeStep === 0 && (
              <React.Fragment>
                <div className="address__section">
                  <p className="shipping__name">
                    <i className="fas fa-shipping-fast"></i>Shipping Address
                  </p>
                  <form>
                    <div className="address__parent">
                      <div className="address__inputs">
                        <input type="text" placeholder="Email..." />
                        <input type="text" placeholder="Full Name..." />
                        <input type="text" placeholder="Street Address..." />
                        <input type="text" placeholder="City..." />
                      </div>
                      <div className="address__inputs">
                        <input type="text" placeholder="State..." />
                        <input type="text" placeholder="Zip / Postal Code..." />
                        <input type="text" placeholder="Country..." />
                        <input type="text" placeholder="Mobile..." />
                      </div>
                    </div>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <button
                        className="button__next__stepper"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1
                          ? "Finish"
                          : "Continue"}
                      </button>
                    </Box>
                  </form>
                </div>
              </React.Fragment>
            )}
            {activeStep === 1 && (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>Step 2</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <button
                    className="button__next__stepper"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                  </button>
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default StepLogin;
