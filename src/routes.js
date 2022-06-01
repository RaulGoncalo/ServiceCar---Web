import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {Welcome} from './pages/Welcome'; 
import {Logon} from './pages/Logon'; 
import {Register} from './pages/Register';
import {ResetPassword} from './pages/ResetPassword';
import {Home} from './pages/Home';

import { AuthProvider, AuthContext } from './contexts/auth.js';


export function AppRoutes(){

    const Private = ({children}) => {
        const { authenticated, loading} = useContext(AuthContext)


        if(loading){
            return <div classeName= "loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to ="/logon"/>;
        }

        return children
    }

    
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element = {<Welcome/>}/>
                    <Route path="/logon" element = {<Logon/>}/>
                    <Route path="/register" element = {<Register/>}/>
                    <Route path="/resetPassword" element = {<ResetPassword/>}/>
                    
                    <Route
                        exact path ="/home" 
                        element = {
                                <Home/> 
                        } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}