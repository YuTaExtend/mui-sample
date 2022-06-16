import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  /* ここにテーマを記述 */
  palette: {
    primary: { main: "#003764" },
    secondary: {
      main: "#fff",
      contrastText: grey[600],
    },
    divider: grey[600],
    background: {
      default: "#f9fafc",
    },
  },
  typography: {
    h1: {
      fontFamily: ["Petit Formal Script"].join(","),
    },
  },
});
