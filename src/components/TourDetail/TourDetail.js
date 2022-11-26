import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sun from '../../assets/sun.png';
import Moon from '../../assets/moon.png';

class TourDetail extends React.Component {
    render(){
        return (
            <div className="bg-header detail__bg">
                <Header/>
                <div className='content__detail'>
                    <h5 className="card__tittle">Montañas de Suiza</h5>
                        <p className="card-text">Ubicación: Suiza</p>
                        <p className="card-text">Precio: $7'000.000</p>
                        <div className='description__tour'>
                            <div className='date__tour'>
                                <p className="card__day">12</p>
                                <div className='card__year'>
                                    <p className="card-text">Junio</p>
                                    <p className="card-text">2023</p>
                                </div>
                                <div className='duration__tour'>
                                    <img className="icon__cards" src={Moon} alt="Imagen noches"/>
                                    <p className="card-text">3</p>
                                    <img className="icon__cards" src={Sun} alt="Imagen días"/>
                                    <p className="card-text">4</p>
                                </div>
                            </div>
                            <div className='buttons__tour'>
                                <button className='btn__add'>
                                    Añadir al carrito
                                </button>
                                <a href="/confirmaCompra">
                                    <button className="btn__buy">
                                        Reservar ahora
                                    </button>
                                </a>
                            </div>
                        </div>
                </div>
                <div className="tips__tour">
                    <h3 className='title__section'>
                        Recomendaciones
                    </h3>
                    <p>
                        Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendacionesv Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones 
                    </p>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default TourDetail;