import React from 'react';
import {Link} from 'react-router-dom';
import ubicacion from '../../assets/ubicacion.png';
import calendar from '../../assets/calendar.png';
import person from '../../assets/person.png';

class Formsearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ubicacion: '',
        dateinit: '',
        dateend: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleChange(event) {    this.setState({ubicacion: event.target.value});  }
    handleSubmit(event) {
        event.preventDefault();
        console.log("hola"+JSON.stringify(this.props))
        
        
        
      
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value    });
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ajust-search">
                        <div className='img'>
                            <img src={ubicacion} alt="banner"/>
                        </div>
                        <div className='content'>
                            <label>Destino:</label> <br />
                            <select value={this.state.ubicacion} onChange={this.handleChange}>
                                <option value="grapefruit">Bogotá - Colombia</option>
                                <option value="lime">Lima - Perú</option>
                                <option value="coconut">Miami - US</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="col-md-3 ajust-search">
                        <div className='img'>
                            <img src={calendar} alt="banner"/>
                        </div>
                        <div className='content'>
                            <label>Fecha inicial:</label><br />
                            <input type="date" name='dateinit' value={this.state.dateinit} onChange={this.handleInputChange}  />
                        </div>
                        
                    </div>
                    <div className="col-md-3 ajust-search">
                        <div className='img'>
                            <img src={calendar} alt="banner"/>
                        </div>
                        <div className='content'>
                            <label>Fecha final:</label><br />
                            <input type="date"  />
                        </div>
                        
                    </div>
                    <div className="col-md-2 ajust-search1">
                        <div className='img'>
                            <img src={person} alt="banner"/>
                        </div>
                        <div className='content'>
                            <Link className="nav-link" to="/search">Buscar</Link>
                        </div>
                        
                    </div>
                </div>   
            </div>     
            
        </form>
      );
    }
  }
  export default Formsearch;

