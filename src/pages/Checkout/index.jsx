import { Brief } from "../../components/Brief";
import { Payment } from "../../components/Payment";
import { productsService } from './../../services/productService.js';
import { CartContext, AuthContext } from '../../context';
import { notificationSuccess } from "../../utils.js";
import { useContext} from "react";
import './styles.css';

const Checkout = () => {
    const { cart, clear } = useContext(CartContext);
    const { datosUsuario } = useContext(AuthContext);

    const realizarPago = (user) => {
        const productsCart = []
        cart.forEach(element => {
            productsCart.push({
                price: element.product.price,
                product: element.product.title,
                quantity: element.quantity
            })
        });        
        let orden = {
            uidUser: datosUsuario.uid,
            estado: "Generada",
            fecha: new Date().getTime(),
            items: productsCart,
            user
        }
        productsService.insertOrder(orden).then((datos) => {
            clear();
            notificationSuccess('El proceso de pago se realizo');
        });
    }


    return(
        <div className="carritoContainer">
            <div className='encabezado'>
                <div className='tituloPrincipal'>
                    <h1>CARRITO DE COMPRA</h1>
                </div>
            </div>
            <div className='cartList'>
                <div className="detalleProducto">
                    <Brief />
                </div>
                <div className="detallePago">
                    <Payment realizarPago={realizarPago}/>
                </div>
            </div>
        </div>
    )
}

export { Checkout }