import React, { createContext } from 'react';
import AppInterface from './appInterface';
const app: AppInterface = {
    emailAddress: '',
    password: '',
    SignInErrors: '',
    userToken: null,
    isLoading: true,
    isSignout: true

}
export const AuthContext = createContext(app);