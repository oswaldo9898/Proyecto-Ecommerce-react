import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UsersService } from './../../services/auth.js';
import { AuthContext } from "./../../context/auth";
import { useContext } from "react";
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();

  const { setUsuarioLogin } = useContext(AuthContext);



  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.InputEmail.value;
    const password = e.target.InputEmail.value;
    
      UsersService.loginUser(email, password).then((datos) => {
        if(datos){
          setUsuarioLogin(true)
          console.log(datos)
          navigate('/')
        }else{
          toast.error('Datos incorrectos',
            {
                duration: 2000,
                position: 'bottom-right',
                style: {
                    border: '1px solid #666',
                    background: '#333',
                    color: '#fff'
                },
            }
          )
        }
      });
  }

  
  return (
    <>
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h3 className="card-title text-center">Iniciar sesión</h3>
            <div className="card-text">
              <form onSubmit={loginHandler}>
                <div className="form-group">
                  <label htmlFor="InputEmail">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="InputEmail"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputPassword">Contraseña</label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="InputPassword"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn botonSign btn-primary btn-block"
                >
                  Iniciar sesión
                </button>

                <div className="sign-up">
                  ¿No tienes una cuenta?{" "}
                  <NavLink className="nav_link" to={`/account/register`}>
                    Crear uno
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
