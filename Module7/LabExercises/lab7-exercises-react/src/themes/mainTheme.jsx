// themes/googleTheme.jsx
import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: { main: "#1a73e8", contrastText: "#ffffff" }, // Google blue
    secondary: { main: "#5f6368", contrastText: "#ffffff" }, // Gray for secondary actions
    background: {
      default: "#f1f3f4", // Light gray background
      paper: "#f5f5f8",    // Card / Paper background
    },
    text: {
      primary: "#202124",
      secondary: "#5f6368",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: 14,
    h1: { fontSize: 32, fontWeight: 500 },
    h2: { fontSize: 28, fontWeight: 500 },
    h3: { fontSize: 24, fontWeight: 500 },
    button: { textTransform: "none" }, // No uppercase on buttons
  },
  shape: { borderRadius: 8 }, // Slightly rounded corners like Google
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a { color: #1a73e8; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `,
    },
    MuiButton: {
      defaultProps: { variant: "contained" },
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
          borderRadius: 8,
          "&:hover": { boxShadow: "0px 2px 4px rgba(0,0,0,0.2)" },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});