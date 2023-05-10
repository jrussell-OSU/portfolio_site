import { createTheme } from "@mui/material";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#e4e5e6",
    },
    secondary: {
      main: "#6699CC",
      darker: "#979797",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
        fullwidth: "true",
        //color: "primary",
        variant: "contained",
      },
      sx: {
        //bgcolor: "secondary",
      },
    },
  },
});

export default buttonTheme;
