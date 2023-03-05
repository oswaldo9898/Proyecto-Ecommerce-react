import './styles.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "./../../context/auth";
import { useContext } from 'react';
import { UsersService } from './../../services/auth.js';


const AccountWidget = () => {
    const navigate = useNavigate();
    const { usuarioLogin, setUsuarioLogin} = useContext(AuthContext);


    const cerrarSesion = () => {
        UsersService.signOutUser().then((datos) => {
            setUsuarioLogin(false);
            navigate('/')
        });
    }



    return <>
        <div className="centrarContenido accountWidget">
            <div className="iconCuenta">
                <i className="fa-solid fa-user"></i>
            </div>

            <div className="miCuenta">
                <li>
                    {usuarioLogin ? 
                    <>
                        <div className='nav_link' >
                        Mi cuenta
                        </div>
                        <ul>
                            <li><NavLink to="/orders">Mis Ordenes</NavLink></li>
                            <li onClick={cerrarSesion}>Cerrar Sesión</li>
                        </ul>
                    </> : 
                    <>
                    <NavLink className='nav_link' to={`/account/login`}>
                        Iniciar sesión
                    </NavLink>
                    </>}
                </li>
            </div>

        </div>
    </>
}

export { AccountWidget }