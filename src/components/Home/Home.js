import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

class Home extends React.Component {
    render(){
        return (
            <div className="">
                <Header/>
                <h1>
                    Hello world
                </h1>
                <Footer/>
            </div>
        );
    }
}
export default Home;