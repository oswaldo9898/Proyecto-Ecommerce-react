import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./../ItemDetail";
import { Loading } from '../../components'
import { useContext } from "react";
import { CartContext } from "../../context";
import { productsService } from './../../services/productService.js';
import './styles.css'


const ItemDetailContainer = () => {
    const { idProduct } = useParams();
    const [ product, setProduct ] = useState([]);
    const [loading, setLoading ] = useState(true);
    const { addToCart } = useContext(CartContext);


    useEffect(()=>{
        productsService.getProduct(idProduct).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idProduct]);



    const agregarProducto = (cantProducto) => {
        const newItem = {
            product,
            quantity: cantProducto
        }
        addToCart(newItem);
    }



    return(
        <div className="contenidoPrincipalDetail">
            {loading ? <Loading /> :  <ItemDetail product={product} agregarProducto={agregarProducto}/>}
        </div>
    )
}

export { ItemDetailContainer };