import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
class Home extends React.Component {
    render(){
        return (
            <div className="bg-header">
                <Header/>
                <h1 className='content__test'>
                    Hello world
                </h1>
                <Banner/>
                <Cards/>
                <Footer/>
            </div>
        );
    }
}
export default Home;