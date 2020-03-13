import * as React from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider, DefaultTheme } from "styled-components/native";
import renderer from "react-test-renderer";

import { I18n } from "@I18n/index";
import { theme } from "@Definitions/Styled";

import { MockedProvider } from "@apollo/react-testing";
import { shallow } from "enzyme";

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
