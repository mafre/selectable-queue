import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#111",
        },
        secondary: {
            main: "#0e1f47",
        },
        error: {
            main: "#850c0c",
        },
    },
    typography: {
        h5: {
            fontWeight: "bold",
        },
    },
});

export default theme;
