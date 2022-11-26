import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logoGovass.png';

class Header extends React.Component {
    render(){
        return (
            <div className="container__navbar footer__color">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src={Logo} className="logo-govass" alt="Logo Go VASS">
                    </img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link " to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/quienesSomos">Consulta tu reserva</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/quienesSomos">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <div className='cart__style'>
                            <Link className="nav-link " to="/carrito">car</Link>
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