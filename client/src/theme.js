import { extendTheme } from "@chakra-ui/react";
import "@fontsource/spartan";
const colors = {
    primary: '#d9b01c',
    secondary: '#cc9900',
    tertiary: '#b8860b',
    background: '#090909',
    backgroundSecondary: '#1c1c1c'
};

const fonts = {
    text: {
        Spartan: 'Spartan'
    }
}

const theme = extendTheme({
    colors,
    fonts
})

export default theme;