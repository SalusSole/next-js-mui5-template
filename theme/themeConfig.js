import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#e8584c",
        },
        secondary: {
            main: "#f49b5f",
        },
        success: {
            main: "#008726",
        },
        error: {
            main: "#C13327",
        },
        white: {
            main: "#ffffff",
        },
        light: {
            main: "#fbfbfa",
        },
        blue: {
            main: "#0f8a91",
        },
        gray: {
            main: "#4e4e4e",
        },
        bgOpacitiWhite: {
            main: "hsla(0,0%,100%,.7);",
        },
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
        h2: {
            fontFamily: '"Exo 2", sans-serif',
            fontWeight: 200,
        },
    },
    shadows: {
        4: "0 8px 32px 0 rgba(31,38,135,.041)",
    },
});

theme = responsiveFontSizes(theme);

export default theme;