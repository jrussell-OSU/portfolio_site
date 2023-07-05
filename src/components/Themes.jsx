import { createTheme } from "@mui/material";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#008F11",
    },
    secondary: {
      main: "#6699CC",
      darker: "#979797",
    },
    custom: {
      main: "#e4e5e6100",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
        fullwidth: "true",
        color: "primary",
      },
      sx: {
        //bgcolor: "secondary",
      },
    },
  },
});

export default buttonTheme;
