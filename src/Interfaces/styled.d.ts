import 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
        };
        dimensions: {
            screenWidth: number;
            screenHeight: number;
        };
    }
}
