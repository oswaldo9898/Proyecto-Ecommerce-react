import { useState, createContext, useEffect } from 'react';
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";

const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [usuarioLogin, setUsuarioLogin] = useState(false);
    const [datosUsuario, setDatosUsuario] = useState();


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (usuarioActivo) => {
            if(usuarioActivo){
                setDatosUsuario(usuarioActivo);
                setUsuarioLogin(true);
            }
        });
    },[]);



    return(
        <AuthContext.Provider 
        value = {{
            setUsuarioLogin,
            setDatosUsuario,
            usuarioLogin,
            datosUsuario
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider,  AuthContext};