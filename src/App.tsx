// #region Global Imports
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import codePush from "react-native-code-push";
import BootSplash from "react-native-bootsplash";
// #endregion Global Imports

// #region Local Imports
import RouterActions from "@Services/RouterActions";
import { theme } from "@Definitions/Styled";
import AppContainer from "@Router";
import { I18n } from "@I18n";
import { configureStore } from "@Redux";
import { SafeArea } from "@Styled";
// #region Local Imports

import { IS_STORYBOOK } from "react-native-dotenv";

// Storybook server
import StoryBookUIRoot from "../storybook";

// Configure Store
const store = configureStore({});

class App extends Component<{}> {
    public componentDidMount(): void {
        I18n.init();
        BootSplash.hide();
    }

    public render(): JSX.Element {
        if (IS_STORYBOOK)
            return (
                <StoryBookUIRoot />
            )
        else
            return (
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <SafeArea>
                            <AppContainer
                                ref={(ref: object) =>
                                    RouterActions.setNavigationReference(ref)
                                }
                            />
                        </SafeArea>
                    </ThemeProvider>
                </Provider>
            );
    }
}

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const exportedApp = IS_STORYBOOK ? App : codePush(codePushOptions) (App);

export default exportedApp;

