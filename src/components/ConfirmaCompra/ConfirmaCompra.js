import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImgBuy from '../../assets/imgBuy.png';
import { connect } from 'react-redux';
import { json } from 'react-router-dom';

class ConfirmaCompra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice:null,
            nombreViaje:"Paris - Francia",
            precioViaje:4200000,
            fechaI:"08/12/2022",
            fechaF:"09/12/2022",
            pagoAceptado: true,
            nombre:"",
            email:"",
            phone:"",
            noReserva:""
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmitPaid = this.handleSubmitPaid.bind(this);
    }
    handleChangeName(event){
        this.setState({
            nombre:event.target.value 
        })
        event.preventDefault();
    }
    handleChangePhone(event){
        this.setState({
            phone:event.target.value 
        })
        event.preventDefault();
    }
    handleChangeMail(event){
        this.setState({
            email:event.target.value 
        })
        event.preventDefault();
    }
    handleSubmitPaid(e) {
        e.preventDefault();
        let postData = {
          "nameTravel": this.state.nombreViaje,
          "userName": this.state.nombre,
          "startDate": this.state.fechaI,
          "endDate": this.state.fechaF,
          "email": this.state.email,
          "price": this.state.precioViaje,
          "purchaseStatus": this.state.pagoAceptado,
        };
        fetch('http://localhost:9000/govass/purchase/savePurchase', {
        method: "POST",
        mode:"cors",
        body: JSON.stringify(postData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json =>{
            console.log(json);
            this.setState({
                noReserva:json._id
            })
        } );
    }
    render(){
        const precio=this.props.cart.reduce((sum, item) => sum + item.item.priceTravel, 0);
        return (
            <div className="">
                <Header/>
                <div className='bg__form'>
                    <div className='container__form'>
                        <p>Reserva</p>
                        <form className='form__buy'>
                        <div className="form-group">
                            <input value={this.state.nombre} onChange={this.handleChangeName} type="text" className="form-control" id="name" placeholder="Nombre Completo"/>
                        </div>
                        <div className="form-group">
                            <input  value={this.state.phone} onChange={this.handleChangePhone}  type="text" className="form-control" id="phone" placeholder="Teléfono"/>
                        </div>
                        <div className="form-group">
                            <input  value={this.state.email} onChange={this.handleChangeMail}  type="email" className="form-control" id="email" placeholder="Correo"/>
                        </div>
                        <h3 className='total__price'>
                            ${precio}
                        </h3>
                        <button onClick={this.handleSubmitPaid} className="btn btn-primary">Pagar</button>
                        </form>
                        <form action="https://checkout.wompi.co/p/" method="GET" className='form_wompi'>
                            <input type="hidden" name="public-key" value="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf" />
                            <input type="hidden" name="currency" value="COP" />
                            <input type="hidden" name="amount-in-cents" value={precio+"00"} />
                            <input type="hidden" name="reference" value="pagoXWompiTest" />
                        <button type="submit" className='waybox-button'>Pagar con Wompi</button>
                        </form>
                        {this.state.noReserva !== "" ?
                        <div className='code_Paid'>
                            Tu código de reserva es: {this.state.noReserva}
                        </div>:<div/>
                        }
                    </div>
                    <div className='container__img'>
                        <img className="img__form" src={ImgBuy} alt="Imagen destino"/>
                    </div>
                </div>
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

export default connect(mapStateToProps, null)(ConfirmaCompra);