import React, { useEffect, createRef } from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '@Definitions/Styled';
import Home from '@Screens/Home/Home.impl';
import RouterActions from '@Services/RouterActions';

export const navigationRef = createRef<NavigationContainerRef>();

const Stack = createStackNavigator();

export const rootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: theme.colors.primary,
                }}
            />
        </Stack.Navigator>
    );
};

export const AppContainer = () => {
    useEffect(() => {
        RouterActions.setNavigationReference(navigationRef);
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            {rootStack()}
        </NavigationContainer>
    );
};
