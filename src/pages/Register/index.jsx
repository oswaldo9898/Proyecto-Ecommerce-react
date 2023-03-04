import { NavLink } from "react-router-dom";
import { UsersService } from './../../services/auth.js';
import { toast } from 'react-hot-toast';

const Register = () => {



  const registroHandler = (e) => {
    e.preventDefault();
    const email = e.target.InputEmail.value;
    const password = e.target.InputEmail.value;
    UsersService.registerUser(email, password).then((datos) => {
      if(datos){
        console.log(datos)
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
            <h3 className="card-title text-center">
              Crear Nueva Cuenta
            </h3>
            <div className="card-text">
              <form onSubmit={registroHandler}>
                <div className="form-group">
                  <label htmlFor="InputName">Nombres</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="InputName"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputLastName">Apellidos</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="InputLastName"
                    required
                  />
                </div>
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
                  Registrarse
                </button>

                <div className="sign-up">
                  ¿Ya tienes una cuenta?{" "}
                  <NavLink className="nav_link" to={`/account/login`}>
                    Iniciar sesión
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

export { Register };
