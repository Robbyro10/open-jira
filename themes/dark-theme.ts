import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#50EEFF'
    },
    secondary: {
      main: '#FF9242'
    },
    error: {
      main: red.A400
    }
  },

  components: {
    MuiAppBar: {
      defaultProps:{
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#B55D1B',
        }
      }

    }
  }
});