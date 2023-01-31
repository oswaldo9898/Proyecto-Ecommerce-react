import './styles.css';

const ItemList = ({ products }) => {
    return (
        <div className='cards'>
            {products.map((product) => {
                return (

                    <div className="card">
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
                        <button>Ver detalle</button>
                    </div>
                );
            })}
        </div>
    );
};

export { ItemList };
