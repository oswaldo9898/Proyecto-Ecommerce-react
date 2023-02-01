import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css'

const ItemDetail = ({product}) => {

    const [cantidad, setCantidad] = useState('');

    useEffect(()=> {
        setCantidad('1')
    }, [])


    const handleCantidadAumentar = () => {
        let cant = Number(cantidad);
        let aumento = (cant + 1).toString();
        setCantidad(aumento);
    }

    const handleCantidadDisminuir= () => {
        let cant = Number(cantidad);
        if(cant > 1){
            let aumento = (cant - 1).toString();
            setCantidad(aumento);
        }
        
    }

    return (
        <div className="contenidoGeneral">
            <div className="imgProducto">
                <img src={`${product.image}`} alt={product.title} />
            </div>
            <div className="informacionProducto">
                <h3 className="tituloProducto">{product.title}</h3>
                <span className="categoriaProducto">Categoría: {product.category}</span>
                <p className="descripcionProducto">Descripción: {product.description}</p>
                
                <div className='contenedorPrecioCantidad'>
                    <p className="precioProducto">$ {product.price}</p>
                    <div className='cantidadProducto'>
                        <button id="menos" type="button" onClick={handleCantidadDisminuir}><i class="fa-solid fa-minus"></i></button>
                        <input type="text" id="contador" defaultValue={cantidad} min='1' />
                        <button id="mas" type="button" onClick={handleCantidadAumentar}><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>

                <button className='agregarButton'><i class="fa-solid fa-cart-plus"></i> AGREGAR AL CARRITO</button>

            </div>
        </div>
    )
}

export { ItemDetail }