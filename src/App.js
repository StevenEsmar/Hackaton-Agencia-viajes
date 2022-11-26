import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import Search from './components/Search/Search';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/quienesSomos" element={<Information/>}/>
        {/* <Route exact path="/info" element={<Information/>}/>
        <Route exact path="/contact" element={<Contact/>}/> */}
        <Route exact path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
