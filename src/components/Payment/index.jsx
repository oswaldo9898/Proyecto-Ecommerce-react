import { Button } from '../Button';
import './styles.css';
import { AuthContext, CartContext } from '../../context';
import { useContext, useState, useEffect } from 'react';
import { FormPayment } from '../FormPayment';
import { useNavigate } from "react-router-dom";


const Payment = ({realizarPago}) => {
    const navigate = useNavigate();
    const { usuarioLogin } = useContext(AuthContext);
    const  { cart }  = useContext(CartContext);
    const [ activarButton, setActivarButton ] = useState(false);


    useEffect(()=>{
        if(cart.length > 0 && usuarioLogin)  {
            setActivarButton(true);
        }else{
            setActivarButton(false);
        }
    },[cart, usuarioLogin])


    const inicioSesion = () => {
        navigate('/account/login')
    }

    return <>
    <div className={usuarioLogin ? 'iformacionPago' : 'informacionInicioSesion'}>
        
        {usuarioLogin ? <>
            <FormPayment realizarPago={realizarPago} usuarioLogin={activarButton} />
        </> : 
        <>
        <div>Por favor inicie sesión para continuar con el proceso de pago</div>
        <Button handle={inicioSesion} classButton={!usuarioLogin ? 'pagoButton' : ''} icono="fa-solid fa-right-to-bracket" texto='Iniciar sesión' deshabilitado={usuarioLogin} />
        </>}
        
        
    </div>



    </>
    
}

export { Payment }