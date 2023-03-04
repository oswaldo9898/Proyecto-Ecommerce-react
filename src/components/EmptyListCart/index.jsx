import { Button } from '../Button';
import { NavLink } from 'react-router-dom';
import './styles.css'

const EmptyListCart = () => {


    const regresarTienda = () => {
        <NavLink className='nav_link' to={`/`}></NavLink>
    }

    return <>
        <div className='carritoVacio'>
            <h3>Su Carrito Actualmente Está Vacío.</h3>
            <p>Antes de proceder al pago, debe agregar algunos productos a su carrito de compras. Encontrará muchos productos interesantes en nuestra página "Comprar".</p>
            <NavLink className='nav_link' to={`/`}>
                <Button  handle={regresarTienda} classButton='tiendaButton' icono="fa-solid fa-shop" texto='SEGUIR COMPRANDO' />
            </NavLink>
        </div>
    </>

}

export {EmptyListCart};