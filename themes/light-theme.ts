import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: '#25A4B3'
      },
      secondary: {
        main: '#B55D1B'
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
      }
    }
});