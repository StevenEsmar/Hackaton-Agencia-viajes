import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
class Search extends React.Component {
    render(){
        return (
            <div className="search bg-header">
                <Header/>
                <Banner/>
                <div className='conatiner left-ajust'>
                    <Cards/>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Search;