import React from 'react';
//import './App.css';
import Swal from 'sweetalert2';
//Import link to routing to other components
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/js/bootstrap.min.js';
//jquery for bootstrap modal
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';



class Home_Display extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        email: '',
        id:'',
        data: [],
        userdetails:[],
       
      }
      
     
   }

    componentDidMount(){

        axios.get('https://restcountries.eu/rest/v2/name/India').then(res => 
        {
            
            this.setState({data: res.data});
        }); 
        
    }

        
       
        

    
 
  render() {
   
    return (
     
      <div className="maincontainer">
        
        <h1 className="mr-5 ml-5 mt-5" style={{background:"#00c3ff3d",textAlign:"center"}}>Reactjs</h1>
        <div className="container mb-5 mt-5 text-left">
        {/*<button className="bg-primary mb-3"><Link class="nav-link" to={'/adduser'}><span>Add</span><i class="fas fa-user"></i></Link></button>*/}
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>subregion</th>
              <th>population</th>
              <th>latlng</th>
              <th>flag</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  
                  <td>{result.subregion}</td>
                  <td>{result.population}</td>
				  <td>{result.latlng}</td>
				  <td>{result.flag}</td>
				   <td ><img style={{width:'100px',height:'100px'}} src={'https://restcountries.eu/data/iot.svg'} alt="no img" /></td>
                  <td>
                    {/*<button className="bg-warning"> <i class="fas fa-eye"></i> </button>*/}
                    {/*<button className="bg-info" onClick={e => {this.edituser(result.id)}}> <i class="fas fa-edit"></i> </button>
                    <button className="bg-danger" onClick={e => {this.deleteuser(result.id)}}> <i class="fas fa-trash"></i> </button>*/}
                  </td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>

       </div> 

      </div>


      
)
};
}

export default Home_Display;