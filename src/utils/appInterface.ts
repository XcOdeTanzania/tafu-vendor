interface AppState {
    emailAddress: string,
    password: string,
    SignInErrors: any,
    userToken: string | undefined | null,
    isLoading: boolean,
    isSignout: boolean,

}

export default AppState;