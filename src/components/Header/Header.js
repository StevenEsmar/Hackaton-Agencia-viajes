import React from 'react';
import Logo from '../../assets/logoGovass.png';
import Cart from '../../assets/cart.png';

class Header extends React.Component {
    render(){
        return (
            <div className="container__navbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src={Logo} className="logo-govass" alt="Logo Go VASS">
                    </img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link " href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/quienesSomos">Consulta tu reserva</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/quienesSomos">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <div className='cart__style'>
                                <img src={Cart} className="logo__cart" alt="Logo carrito de compras"/>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;