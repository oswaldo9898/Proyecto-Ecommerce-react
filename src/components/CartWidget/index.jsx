import "./styles.css";
import cartImg from "./../../assets/img/cart-shop.png";
import { CartContext } from "./../../context";
import { useState, useEffect, useContext } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ListCart } from "../ListCart";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    const { cart, removeItem } = useContext(CartContext);
    const [cantProduct, setCantProduct] = useState(0);
    const [totalPagar, setTotalPagar] = useState(0);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let total = 0;
        let cantidadProductos = 0;
        
        cart.map((element) => {
            cantidadProductos +=  element.quantity;
           return total = total + ( element.product.price * element.quantity );
        });
        setCantProduct(cantidadProductos);
        setTotalPagar(total);
    }, [cart]);


    const deleteProducToCart = (id) => {
        removeItem(id);
    };

    return (
        <>
            <div className=" cartShop centrarContenido">
                <Button  onClick={handleShow} className='botonCartShop'>
                    <img
                        src={cartImg}
                        alt="cart"
                        className="iconCart"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    />
                </Button>
                
                <div className="cantProducts centrarContenido">
                    <span className="cant">{cantProduct}</span>{" "}
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className='modalProductsCart' size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="tituloModal">TU ORDEN | <span>HAY ARTÍCULO (S) EN SU CARRITO</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length < 1 ? <div>No Hay productos en su carrito</div> : <ListCart arrayProductsCart = {cart} total={totalPagar} deleteProducToCart={deleteProducToCart} handleClose={handleClose}></ListCart> }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="btn-sm" onClick={handleClose}>
                        SEGUIR COMPRANDO
                    </Button>
                    <NavLink to={`/checkout`}>
                        <Button variant="success" className="btn-sm" onClick={handleClose}>
                            HACER MI PAGO
                        </Button>
                    </NavLink>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
};

export { CartWidget };
