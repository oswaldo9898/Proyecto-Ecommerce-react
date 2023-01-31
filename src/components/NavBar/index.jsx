import './styles.css';
import { CartWidget } from './../CartWidget';
import logo from './../../assets/img/logo-tienda.png';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>

            <div className="logo">
                <div className="logotipo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>

            <nav className="menu">
                <ul>
                    <li><NavLink to="/">TIENDA</NavLink></li>
                    <li> <a href='#5'>CATEGORIAS</a> 
                        <ul>
                            <li><NavLink to="/categoria/bts">BTS</NavLink></li>
                            <li><NavLink to="/categoria/camiseta">CAMISETAS</NavLink></li>
                            <li><NavLink to="/categoria/figura">FIGURAS</NavLink></li>
                            <li><NavLink to="/categoria/funko-pop">FUNKO POPS</NavLink></li>
                            <li><NavLink to="/categoria/mochila">MOCHILAS</NavLink></li>
                        </ul>
                    </li>
                    <li> <a href='#5'>LOCALES</a> </li>
                    <li> <a href='#5'>CONTACTO</a> </li>
                </ul>
                <CartWidget />
            </nav>

        </header>
    )
}

export { NavBar };