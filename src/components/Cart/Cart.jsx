import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/Actions';

class Cart extends React.Component {
    render(){
        const cartItems=this.props.cart.map((item,index)=>{
            return(
                <tr key={index}>
                            <td>
                                <img src={item.item.urlImage} className="img__item" alt="Logo carrito de compras"/>
                            </td>
                            <td>
                                <p className='name__item'>{item.item.nameTravel}</p>
                                <p className='info__item'>{item.item.country}</p>
                            </td>
                            <td>
                                <p className='name__item'>Inicio</p>
                                <p className='info__item'>10/09/2023</p>
                            </td>
                            <td>
                                <p className='name__item'>Fin</p>
                                <p className='info__item'>18/09/2023</p>
                            </td>
                            <td>
                                <p className='name__item'>Costo</p>
                                <p className='info__item'>$ {item.item.priceTravel}</p>
                            </td>
                            <td>
                                <button className='button__item' onClick={ () => this.props.removeFromCart(item)}>Eliminar</button>
                            </td>
                        </tr>
            )});
        return (
            <div className="bg-header detail__bg">
                <section className='ajust-banner'>
                    <section className='ajust-banner-filter'>
                    <Header/>
                    <div className='content__detail'>
                    <p className='title__cart'>Carrito</p> 
                    </div>
                    </section>
                </section>
                {(this.props.cart.length <= 0) ?
                <div className="list__cart">
                <p className='no_products'>
                    Aún no tienes planes en el carrito
                </p>
                <Link to="/">
                    <button className="btn__buy btn__cart__buy">Regresar al inicio</button>
                </Link>
                </div>:
                <div className="list__cart">
                    <table className="table">
                        <tbody>
                            {cartItems}  
                        </tbody>
                    </table>
                    <Link to="/confirmaCompra">
                        <button className="btn__buy btn__cart__buy">Reservar ahora</button>
                    </Link>
                </div>}
                <Footer/>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        cart: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);