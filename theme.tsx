import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  /* ここにテーマを記述 */
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: grey[600],
        },
      },
    },
  },
  palette: { mode: "dark" },
});
