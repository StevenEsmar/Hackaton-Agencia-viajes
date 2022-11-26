import React from 'react';
import Tomorrowl from '../../assets/tomorrowl.jpg';
import Eurotour from '../../assets/eurotour.jpeg';
class Banner extends React.Component {
    render(){
        console.log("hola"+JSON.stringify(this.props))
        return (
            <div className="uno">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={Tomorrowl} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Eurotour} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Tomorrowl} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                </div>
            </div>
        );
    }
}
export default Banner;