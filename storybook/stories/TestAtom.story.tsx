import React from "react";
import { View } from "react-native";
import { TestAtom } from "../../src/Components/Atoms";
import { storiesOf } from "@storybook/react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@Definitions/Styled";

storiesOf("TestAtom", module)
    .addDecorator((getStory: any) => (
        <ThemeProvider theme={theme}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                { getStory() }
            </View>
        </ThemeProvider>
    ))
    .add("regular", () => (
        <TestAtom />
    ));