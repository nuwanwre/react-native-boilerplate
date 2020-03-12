// #region Global Imports
import * as React from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider, DefaultTheme } from "styled-components/native";
import renderer from "react-test-renderer";
// #endregion Global Imports

// #region Local Imports
import { I18n } from "@I18n/index";
import { theme } from "@Definitions/Styled";
// #endregion Local Imports

// Configuration for Apollo Client
// import { getApolloClient, TCacheShape } from "@Graphql";
// import { ApolloProvider } from '@apollo/react-hooks';
import { MockedProvider } from "@apollo/react-testing";

import { shallow } from "enzyme";

// <MockedProvider addTypename={false}>
                // {/* <I18nextProvider i18n={I18n}>
                //     <ThemeProvider theme={theme}>{child}</ThemeProvider>
                // </I18nextProvider> */}
                // </MockedProvider>

export async function renderWithProviders(child: React.ReactElement) {
    const wrapper: any = shallow(<ThemeProvider theme={theme}>{child}</ThemeProvider>);

    return renderer
        .create(
            wrapper
        )
        .toJSON();
}

export const shalloWithTheme = (tree: any) => {
    const context = shallow(
        <MockedProvider addTypename={false}>
            <I18nextProvider i18n={I18n}>
                <ThemeProvider theme={theme} />
            </I18nextProvider>
        </MockedProvider>
    )
    .instance()

    return shallow(tree, { context });
}
