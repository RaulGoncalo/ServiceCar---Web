import React, {useState, createContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(async () =>{
        const reconveredUser = localStorage.getItem('user')

        if(reconveredUser){
            setUser(JSON.parse(reconveredUser))
        }

        setLoading(false);
    }, []);

    const login = async ({token, user}) =>{

        const loggedUser = user;
        const tokenStorage = token;
        
        setUser(loggedUser);

        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', JSON.stringify(tokenStorage));

        if(user)
            navigate('/home')
    };
    
    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        navigate('/')
    };
    
    return(
        <AuthContext.Provider
                    value = {{  
                        authenticated: !!user, user, loading, login, logout
                    }}
                >
            {children}
        </AuthContext.Provider>
    );
}