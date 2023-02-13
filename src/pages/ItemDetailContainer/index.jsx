import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./../ItemDetail";
import { Loading } from '../../components'
import arrProducts from '../../components/json/products.json';
import './styles.css'

const ItemDetailContainer = () => {
    const { idProduct } = useParams();
    const [ product, setProduct ] = useState([]);
    const [loading, setLoading ] = useState(true);


    useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(idProduct ? arrProducts.find(p => p.id === Number(idProduct)) : []);
            }, 1000);
        });
        promesa.then((data) => {
            setProduct(data);
            setLoading(!loading);
        });
    },[idProduct]);

    return(
        <div className="contenidoPrincipalDetail">
            {loading ? <Loading /> :  <ItemDetail product={product}/>}
        </div>
    )
}

export { ItemDetailContainer };