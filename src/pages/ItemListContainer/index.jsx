import { useContext, useEffect, useState} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ItemList } from '../ItemList';
import { Loading, FilterSearch, FormFilter } from '../../components';
import './styles.css';
import { CartContext } from '../../context';
import { productsService } from './../../services/productService.js';

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts ] = useState([]);
    const [loading, setLoading ] = useState(true);
    const { addToCart } = useContext(CartContext);
    const [criteria, setCriteria] = useState();
    const [searchParams, setSearchParams] = useSearchParams({
        title: ''
    });



    const agregarProducto = (cantProducto, productSelect) => {
        const newItem = {
            product: productSelect,
            quantity: cantProducto
        }
        addToCart(newItem);
    }


    useEffect(() => {
        setSearchParams(criteria)
    },[criteria, setSearchParams]);
    
    
    // useEffect(() => {
    //     productsService.getAllProductsSearch(searchParams).then((data) => {
    //         setProducts(data);
    //     });
    // },[searchParams]);


    useEffect(() => {
        productsService.getAllProducts(category).then((datos) => {
            console.log(datos)
            setProducts(datos);
            setLoading(false);
        });
    },[category]);


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
                {loading ? <Loading /> :  <ItemList products={products} agregarProducto={agregarProducto} /> }
            </div>
        </div>
    )
}

export { ItemListContainer };