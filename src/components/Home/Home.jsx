import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Formsearch from '../FormSearch/formSearch';
class Home extends React.Component {
    render(){
        return (
            <div className="bg-header">
                <Header/>
                <section className='ajust-banner'>
                    <div className='container '>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1 className='content__test'>
                                    No te quedes con esas ganas de conocer el mundo,
                                </h1>
                            </div>
                            <div className='col-md-12'>
                                <p className='content__test'>
                                    nosotros podemos hacer que suceda.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <button className='content__test'>
                                    Buscar por evento
                                </button>
                            </div>
                        </div>
                        <div className='seacrh'>
                        <div className='title'>
                            <h1>Busca tu destino</h1>
                        </div>
                        <div className='seacrh1'>
                            <Formsearch navigation={this.props}/>
                        </div>
                    </div>
                    </div>
                </section>
                
                <Banner/>
                <Cards/>
                <Footer/>
            </div>
        );
    }
}
export default Home;