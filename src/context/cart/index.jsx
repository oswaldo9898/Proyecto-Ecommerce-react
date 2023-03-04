import { useState, createContext, useEffect } from 'react';
import {Toaster, toast} from 'react-hot-toast';

const CartContext = createContext();
let arrProductosToCart = JSON.parse(localStorage.getItem('cart')) || [];


const CartProvider = ({children}) => {
    const [cart, setCart] = useState(arrProductosToCart);
    // const [usuarioLogin, setUsuarioLogin] = useState(false);
    // const [datosUsuario, setDatosUsuario] = useState();



    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);


    // useEffect(() => {
    //     const auth = getAuth();
    //     onAuthStateChanged(auth, (usuarioActivo) => {
    //         if(usuarioActivo){
    //             setDatosUsuario(usuarioActivo);
    //             setUsuarioLogin(true);
    //         }
    //     });
        // UsersService.isLogin().then((datos) => {
        //     console.log('VIENE A COMPROBAR SI ESTA LOGEADO');
        //     console.log('LOS SUPUESTOS DATOS SON: ',datos);
        //     if(datos){
        //         setDatosUsuario(datos);
        //         setUsuarioLogin(true);
        //     }else{
        //         setUsuarioLogin(false);
        //     }
        // });
    // },[]);



    const addToCart = (item) => {
        const cartIndex = cart.findIndex((e) => e.product.id === item.product.id);

        if( cartIndex === -1 ) {
            setCart([...cart, item]);
        }else{
            cart[cartIndex].quantity = cart[cartIndex].quantity + item.quantity;
            setCart([...cart]);
        }
        notificacionToast('Se agrego el producto ha su carrito');
    }


    const removeItem = (itemId) => {
        const cartIndex = cart.findIndex((e) => e.product.id === itemId);

        if( cartIndex > -1 ) {
            cart.splice(cartIndex,1);
            setCart([...cart]);
        }
        notificacionToast('El producto se elimino')
    };
    
    const clear = () => {
        setCart([]);
    };

    const notificacionToast = (message) => {
        toast.success(message,
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


    return(
        <CartContext.Provider 
        value = {{
            cart,
            // usuarioLogin,
            // setUsuarioLogin,
            // setDatosUsuario,
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