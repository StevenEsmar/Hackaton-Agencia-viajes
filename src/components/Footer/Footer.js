import React from 'react';
import Logo from '../../assets/logoGovass.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
class Footer extends React.Component {
    render(){
        return (
            <div className="">
                <section className="">
                    <footer className="footer__color text-white text-center text-md-start">
                        <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
                            <img src={Logo} className="logo-govass" alt="Logo Go VASS" id="LogoFooter">
                                </img>
                            </div>
                            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-white text-center">Redes sociales</h5>
                            <ul className="social__footer mb-0 justify-content-evenly">
                                <li>
                                <a href="#!" className="text-white">
                                    <img src={Facebook} className="logo__social" alt="Logo facebook">
                                    </img>
                                </a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">
                                    <img src={Twitter} className="logo__social" alt="Logo Twitter">
                                    </img>
                                </a>
                                </li>
                                <li>
                                <a href="#!" className="text-white">
                                    <img src={Instagram} className="logo__social" alt="Logo Instagram">
                                    </img>
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="mb-0 text-white text-center">Acerca de</h5>
                            <ul className="list-unstyled">
                                <li className="text-center">
                                <a href="/quienesSomos" className="text-white text-center text-decoration-none">Quienes somos</a>
                                </li>
                                <li className="text-center">
                                <a href="/Contacto" className="text-white text-decoration-none">Contacto</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </footer>
            </section>
            </div>
        );
    }
}
export default Footer;