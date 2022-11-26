import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import Search from './components/Search/Search';
import './App.css';
import TourDetail from './components/TourDetail/TourDetail';
import ConfirmaCompra from './components/ConfirmaCompra/ConfirmaCompra';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/quienesSomos" element={<Information/>}/>
        <Route exact path="/detallePlan" element={<TourDetail/>}/>
        <Route exact path="/confirmaCompra" element={<ConfirmaCompra/>}/>
        {/* <Route exact path="/info" element={<Information/>}/>
        <Route exact path="/contact" element={<Contact/>}/> */}
        <Route exact path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
