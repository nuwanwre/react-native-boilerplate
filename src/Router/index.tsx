// Global Imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Local Imports
import { theme } from '@Definitions/Styled';
import Home from '@Screens/Home/Home.impl';

const AppStackNavigator = createStackNavigator({
    Home: {
        navigationOptions: () => ({
            title: 'Home',
            headerStyle: {
                backgroundColor: theme.colors.primary,
            },
            headerTintColor: '#fff',
        }),
        screen: Home,
    },
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
