import { DefaultTheme } from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const theme: DefaultTheme = {
    colors: {
        primary: "#ffffff",
        secondary: "#000000",
    },
    dimensions: {
        screenWidth,
        screenHeight,
    },
};

export { theme };
