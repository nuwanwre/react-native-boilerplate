async function initialState(): Promise<any> {
    return new Promise((resolve) => {
        resolve({
            todos: [],
            visibilityFilter: 'SHOW_ALL',
            networkStatus: {
                __typename: 'NetworkStatus',
                isConnected: false,
            } 
        })
    })
}

export default initialState;
