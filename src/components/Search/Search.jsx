import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
class Search extends React.Component {
    render(){
        return (
            <div className="search bg-header">
                <section className='ajust-banner'>
                    <section className='ajust-banner-filter'>
                        <Header/>
                    </section>
                </section>
                <Banner/>
                <div className="container__navbar">
                    <h3 className='title__section'>
                        Viejas encontrados
                    </h3>
                    <Cards/>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Search;