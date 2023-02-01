import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail";
import { Loading } from './../Loading'
import arrProducts from './../json/products.json';
import './styles.css'

const ItemDetailConatiner = () => {
    const { idProduct } = useParams();
    const [ product, setProduct ] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(idProduct ? arrProducts.find(p => p.id === Number(idProduct)) : []);
            }, 1000);
        });
        promesa.then((data) => {
            setProduct(data);
        });
    },[idProduct]);

    return(
        <div className="contenidoPrincipalDetail">
            {(product.length === 0 ) ? <Loading /> :  <ItemDetail product={product}/>}
        </div>
    )
}

export { ItemDetailConatiner };