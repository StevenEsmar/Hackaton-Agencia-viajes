import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sun from '../../assets/sun.png';
import Moon from '../../assets/moon.png';
import { connect } from 'react-redux';
import {addToCart} from '../Actions/Actions';
import {Link,useParams} from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouter(props) {
      let params = useParams()
      return <Component {...props} params={params} />
    }
    return ComponentWithRouter
  }
class TourDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            items:[]
        };
    }
    componentDidMount() {
        this.setState({
            id: this.props.params.idCard
        });
        fetch('http://scanapp.com.co:9000/govass/packages/travel/'+this.state.id)
          .then(response => response.json())
          .then(data => this.setState({ items:data }));
          console.log(this.state.items);
    }
    static getDerivedStateFromProps(nextProps) {
        return {
          id: nextProps.params.idCard
        }
      }
    render(){
        const listItems = this.state.items; 
            return (
            <div className="bg-header detail__bg">
                <section className='ajust-banner'>
                    <section className='ajust-banner-filter'>
                    <Header/>
                    <div className='content__detail'>
                        <h5 className="card__tittle">{listItems.nameTravel}</h5>
                            <p className="card-text">Ubicación: {listItems.country}</p>
                            <p className="card-text">Precio: ${listItems.priceTravel}</p>
                            <div className='description__tour'>
                                <div className='date__tour'>
                                    <p className="card__day">12</p>
                                    <div className='card__year'>
                                        <p className="card-text">Junio</p>
                                        <p className="card-text">2023</p>
                                    </div>
                                    <div className='duration__tour'>
                                        <img className="icon__cards" src={Moon} alt="Imagen noches"/>
                                        <p className="card-text">{listItems.durationTravel-1}</p>
                                        <img className="icon__cards" src={Sun} alt="Imagen días"/>
                                        <p className="card-text">{listItems.durationTravel}</p>
                                    </div>
                                </div>
                                <div className='buttons__tour'>
                                    <button className='btn__add' onClick={()=>this.props.addToCart(listItems)}>
                                        Añadir al carrito
                                    </button>
                                    <Link to="/confirmaCompra">
                                        <button className="btn__buy">
                                            Reservar ahora
                                        </button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                    </section>
                </section>
                <div className="tips__tour">
                    <h3 className='title__section'>
                        Recomendaciones
                    </h3>
                    <ul>
                        <li>
                            {listItems.descriptionTravel}
                        </li>
                        <li>
                            {listItems.servicesTravel}
                        </li>
                        <li>
                            {listItems.requirementsTravel}
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart({item}))
    }
}
const HOCTaskDetail = withRouter(TourDetail);

export default connect(null,mapDispatchToProps)(HOCTaskDetail);