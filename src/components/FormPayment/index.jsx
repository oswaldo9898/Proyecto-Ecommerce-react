import { Button } from '../Button';
import { notificationError } from "../../utils.js";
import './styles.css'

const FormPayment = ({realizarPago, usuarioLogin}) => {
    
    const validarForm = (e) => {
        e.preventDefault();
        const frmProducto = document.getElementById('formPayment');
        const nombres = e.target.inputNameForm.value;
        const apellidos = e.target.inputLastnameForm.value;
        const telfono = e.target.inputTelForm.value;
        const direccion = e.target.inputAdressForm.value;
        const email = e.target.inputEmailForm.value;
        const emailRepit = e.target.inputEmailRepitForm.value;

        if(email === emailRepit ){
            let user = {
                nombres,
                apellidos,
                telfono,
                direccion,
                email
            }
            realizarPago(user);
            frmProducto.reset()
        }else {
            notificationError('El correo electrónico no coincide')
        }
    }

    return <>
    <div className='cabeceraPago'>
            <h3>REALIZAR PAGO</h3>
            <p>Por favor, ingrese los datos para procesar su pago</p>
            </div>
            <form onSubmit={validarForm} id='formPayment'>
            <div>
                <label htmlFor="inputNameForm">Nombres</label>
                <input type="text" 
                className="form-control form-control-sm" 
                id='inputNameForm'
                required/>
            </div>
            <div>
                <label htmlFor="inputLastnameForm">Apellidos</label>
                <input type="text"
                className="form-control form-control-sm" 
                id='inputLastnameForm'
                required/>
            </div>
            <div>
                <label htmlFor="inputTelForm">Télefono</label>
                <input type="tel" 
                className="form-control form-control-sm" 
                id='inputTelForm'
                required/>
            </div>
            <div>
                <label htmlFor="inputAdressForm">Dirección</label>
                <input type="text"
                className="form-control form-control-sm" 
                id='inputAdressForm'
                required/>
            </div>
            <div>
                <label htmlFor="inputEmailForm">Correo electronico</label>
                <input type="email" 
                className="form-control form-control-sm"
                id='inputEmailForm'
                aria-describedby="emailHelp" 
                required/>
            </div>
            <div>
                <label htmlFor="inputEmailRepitForm">Repetir correo electronico</label>
                <input type="email" 
                className="form-control form-control-sm"
                id='inputEmailRepitForm'
                aria-describedby="emailHelp" 
                required/>
            </div>
            <div>
            <Button classButton={usuarioLogin ? 'pagoButton' : ''} icono="fa-solid fa-money-bill" texto='HACER MI PAGO' deshabilitado={!usuarioLogin} />
        </div>
        </form>
        
    </>
}

export { FormPayment }