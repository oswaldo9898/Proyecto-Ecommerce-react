import { NavLink,useNavigate } from "react-router-dom";
import { UsersService } from './../../services/auth.js';
import { useState } from "react";
import { notificationSuccess, notificationError } from "../../utils.js";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister ] = useState(false)

  const registroHandler = (e) => {
    e.preventDefault();
    setRegister(true);

    const nombres = e.target.InputName.value;
    const apellidos = e.target.InputLastName.value;
    const email = e.target.InputEmail.value;
    const password = e.target.InputPassword.value;

    UsersService.registerUser(email, password).then((datos) => {
      if(datos){
        let user = {
          nombres,
          apellidos,
          email,
          uid: datos.user.uid
        }
        UsersService.insertUser(user).then((datos) => {
          setRegister(false);
          notificationSuccess('Cuenta creada con exito');
          navigate('/')
        })
      }else{
          setRegister(false);
          notificationError('Ocurrio un error intentelo nuevamente');
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
                  disabled={register}
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
