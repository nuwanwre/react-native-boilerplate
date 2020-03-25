import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@Definitions/Styled";
import { TestAtom } from "../../src/Components/Atoms";

storiesOf("TestAtom", module)
    .addDecorator((getStory: any) => (
        <ThemeProvider theme={theme}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                { getStory() }
            </View>
        </ThemeProvider>
    ))
    .add("Regular", () => (
        <TestAtom filled={false}/>
    ))
    .add("Filled", () => (
        <TestAtom filled/>
    ));