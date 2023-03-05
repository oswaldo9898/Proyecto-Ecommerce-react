import './styles.css';
import { NavLink } from 'react-router-dom';

const ItemList = ({ products, agregarProducto }) => {

    return (
        <div className='cardsProducts'>
            {products.map((product) => {
                return (
                    <div key={product.id} className="cardProducto">
                        <div className='cardImg'>
                            <NavLink to={`/producto/${product.id}`}>
                                <img className='img' src={`${product.image}`} alt={product.title} />
                            </NavLink>
                        </div>
                        
                        <div className="cardBody">
                            <NavLink className='nav_link' to={`/producto/${product.id}`}>
                                <h3>{product.title}</h3>
                            </NavLink>

                            <div className='cardPrice'>
                                ${product.price}
                            </div>
                        </div>

                        <span className='separador'></span>
                        <button onClick={()=>agregarProducto(1,product)} className='botonAgregar' ><i className="fa-solid fa-bag-shopping"></i> <span>AGREGAR AL CARRITO</span></button>
                    </div>
                );
            })}
        </div>
    );
};

export { ItemList };
