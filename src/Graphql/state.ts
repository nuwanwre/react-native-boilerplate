const initialState = {
    tasks: [],
    visibilityFilter: 'SHOW_ALL',
    networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: false,
    },
};

export default initialState;
