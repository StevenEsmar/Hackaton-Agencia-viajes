import React from 'react';
import Sun from '../../assets/sun.png';
import Moon from '../../assets/moon.png';
import {Link} from 'react-router-dom';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[],
          idCar:""
        };
    }
    componentDidMount() {
        fetch('http://scanapp.com.co:9000/govass/packages/travel')
          .then(response => response.json())
          .then(data => this.setState({ items:data }));
      }
    render(){
        const listItems = this.state.items.map((data,index) => { 
        return (
               <div className="card-group" key={index}>
                    <div className="card text-white">
                        <img className="card-img-top" src={data.urlImage} alt="Imagen plan"/>
                        <div className="card-body card-img-overlay">
                        <h5 className="card__tittle">{data.nameTravel}</h5>
                        <p className="card-text">Ubicación: {data.country}</p>
                        <p className="card-text">Precio: ${data.priceTravel}</p>
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
                                <p className="card-text">{data.durationTravel-1}</p>
                                <img className="icon__cards" src={Sun} alt="Imagen días"/>
                                <p className="card-text">{data.durationTravel}</p>
                            </div>
                        </div>
                        </div>
                        <div className='card__footer'>
                            {/* <Link to="/detallePlan"> */}
                            <Link to={{
                            pathname: `/detallePlan/${data._id}`
                            }}>
                                <button className="button__cards">Ver detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
         )
        }
        );
        return (
            <div className="carousel__items">
                { listItems }
            </div>
        )
        }
}
export default Cards;