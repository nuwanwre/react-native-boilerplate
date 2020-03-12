import React from "react";
import { Text } from "react-native";

import { ITestAtom } from "./TestAtom.interface";

import { TestAtomStyled } from "./styles";

export const TestAtom: React.FC<ITestAtom> = ({ filled }) => {
    return (
        <TestAtomStyled filled={filled}>
            <Text>Test Button</Text>
        </TestAtomStyled>
    )
}