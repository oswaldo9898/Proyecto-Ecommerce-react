import './styles.css';
import { NavLink } from 'react-router-dom';

const ItemList = ({ products }) => {
    return (
        <div className='cards'>
            {products.map((product) => {
                // TODO ESTO PUEDE IR EN UN COMPONENTE CARD
                return (

                    <div key={product.id} className="card">
                        <div className='cardImg'>
                            <img className='img' src={`${product.image}`} alt={product.title} />
                        </div>
                        
                        <div className="cardBody">
                            <h3>{product.title}</h3>
                            <div className='cardPrice'>
                                ${product.price}
                            </div>
                        </div>

                        <span className='separador'></span>
                        <button><NavLink to={`/producto/${product.id}`}>Ver detalle</NavLink></button>
                    </div>
                );
            })}
        </div>
    );
};

export { ItemList };
