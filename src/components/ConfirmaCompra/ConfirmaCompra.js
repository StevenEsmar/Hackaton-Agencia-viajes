import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImgBuy from '../../assets/imgBuy.png';


class ConfirmaCompra extends React.Component {
    render(){
        return (
            <div className="">
                <Header/>
                <div className='bg__form'>
                    <div className='container__form'>
                        <p>Reserva</p>
                        <form className='form__buy'>
                        <div class="form-group">
                            <input type="text" class="form-control" id="" placeholder="Nombre Completo"/>
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" id="" placeholder="Teléfono"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Correo"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        {/* <form action="https://checkout.wompi.co/p/" method="GET" className='form_wompi'>
                            <input type="hidden" name="public-key" value="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf" />
                            <input type="hidden" name="currency" value="COP" />
                            <input type="hidden" name="amount-in-cents" value="50000000" />
                            <input type="hidden" name="reference" value="pagoXWompiTest" />
                        <button type="submit" className='waybox-button'>Pagar con Wompi</button>
                        </form> */}
                        <form>
                            <script
                                src="https://checkout.wompi.co/widget.js"
                                data-render="button"
                                data-public-key="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
                                data-currency="COP"
                                data-amount-in-cents="4950000"
                                data-reference="4XMPGKWWPKWQ"
                                
                                >
                            </script>
                        </form>
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
export default ConfirmaCompra;