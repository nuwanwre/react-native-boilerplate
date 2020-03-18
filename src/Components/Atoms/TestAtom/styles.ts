import styled from "styled-components/native";

interface ITestAtomStyled {
    filled?: boolean;
}

export const TestAtomStyled = styled.TouchableOpacity<ITestAtomStyled>`
    border-color: ${({ filled, theme }) => filled ? theme.colors.secondary : "white"};
    border-width: 1px;
    border-radius: 3px;
    padding: 2px 5px 2px 5px;
`;
