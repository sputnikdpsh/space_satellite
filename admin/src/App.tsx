import React, {createContext, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";

import {GetUsers} from "./models/GetUsers";
import Auth from "./pages/Auth";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Store from "./store/store";
import Header from "./components/Header";

interface StoreState {
    store: Store,
}

const store = new Store();

export const Context = createContext<StoreState>({
    store,
});

function App() {
    // const [isAuth, setIsAuth] = useState(false);
    // const [isLoading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     if (localStorage.getItem('auth')) {
    //         setIsAuth(true);
    //     }
    //     setLoading(false);
    // }, []);

    return (
        <Context.Provider value={
            {store}
        }>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </Context.Provider>
    )
}

export default observer(App);
