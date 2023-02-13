import './styles.css';
import { CartWidget, BurgerButton } from './../../components';
import logo from './../../assets/img/logo-tienda.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <header>

            <div className="logo">
                <div className="logotipo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>

            <div className="menu">
                <nav>
                    <div className='burger'>
                        <BurgerButton clicked={clicked} handleClick={handleClick}/>
                    </div>
                    
                    <ul className={`links ${clicked ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={handleClick}><i className="fa-solid fa-shop"></i> TIENDA</NavLink></li>
                        <li> <a href='#5'><i className="fa-solid fa-tag"></i> CATEGORIAS <i className="fa-solid fa-caret-down"></i></a> 
                            <ul>
                                <li><NavLink  onClick={handleClick} to="/categoria/bts">BTS</NavLink></li>
                                <li><NavLink onClick={handleClick} to="/categoria/camiseta">CAMISETAS</NavLink></li>
                                <li><NavLink onClick={handleClick} to="/categoria/figura">FIGURAS</NavLink></li>
                                <li><NavLink onClick={handleClick} to="/categoria/funko-pop">FUNKO POPS</NavLink></li>
                                <li><NavLink onClick={handleClick} to="/categoria/mochila">MOCHILAS</NavLink></li>
                            </ul>
                        </li>
                        <li> <a href='#5'><i className="fa-solid fa-earth-americas"></i> LOCALES</a> </li>
                        <li> <a href='#5'><i className="fa-solid fa-envelope"></i> CONTACTO</a> </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>

        </header>
    )
}

export { NavBar };

