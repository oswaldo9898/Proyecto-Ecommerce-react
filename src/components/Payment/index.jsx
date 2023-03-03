import { Button } from '../Button';
import './styles.css';


const Payment = ({realizarPago}) => {


    return <>
    <div className="iformacionPago">
        <div className='cabeceraPago'>
            <h3>REALIZAR PAGO</h3>
            <p>Por favor, ingrese los datos solicitados para procesar su pago</p>
        </div>
        <form>
            <div>
                <label htmlFor="">Nombres</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Apellidos</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Télefono</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Correo electronico</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Repetir correo electronico</label>
                <input type="text" />
            </div>
        </form>
        <div>
            <Button handle={realizarPago} classButton='pagoButton' icono="fa-solid fa-money-bill" texto='HACER MI PAGO'/>
        </div>
    </div>



    </>
    
}

export { Payment }