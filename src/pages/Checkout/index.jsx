import { Brief } from "../../components/Brief";
import { Payment } from "../../components/Payment";
import './styles.css';
import { productsService } from './../../services/productService.js';
import { useEffect, useContext,  useState} from "react";
import { CartContext } from '../../context';

const Checkout = () => {
    const { cart, clear } = useContext(CartContext);



    useEffect(() => {
        productsService.getAllOrders().then((datos) => {
            console.log(datos)
        });
    },[]);


    const realizarPago = () => {
        const productsCart = []
        cart.forEach(element => {
            productsCart.push({
                price: element.product.price,
                product: element.product.title,
                quantity: element.quantity
            })
        });        
        let orden = {
            estado: "Generada",
            fecha: new Date().getTime(),
            items: productsCart
        }
        productsService.insertOrder(orden).then((datos) => {
            clear()
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
                <Brief />
                <Payment realizarPago={realizarPago}/>
            </div>

            
        </div>
    )
}

export { Checkout }