import { useEffect, useState} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ItemList } from '../ItemList';
import { Loading, FilterSearch, FormFilter } from '../../components';
import arrProducts from '../../components/json/products.json';
import './styles.css';

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts ] = useState([]);
    const [loading, setLoading ] = useState(true);

    const [criteria, setCriteria] = useState();
    const [searchParams, setSearchParams] = useSearchParams({
        title: ''
    });

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(category ? arrProducts.filter(p => p.category === category) : arrProducts);
            },500)
        });
        promesa.then((data) => {
            setProducts(data);
            setLoading(false);
        })
    },[category]);


    useEffect(() => {
        setSearchParams(criteria)
    },[criteria, setSearchParams]);
    
    
    useEffect(() => {
        let newArray = arrProducts.filter((product) => product.title.includes(searchParams.get('title')));
        setProducts(newArray);
    },[searchParams])

    return (
        <div className="contenedorPrincipal">
            <div className='encabezado'>
                <div className='tituloPrincipal'>
                    {category ? <h1>TODOS LOS PRODUCTOS - {category.toUpperCase()}</h1> : <h1>TODOS LOS PRODUCTOS</h1>}
                    
                </div>
                <div className='buscadorTitle'>
                    <FilterSearch asignarQuery = {setCriteria} />
                </div>
            </div>

            <div className='listaProductos'>
                <div className='filtrosForm'>
                    <FormFilter />
                </div>
                {loading ? <Loading /> :  <ItemList products={products} /> }
            </div>
        </div>
    )
}

export { ItemListContainer };