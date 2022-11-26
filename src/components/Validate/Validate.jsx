import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Validate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code:"",
            dataReservation:[]
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e){
        e.preventDefault();
        let codeReserv = this.state.code;
        let url = "http://localhost:9000/govass/purchase/getPurchaseInformation"+codeReserv;
          fetch(url, {
          method: "GET",
          mode:"cors"
          })
          .then(response => response.json()) 
          .then(json =>{
              console.log(json);
              this.setState({
                  dataReservation:json
              })
          } );
    }
    render(){
        const displayItems=this.state.dataReservation.map((item,index)=>{
            return(
                <tr key={index}>
                            <td>
                                <p className='name__item'>{item.nameTravel}</p>
                                <p className='info__item'>{item.country}</p>
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
                                <p className='info__item'>$ {item.price}</p>
                            </td>
                        </tr>
            )});
        return (
            <div className="bg-header detail__bg container__search">
                <section className='ajust-banner'>
                    <section className='ajust-banner-filter'>
                    <Header/>
                    <div className='content__detail'>
                    <p className='title__cart'>Tu reserva</p> 
                    </div>
                    </section>
                </section>
                <div className='section_search'>
                    <input type="text" className='input__search' placeholder='Ingresa tu código de reserva' />
                    <button onClick={this.handleSearch} className="search__code">
                        Buscar reserva
                    </button>   
                </div>
                <div className="list__cart">
                <table className="table">
                    <tbody>
                        {displayItems}  
                    </tbody>
                </table>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Validate;