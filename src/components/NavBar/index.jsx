import './styles.css';
import { CartWidget } from './../CartWidget';
import logo from './../../assets/img/logo-tienda.png';

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
                    <li> <a href='#5'>TIENDA</a> </li>
                    <li> <a href='#5'>CATEGORIAS <i class="bi bi-caret-down-fill"></i></a> 
                        <ul>
                            <li><a href="#3">BTS</a></li>
                            <li><a href="#3">FIGURAS</a></li>
                            <li><a href="#3">FUNKO POPS</a></li>
                            <li><a href="#3">GAMER</a></li>
                            <li><a href="#3">MANGA</a></li>
                            <li><a href="#3">MOCHILAS</a></li>
                            <li><a href="#3">PLAYERAS</a></li>
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