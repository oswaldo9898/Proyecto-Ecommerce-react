import { useState, createContext, useEffect } from 'react';
import {Toaster} from 'react-hot-toast';
import { notificationSuccess } from "../../utils.js";


const CartContext = createContext();
let arrProductosToCart = JSON.parse(localStorage.getItem('cart')) || [];

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(arrProductosToCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);


    const addToCart = (item) => {
        const cartIndex = cart.findIndex((e) => e.product.id === item.product.id);
        if( cartIndex === -1 ) {
            setCart([...cart, item]);
        }else{
            cart[cartIndex].quantity = cart[cartIndex].quantity + item.quantity;
            setCart([...cart]);
        }
        notificationSuccess('Se agrego el producto ha su carrito');
    }


    const removeItem = (itemId) => {
        const cartIndex = cart.findIndex((e) => e.product.id === itemId);
        if( cartIndex > -1 ) {
            cart.splice(cartIndex,1);
            setCart([...cart]);
        }
        notificationSuccess('El producto se elimino')
    };
    
    const clear = () => {
        setCart([]);
    };

    return(
        <CartContext.Provider 
        value = {{
            cart,
            addToCart,
            removeItem,
            clear
        }}>
            {children}
            <Toaster />
        </CartContext.Provider>
    )
}

export { CartProvider,  CartContext};