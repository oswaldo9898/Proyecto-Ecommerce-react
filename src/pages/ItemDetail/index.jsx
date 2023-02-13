
import {  useState } from 'react';
import { Button } from './../../components';
import './styles.css'

const ItemDetail = ({product}) => {

    const [cant, setCant] = useState(1);

    


    const handleCantidadAumentar = () => {
        // let cant = Number(cantidad);
        // let aumento = (cant + 1).toString();
        setCant(cant + 1);
    }

    const handleCantidadDisminuir= () => {
        if(cant > 1){
            setCant(cant - 1);
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
                        <Button classButton='botonProducto' icono="fa-solid fa-minus"  handle={handleCantidadDisminuir}/>
                        <div className='valorProducto'>{cant}</div>
                        <Button classButton='botonProducto' icono="fa-solid fa-plus"  handle={handleCantidadAumentar}/>
                    </div>
                </div>
                <Button classButton='agregarButton' icono="fa-solid fa-cart-plus" texto='AGREGAR AL CARRITO'/>

            </div>
        </div>
    )
}

export { ItemDetail }