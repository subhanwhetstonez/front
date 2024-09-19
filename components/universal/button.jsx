"use client";
import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../theme";

function ButtonComp(props) {
  const { btnTxt, btnVarient, ...rest } = props;
  return (
    <ThemeProvider theme={theme}>
      <Button
        {...rest}
        variant={btnVarient}
        sx={{
          bgcolor: theme.palette.secondary.main,
          fontWeight: "600",
          width: "20%",
        }}
      >
        {btnTxt}
      </Button>
    </ThemeProvider>
  );
}

export default ButtonComp;
