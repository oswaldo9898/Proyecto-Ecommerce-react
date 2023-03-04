import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context';
import { EmptyListCart } from '../EmptyListCart';
import { ListCart } from '../ListCart';
import './styles.css'

const Brief = () => {
    const { cart, removeItem } = useContext(CartContext);
    const [totalPagar, setTotalPagar] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.map((element) => {
           return total = total + ( element.product.price * element.quantity );
        });
        setTotalPagar(total);
    }, [cart]);

    const deleteProducToCart = (id) => {
        removeItem(id);
    };

    

    return(
        <>
        <div className='tablaProducts'>
            
            {cart.length < 1 ? <EmptyListCart /> : <> 
            <div className='tituloTabla'>
                <div className='tablaProducto'>Producto</div>
                <div className='tablaPrecio'>Precio</div>
                <div className='tablaCantidad'>Cantidad</div>
                <div className='tablaTotal'>Total</div>
            </div> 
            <ListCart arrayProductsCart = {cart} total={totalPagar} deleteProducToCart={deleteProducToCart}></ListCart> </>}
        </div>
        </>
        
    )
}

export { Brief }