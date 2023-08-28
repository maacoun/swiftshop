import React, { createContext, useReducer, useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const CLEAR_ACCESS_TOKEN = "CLEAR_ACCESS_TOKEN";

const parseJwt = (token) => {
    try {
        return jwt_decode(token);
    } catch (e) {
        return null;
    }
};

const initialState = {
    accessToken: null,
    userId: null,
    profile: null,
    isUserLoggedIn: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            let tokenData = parseJwt(action.payload);
            return { ...state, accessToken: action.payload, userId: tokenData.sub, profile: tokenData, isUserLoggedIn: true }
        case CLEAR_ACCESS_TOKEN:
            return { ...state, accessToken: null, userId: null, profile: null, isUserLoggedIn: false }
    }
}

export const AuthContext = createContext(initialState);
export const AuthConsumer = AuthContext.Consumer;
export const AuthProvider = props => {
    const store = useReducer(
        reducer,
        initialState
    );
    return (
        <AuthContext.Provider value={store}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);