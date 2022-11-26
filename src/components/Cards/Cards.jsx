import React from 'react';
import planA from '../../assets/cartagena.jpg';
import planB from '../../assets/suiza.png';
import planC from '../../assets/disney.jpeg';
import Sun from '../../assets/sun.png';
import Moon from '../../assets/moon.png';

class Cards extends React.Component {
    render(){
        return (
               <div className="card-group">
                    <div className="card text-white">
                        <img className="card-img-top" src={planC} alt="Imagen plan"/>
                        <div className="card-body card-img-overlay">
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
                            </div>
                            <div className='duration__tour'>
                                <img className="icon__cards" src={Moon} alt="Imagen noches"/>
                                <p className="card-text">3</p>
                                <img className="icon__cards" src={Sun} alt="Imagen días"/>
                                <p className="card-text">4</p>
                            </div>
                        </div>
                        </div>
                        <div className='card__footer'>
                            <a href="/detallePlan">
                                <button className="button__cards">Ver detalles</button>
                            </a>
                        </div>
                    </div>

                    <div className="card text-white">
                        <img className="card-img-top" src={planB} alt="Imagen plan"/>
                        <div className="card-body card-img-overlay">
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
                            </div>
                            <div className='duration__tour'>
                                <img className="icon__cards" src={Moon} alt="Imagen noches"/>
                                <p className="card-text">3</p>
                                <img className="icon__cards" src={Sun} alt="Imagen días"/>
                                <p className="card-text">4</p>
                            </div>
                        </div>
                        </div>
                        <div className='card__footer'>
                        <button className="button__cards">Ver detalles</button>
                        </div>
                    </div>

                    <div className="card text-white">
                        <img className="card-img-top" src={planA} alt="Imagen plan"/>
                        <div className="card-body card-img-overlay">
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
                            </div>
                            <div className='duration__tour'>
                                <img className="icon__cards" src={Moon} alt="Imagen noches"/>
                                <p className="card-text">3</p>
                                <img className="icon__cards" src={Sun} alt="Imagen días"/>
                                <p className="card-text">4</p>
                            </div>
                        </div>
                        </div>
                        <div className='card__footer'>
                        <button className="button__cards">Ver detalles</button>
                        </div>
                    </div>
                   
                </div>
        );
    }
}
export default Cards;