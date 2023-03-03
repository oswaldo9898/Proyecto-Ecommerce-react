import './styles.css';
import { NavLink } from "react-router-dom";


const ListCart = ({ arrayProductsCart, total, deleteProducToCart, handleClose }) => {

    return (
        <>
            {arrayProductsCart.map((element) => {
                return (
                    <div key={element.product.id} className="cartProduct">
                        <button onClick={() => deleteProducToCart(element.product.id)} className="centrarContenido deleteProduct " >
                            <i className="fa-solid fa-trash" title="Eliminar producto"></i>
                        </button>
                        <div className="imgProductCart centrarContenido">
                            <img
                                src={`${element.product.image}`}
                                alt='Producto' />
                        </div>
                        <div className="titleProductCart centrarContenido" onClick={handleClose}>
                            <NavLink to={`/producto/${element.product.id}`}>{element.product.title}</NavLink>
                        </div>
                        <div className="priceProductCart centrarContenido">
                            $ {element.product.price.toFixed(2)}
                        </div>
                        <div className="CantidadProductCart centrarContenido">
                            {element.quantity}
                        </div>
                        <div className="totalProductCart centrarContenido">
                            $ {(element.product.price * element.quantity).toFixed(2)}
                        </div>

                    </div>
                )
            })}
            <div className="totalProductos">
                TOTAL A PAGAR: $ {total.toFixed(2)}
            </div>
        </>
    )
}

export { ListCart };