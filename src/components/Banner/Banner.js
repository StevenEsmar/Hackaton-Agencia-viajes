import React from 'react';
import Tomorrowl from '../../assets/tomorrowl.jpg';
import Eurotour from '../../assets/eurotour.jpeg';

class Banner extends React.Component {
    render(){
        return (
            <div className="">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={Tomorrowl} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={Eurotour} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={Tomorrowl} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                </div>
            </div>
        );
    }
}
export default Banner;