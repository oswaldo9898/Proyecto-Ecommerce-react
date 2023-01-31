import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList';
import arrProducts from './../json/products.json';
import './styles.css';

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts ] = useState([]);
    console.log(category);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(category ? arrProducts.filter(p => p.category === category) : arrProducts);
            },500)
        });
        promesa.then((data) => {
            setProducts(data);
        })

    },[category]);

    return (
        <div className="contenidoPrincipal">
            <ItemList products={products}/>
        </div>
    )
}

export { ItemListContainer };