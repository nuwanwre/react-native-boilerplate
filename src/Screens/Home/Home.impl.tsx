// #region Global Imports
import * as React from "react";
import { Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
// #endregion Global Imports

// #region Local Imports
import {
    Container,
    Middle,
    Centered,
} from "./styled";

import { TestAtom } from '@Components/Atoms';

// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "./Home.interface";
// #endregion Interface Imports

const pankodLogo = require("static/images/pankod-logo.png");

const styles = StyleSheet.create({
    stretch: {
        width: Dimensions.get("window").width - 50,
        resizeMode: "contain",
    },
});

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
    const { t, i18n } = useTranslation();

    return (
        <Container key={1}>
            <Middle>
                <Centered>
                    <TestAtom />
                </Centered>
            </Middle>
        </Container>
    );
};

export default Home;
