import React, { RefObject } from 'react';
import {
    DrawerActions,
    StackActions,
    NavigationContainerRef,
} from '@react-navigation/native';

let navigatorRef: NavigationContainerRef | null;

export const RouterActions = {
    setNavigationReference: (
        navigation: RefObject<NavigationContainerRef>
    ): void => {
        navigatorRef = navigation.current || null;
    },
    push: (screen: string, props: object = {}): void => {
        navigatorRef?.dispatch(StackActions.push(screen, props));
    },
    replace: (screen: string, props: object = {}): void => {
        navigatorRef?.dispatch(StackActions.replace(screen, props));
    },
    pop: (): void => {
        navigatorRef?.dispatch(StackActions.pop(1));
    },
    popToTop: (): void => {
        navigatorRef?.dispatch(StackActions.popToTop());
    },
    drawerToggle: (): void => {
        navigatorRef?.dispatch(DrawerActions.toggleDrawer());
    },
};

export default RouterActions;
