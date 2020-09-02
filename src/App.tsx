import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import codePush from 'react-native-code-push';
import BootSplash from 'react-native-bootsplash';
import { ApolloProvider, ApolloClient } from '@apollo/client';

import { theme } from '@Definitions/Styled';
import { IS_STORYBOOK } from 'react-native-dotenv';
import { AppContainer, navigationRef, rootStack } from '@Router';
import { I18n } from '@I18n';
import { SafeArea } from '@Styled';

import { getApolloClient, TCacheShape } from '@Apollo';
import StoryBookUIRoot from '../storybook';

const App: React.FC = () => {
    const [apolloClient, setApolloClient] = useState<
        ApolloClient<TCacheShape>
    >();

    useEffect(() => {
        I18n.init();
        BootSplash.hide();
        getApolloClient().then((c: TCacheShape) => setApolloClient(c));
    }, []);

    if (IS_STORYBOOK === 'true') {
        return <StoryBookUIRoot />;
    }

    if (!apolloClient) {
        return <Text>Loading...</Text>;
    }

    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
                <SafeArea>
                    <AppContainer />
                </SafeArea>
            </ThemeProvider>
        </ApolloProvider>
    );
};

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const exportedApp = IS_STORYBOOK ? App : codePush(codePushOptions)(App);

export default exportedApp;
