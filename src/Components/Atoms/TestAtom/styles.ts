import styled from "styled-components/native";

export const TestButtonStyled = styled.TouchableOpacity`
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 1px;
    border-radius: 3px;
    padding: 2px 5px 2px 5px;
`;

