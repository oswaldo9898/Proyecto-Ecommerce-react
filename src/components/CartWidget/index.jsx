import './styles.css';
import cart from './../../assets/img/cart-shop.png';

const CartWidget = () => {

    return (
        <div className="cartShop">
            <img src={cart} alt="cart" className='iconCart' />
            <div className='cantProducts'> <span className='cant'>2</span> </div>
        </div>
    );
}

export { CartWidget };