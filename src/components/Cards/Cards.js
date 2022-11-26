import React from 'react';
import planA from '../../assets/cartagena.jpg';
import planB from '../../assets/suiza.png';
import planC from '../../assets/disney.jpeg';

class Cards extends React.Component {
    render(){
        return (
            <div className="container__navbar">
                <h3>
                    Destinos recomendados
                </h3>
               <div className="card-group">
                <div className="card text-white">
                    <img className="card-img-top" src={planB} alt="Imagen plan"/>
                    <div className="card-body card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                    <small className="">Ver detalles</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={planA} alt="Imagen plan"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={planC} alt="Imagen plan"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Cards;