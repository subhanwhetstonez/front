import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#616161",
    },
    secondary: {
      main: "#ff3d00",
    },
    text: {
      disabled: "#ff2d2d",
      hint: "rgba(18,158,255,0.61)",
      primary: "rgba(98,98,98,0.66)",
      secondary: "rgba(76,76,76,0.54)",
    },
    divider: "rgba(0,0,0,0.13)",
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});
