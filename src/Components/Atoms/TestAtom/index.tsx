import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { TestButtonStyled } from "./styles";

export const TestAtom: React.FC = () => {
    return (
        <TestButtonStyled>
            <Text>Test Button</Text>
        </TestButtonStyled>
    )
}