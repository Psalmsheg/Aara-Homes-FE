/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import './globals.css';


export const theme = extendTheme({

    fonts: {
        heading: "'Satoshi', sans-serif",
        body: "'Satoshi', sans-serif",
    },

    breakpoints: {
        xs: "480px",
        sm: "600px",
        md: "770px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1536px"
    },

    colors:{
        brand:{
            primary: "#0654B0",
            secondary: "#f1b900",
            typography: "#212121"
        }
    }

});